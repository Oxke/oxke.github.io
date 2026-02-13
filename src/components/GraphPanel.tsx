import { useEffect, useRef, useCallback } from "react";
import * as d3 from "d3";
import type { GraphNode, GraphEdge } from "../graphData";

interface SimNode extends d3.SimulationNodeDatum {
  id: string;
  visited: boolean;
}

interface SimLink extends d3.SimulationLinkDatum<SimNode> {
  source: string | SimNode;
  target: string | SimNode;
}

interface Props {
  nodes: GraphNode[];
  edges: GraphEdge[];
  currentTopic: string;
  onNavigate: (topic: string) => void;
}

export default function GraphPanel({
  nodes,
  edges,
  currentTopic,
  onNavigate,
}: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  // Store positions as fractions (0-1) of SVG size so they survive resizes
  const posCache = useRef<Map<string, { rx: number; ry: number }>>(new Map());

  // Stable callback ref so D3 listeners don't go stale
  const onNavigateRef = useRef(onNavigate);
  onNavigateRef.current = onNavigate;
  const handleClick = useCallback((_: unknown, d: SimNode) => {
    onNavigateRef.current(d.id);
  }, []);

  useEffect(() => {
    const svgEl = svgRef.current;
    if (!svgEl) return;

    const svg = d3.select(svgEl);
    let width = 0;
    let height = 0;

    const refreshDimensions = () => {
      const rect = svgEl.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
    };

    refreshDimensions();

    svg.selectAll("*").remove();

    const g = svg.append("g");

    const pad = 50;
    const nodeRadius = 8;

    const clampX = (x: number) =>
      Math.max(pad + nodeRadius, Math.min(width - pad - nodeRadius, x));
    const clampY = (y: number) =>
      Math.max(pad + nodeRadius, Math.min(height - pad - nodeRadius, y));

    let aboutX = width * 0.45;
    let aboutY = height * 0.15;

    const simNodes: SimNode[] = nodes.map((n) => {
      if (n.id === "\\about") {
        return { ...n, x: aboutX, y: aboutY, fx: aboutX, fy: aboutY };
      }
      const cached = posCache.current.get(n.id);
      return {
        ...n,
        x: cached ? cached.rx * width : aboutX + (Math.random() - 0.5) * 60,
        y: cached ? cached.ry * height : aboutY + (Math.random() - 0.5) * 60,
      };
    });

    const simLinks: SimLink[] = edges.map((e) => ({
      source: e.source,
      target: e.target,
    }));

    const simulation = d3
      .forceSimulation<SimNode>(simNodes)
      .force(
        "link",
        d3
          .forceLink<SimNode, SimLink>(simLinks)
          .id((d) => d.id)
          .distance(70),
      )
      .force("charge", d3.forceManyBody().strength(-200))
      .force("collide", d3.forceCollide(35))
      .velocityDecay(0.32);

    let settleTimer: ReturnType<typeof setTimeout> | null = null;
    let rafId: number | null = null;
    let pendingScrollDelta = 0;
    let lastScrollY = window.scrollY;

    const recomputeAboutAnchor = () => {
      refreshDimensions();

      aboutX = width * 0.45;
      aboutY = height * 0.15;

      for (const n of simNodes) {
        if (n.id === "\\about") {
          n.x = aboutX;
          n.y = aboutY;
          n.fx = aboutX;
          n.fy = aboutY;
          continue;
        }

        n.vy = (n.vy ?? 0) - pendingScrollDelta * 0.08;
      }

      pendingScrollDelta = 0;

      simulation.alphaTarget(0.1).restart();
      if (settleTimer) clearTimeout(settleTimer);
      settleTimer = setTimeout(() => simulation.alphaTarget(0), 180);
    };

    const handleScrollTick = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      pendingScrollDelta += delta;

      if (rafId == null) {
        rafId = window.requestAnimationFrame(() => {
          rafId = null;
          recomputeAboutAnchor();
        });
      }
    };

    const link = g
      .append("g")
      .selectAll("line")
      .data(simLinks)
      .join("line")
      .attr("class", "graph-edge");

    const node = g
      .append("g")
      .selectAll<SVGGElement, SimNode>("g")
      .data(simNodes)
      .join("g")
      .attr("cursor", "pointer")
      .on("click", handleClick)
      .call(
        d3
          .drag<SVGGElement, SimNode>()
          .filter((_, d) => d.id !== "\\about")
          .on("start", (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on("drag", (event, d) => {
            d.fx = clampX(event.x);
            d.fy = clampY(event.y);
          })
          .on("end", (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            if (d.id === "\\about") {
              d.fx = aboutX;
              d.fy = aboutY;
            } else {
              d.fx = null;
              d.fy = null;
            }
          }),
      );

    node
      .append("circle")
      .attr("r", nodeRadius)
      .attr("class", (d) =>
        d.id === currentTopic
          ? "node-current"
          : d.visited
            ? "node-visited"
            : "node-discovered",
      );

    node
      .append("text")
      .text((d) => d.id.slice(1))
      .attr("dx", 12)
      .attr("dy", 4)
      .attr("class", (d) =>
        d.id === currentTopic ? "label-current" : "label-default",
      );

    simulation.on("tick", () => {
      for (const d of simNodes) {
        if (d.id === "\\about") {
          d.x = aboutX;
          d.y = aboutY;
          d.fx = aboutX;
          d.fy = aboutY;
          continue;
        }
        d.x = clampX(d.x!);
        d.y = clampY(d.y!);

        if (d.fx != null) d.fx = clampX(d.fx);
        if (d.fy != null) d.fy = clampY(d.fy);
      }

      link
        .attr("x1", (d) => (d.source as SimNode).x!)
        .attr("y1", (d) => (d.source as SimNode).y!)
        .attr("x2", (d) => (d.target as SimNode).x!)
        .attr("y2", (d) => (d.target as SimNode).y!);

      node.attr("transform", (d) => `translate(${d.x},${d.y})`);
    });

    const savePositions = () => {
      simNodes.forEach((n) => {
        if (n.x != null && n.y != null) {
          posCache.current.set(n.id, {
            rx: n.x / width,
            ry: n.y / height,
          });
        }
      });
    };

    simulation.on("end", savePositions);

    window.addEventListener("wheel", handleScrollTick, { passive: true });
    window.addEventListener("scroll", handleScrollTick, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScrollTick);
      window.removeEventListener("scroll", handleScrollTick);
      if (settleTimer) clearTimeout(settleTimer);
      if (rafId != null) window.cancelAnimationFrame(rafId);
      savePositions();
      simulation.stop();
    };
  }, [nodes, edges, currentTopic, handleClick]);

  return (
    <aside className="graph-panel">
      <svg ref={svgRef} />
    </aside>
  );
}
