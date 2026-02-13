import { useMemo } from "react";
import { computeGraph } from "../graphData";

export function useGraphData(visitedPages: Set<string>) {
  return useMemo(() => computeGraph(visitedPages), [visitedPages]);
}
