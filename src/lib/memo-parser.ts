import { readFileSync, existsSync, statSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { OUTPUT_DIR } from "./paths";
import { slugify } from "./slugify";

export type Recommendation = "PASS" | "WATCH" | "PURSUE" | "TERM SHEET" | "UNKNOWN";
export type Confidence = "H" | "M" | "L" | null;

export interface MemoSource {
  n: number;
  title: string;
  outlet: string;
  url: string;
  accessed: string;
}

export interface RubricScore {
  dimension: string;
  score: number;
  rationale: string;
}

export interface DiligenceItem {
  text: string;
  group: string;
}

export interface ParsedMemo {
  slug: string;
  company: string;
  date: string;
  stage: string;
  ask: string;
  recommendation: Recommendation;
  confidence: Confidence;
  rationale: string;
  content: string;
  sections: Record<string, string>;
  sources: MemoSource[];
  rubric: RubricScore[];
  totalScore: number;
  diligenceItems: DiligenceItem[];
  lastUpdated: string;
}

const RUBRIC_DIMENSIONS = [
  "AI centrality",
  "Workflow depth",
  "Data loop",
  "Founder-workflow fit",
  "Traction signal",
  "SFV thesis fit",
] as const;

export function memoFilePath(slug: string): string {
  return resolve(OUTPUT_DIR, `${slug}-memo.md`);
}

export function listMemoSlugs(): string[] {
  if (!existsSync(OUTPUT_DIR)) return [];
  return readdirSync(OUTPUT_DIR)
    .filter((f) => f.endsWith("-memo.md"))
    .map((f) => f.replace(/-memo\.md$/, ""));
}

/**
 * Resolve a market-map display name to the slug whose memo file actually exists.
 * Tries: cleaned name → fka/now alternates → first existing match.
 */
export function resolveSlugForName(displayName: string): string | null {
  const candidates: string[] = [];
  const stripped = displayName.replace(/[⭐⭐]/g, "").trim();
  candidates.push(slugify(stripped));
  candidates.push(slugify(stripped.replace(/\s*\([^)]*\)\s*/g, " ").trim()));
  const fkaMatch = stripped.match(/\((?:fka|f\/k\/a|formerly)\s+([^)]+)\)/i);
  if (fkaMatch) candidates.push(slugify(fkaMatch[1]));
  const nowMatch = stripped.match(/\((?:now|n\/k\/a)\s+([^)]+)\)/i);
  if (nowMatch) candidates.push(slugify(nowMatch[1]));

  for (const c of candidates) {
    if (c && existsSync(memoFilePath(c))) return c;
  }
  return null;
}

function safeWarn(slug: string, where: string, err: unknown) {
  const msg = err instanceof Error ? err.message : String(err);
  console.warn(`[memo-parser] ${slug}: ${where} — ${msg}`);
}

function extractSections(content: string): Record<string, string> {
  const out: Record<string, string> = {};
  const lines = content.split("\n");
  let key = "";
  let buf: string[] = [];
  for (const line of lines) {
    const m = line.match(/^##\s+(\d+)\.\s+(.+?)\s*$/);
    if (m) {
      if (key) out[key] = buf.join("\n").trim();
      key = m[1];
      buf = [];
    } else if (key) {
      buf.push(line);
    }
  }
  if (key) out[key] = buf.join("\n").trim();
  return out;
}

function extractFrontMatter(content: string): {
  company: string;
  date: string;
  stage: string;
  ask: string;
} {
  const h1 = content.match(/^#\s+(.+?)\s+—\s+IC Memo/m);
  const company = h1 ? h1[1].trim() : "";
  const date = (content.match(/\*\*Date:\*\*\s+(\S+)/) || [, ""])[1];
  const stage = (content.match(/\*\*Stage\s*\/?\s*Round:\*\*\s+(.+?)\s*$/m) || [, ""])[1];
  const ask = (content.match(/\*\*Ask:\*\*\s+(.+?)\s*$/m) || [, ""])[1];
  return { company, date, stage, ask };
}

function extractRecommendation(section1: string): {
  recommendation: Recommendation;
  confidence: Confidence;
  rationale: string;
} {
  const recMatch = section1.match(/\*\*(PASS|WATCH|PURSUE|TERM SHEET)\.?\*\*/i);
  const recommendation = (recMatch ? (recMatch[1].toUpperCase() as Recommendation) : "UNKNOWN");
  const confMatch = section1.match(/Confidence:\s*\*?\*?\s*([HML])\s*\*?\*?/);
  const confidence = (confMatch ? (confMatch[1].toUpperCase() as Confidence) : null);
  // rationale: take the first paragraph, strip bold tokens for the recommendation/confidence
  const firstPara = section1.split(/\n\n/)[0].replace(/\s+/g, " ").trim();
  const rationale = firstPara
    .replace(/\*\*(PASS|WATCH|PURSUE|TERM SHEET)\.?\*\*\.?/i, "")
    .replace(/Confidence:\s*\*?\*?\s*[HML]\.?\s*\*?\*?\.?/i, "")
    .trim();
  return { recommendation, confidence, rationale };
}

function extractRubric(section11: string, slug: string): { rubric: RubricScore[]; total: number } {
  const rubric: RubricScore[] = [];
  if (!section11) return { rubric, total: 0 };
  const lines = section11.split("\n");
  for (const line of lines) {
    if (!line.includes("|")) continue;
    const cells = line.split("|").map((c) => c.trim()).filter(Boolean);
    if (cells.length < 3) continue;
    const dim = cells[0].replace(/\*\*/g, "").trim();
    const scoreStr = cells[1].replace(/\*\*/g, "").trim();
    const score = parseInt(scoreStr, 10);
    if (isNaN(score)) continue;
    if (!RUBRIC_DIMENSIONS.some((d) => dim.toLowerCase() === d.toLowerCase())) continue;
    rubric.push({ dimension: dim, score, rationale: cells.slice(2).join(" | ").replace(/\*\*/g, "").trim() });
  }
  const totalMatch = section11.match(/\*?\*?Total:?\*?\*?:?\s*(\d+)\s*\/\s*30/i);
  const total = totalMatch ? parseInt(totalMatch[1], 10) : rubric.reduce((a, r) => a + r.score, 0);
  if (rubric.length !== 6) {
    safeWarn(slug, "rubric-dimensions", `expected 6, got ${rubric.length}`);
  }
  return { rubric, total };
}

function extractSources(section12: string, slug: string): MemoSource[] {
  if (!section12) return [];
  const sources: MemoSource[] = [];
  // sources may span paragraphs; flatten and split by leading [N]
  const text = section12.replace(/\r/g, "");
  const parts = text.split(/(?=^\[\d+\])/m);
  for (const part of parts) {
    const trimmed = part.trim();
    if (!trimmed.startsWith("[")) continue;
    const numMatch = trimmed.match(/^\[(\d+)\]\s*([\s\S]+)$/);
    if (!numMatch) continue;
    const n = parseInt(numMatch[1], 10);
    const rest = numMatch[2].trim().replace(/\s+/g, " ");
    const urlMatch = rest.match(/(https?:\/\/[^\s]+?)(?=\.?\s*Accessed:|\s*$)/);
    if (!urlMatch) {
      safeWarn(slug, `source[${n}]`, "no URL found");
      continue;
    }
    const url = urlMatch[1].replace(/[.,;]+$/, "");
    const accessedMatch = rest.match(/Accessed:\s*([0-9-]+)/);
    const accessed = accessedMatch ? accessedMatch[1] : "";
    const beforeUrl = rest.slice(0, urlMatch.index ?? 0).trim().replace(/\s+/g, " ");
    // pattern: "Title." Outlet.
    const tm = beforeUrl.match(/^"([^"]+?)\.?"\s*\.?\s*(.+?)\.?\s*$/);
    let title = "";
    let outlet = "";
    if (tm) {
      title = tm[1].trim();
      outlet = tm[2].trim().replace(/\.$/, "");
    } else {
      title = beforeUrl.replace(/^"|"$/g, "").replace(/\.$/, "");
      outlet = "";
    }
    sources.push({ n, title, outlet, url, accessed });
  }
  return sources;
}

function extractDiligence(section10: string): DiligenceItem[] {
  if (!section10) return [];
  const items: DiligenceItem[] = [];
  const lines = section10.split("\n");
  let group = "Diligence";
  for (const raw of lines) {
    const line = raw.trim();
    const groupMatch = line.match(/^\*\*(.+?):?\*\*\s*$/);
    if (groupMatch) {
      group = groupMatch[1].replace(/:$/, "");
      continue;
    }
    const numbered = line.match(/^\d+\.\s+(.+)$/);
    const bulleted = line.match(/^[-*]\s+(.+)$/);
    const item = numbered?.[1] ?? bulleted?.[1];
    if (!item) continue;
    // strip bold-leading sentences and pick first short summary
    const cleaned = item.replace(/\*\*/g, "").replace(/\s+/g, " ").trim();
    items.push({ text: cleaned, group });
  }
  return items;
}

export function parseMemo(slug: string): ParsedMemo | null {
  const path = memoFilePath(slug);
  if (!existsSync(path)) {
    console.warn(`[memo-parser] ${slug}: file not found at ${path}`);
    return null;
  }
  let content = "";
  let mtime = "";
  try {
    content = readFileSync(path, "utf8");
    mtime = statSync(path).mtime.toISOString();
  } catch (err) {
    safeWarn(slug, "read", err);
    return null;
  }

  const front = (() => {
    try {
      return extractFrontMatter(content);
    } catch (err) {
      safeWarn(slug, "frontmatter", err);
      return { company: "", date: "", stage: "", ask: "" };
    }
  })();

  const sections = (() => {
    try {
      return extractSections(content);
    } catch (err) {
      safeWarn(slug, "sections", err);
      return {};
    }
  })();

  const rec = (() => {
    try {
      return extractRecommendation(sections["1"] || "");
    } catch (err) {
      safeWarn(slug, "recommendation", err);
      return { recommendation: "UNKNOWN" as Recommendation, confidence: null, rationale: "" };
    }
  })();

  const { rubric, total } = (() => {
    try {
      return extractRubric(sections["11"] || "", slug);
    } catch (err) {
      safeWarn(slug, "rubric", err);
      return { rubric: [], total: 0 };
    }
  })();

  const sources = (() => {
    try {
      return extractSources(sections["12"] || "", slug);
    } catch (err) {
      safeWarn(slug, "sources", err);
      return [];
    }
  })();

  const diligenceItems = (() => {
    try {
      return extractDiligence(sections["10"] || "");
    } catch (err) {
      safeWarn(slug, "diligence", err);
      return [];
    }
  })();

  return {
    slug,
    company: front.company,
    date: front.date,
    stage: front.stage,
    ask: front.ask,
    recommendation: rec.recommendation,
    confidence: rec.confidence,
    rationale: rec.rationale,
    content,
    sections,
    sources,
    rubric,
    totalScore: total,
    diligenceItems,
    lastUpdated: mtime,
  };
}

export function getRubricByDimension(memo: ParsedMemo): Record<string, number> {
  const map: Record<string, number> = {};
  for (const r of memo.rubric) {
    map[r.dimension.toLowerCase()] = r.score;
  }
  return map;
}

export function aiCentrality(memo: ParsedMemo): number {
  const m = getRubricByDimension(memo);
  return m["ai centrality"] ?? 0;
}

export function workflowDepth(memo: ParsedMemo): number {
  const m = getRubricByDimension(memo);
  return m["workflow depth"] ?? 0;
}
