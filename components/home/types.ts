import type { MarketMapRow } from "@/src/lib/market-map-parser";

export interface ScoredCompany extends MarketMapRow {
  aiCentrality: number;
  workflowDepth: number;
  recommendation: "PASS" | "WATCH" | "PURSUE" | "TERM SHEET" | "UNKNOWN";
}
