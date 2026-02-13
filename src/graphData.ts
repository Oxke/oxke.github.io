import { generatedLinkMap } from "./linkMap.generated";

export type LinkMap = Record<string, string[]>;

export interface GraphNode {
  id: string;
  visited: boolean;
}

export interface GraphEdge {
  source: string;
  target: string;
}

export function computeGraph(visited: Set<string>): {
  nodes: GraphNode[];
  edges: GraphEdge[];
} {
  return computeGraphWithLinkMap(visited, generatedLinkMap);
}

export function computeGraphWithLinkMap(
  visited: Set<string>,
  linkMap: LinkMap,
): {
  nodes: GraphNode[];
  edges: GraphEdge[];
} {
  const nodeSet = new Set<string>();
  const edges: GraphEdge[] = [];

  // \about is always the seed node
  nodeSet.add("\\about");

  for (const page of visited) {
    if (page !== "\\unknown") {
      nodeSet.add(page);
      const links = linkMap[page] || [];
      for (const link of links) {
        nodeSet.add(link);
        edges.push({ source: page, target: link });
      }
    }
  }

  return {
    nodes: Array.from(nodeSet).map((id) => ({
      id,
      visited: visited.has(id),
    })),
    edges,
  };
}
