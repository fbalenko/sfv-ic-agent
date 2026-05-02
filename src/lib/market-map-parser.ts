import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { OUTPUT_DIR } from "./paths";
import { classifySubsegment, type SubsegmentKey } from "./subsegments";
import { resolveSlugForName } from "./memo-parser";

export interface MarketMapRow {
  company: string;
  displayName: string;
  slug: string | null;
  subsegmentRaw: string;
  subsegment: SubsegmentKey;
  stage: string;
  aiCore: string;
  isAiCore: boolean;
  score: number;
  take: string;
  isStarred: boolean;
}

const MARKET_MAP_PATH = resolve(OUTPUT_DIR, "market-map.md");

function stripStar(name: string): { name: string; starred: boolean } {
  const starred = /[⭐⭐]/.test(name);
  return { name: name.replace(/\s*[⭐⭐]\s*/g, "").trim(), starred };
}

export function parseMarketMap(): MarketMapRow[] {
  if (!existsSync(MARKET_MAP_PATH)) {
    console.warn(`[market-map-parser] file not found: ${MARKET_MAP_PATH}`);
    return [];
  }
  const text = readFileSync(MARKET_MAP_PATH, "utf8");
  const rows: MarketMapRow[] = [];
  const lines = text.split("\n");
  for (const line of lines) {
    if (!line.includes("|")) continue;
    const cells = line.split("|").map((c) => c.trim());
    // pipe-table rows produce empty leading/trailing cells; trim those
    const inner = cells.filter((c, i) => !(i === 0 && c === "") && !(i === cells.length - 1 && c === ""));
    if (inner.length < 6) continue;
    if (/^company\b/i.test(inner[0])) continue; // header
    if (/^[-:\s]+$/.test(inner[0])) continue; // separator
    const score = parseInt(inner[4], 10);
    if (isNaN(score)) continue;

    const { name: cleanName, starred } = stripStar(inner[0]);
    const displayName = inner[0]; // keep ⭐ if present in the raw
    const subsegmentRaw = inner[1];
    const slug = resolveSlugForName(cleanName) ?? null;
    if (!slug) {
      console.warn(`[market-map-parser] no memo file for "${cleanName}" — row will not link`);
    }
    rows.push({
      company: cleanName,
      displayName,
      slug,
      subsegmentRaw,
      subsegment: classifySubsegment(subsegmentRaw),
      stage: inner[2],
      aiCore: inner[3],
      isAiCore: /^y(es)?$/i.test(inner[3]),
      score,
      take: inner[5],
      isStarred: starred || score >= 22,
    });
  }
  // ensure stable ordering
  rows.sort((a, b) => b.score - a.score || a.company.localeCompare(b.company));
  return rows;
}
