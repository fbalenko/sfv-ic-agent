export type SourceType = "primary" | "tier1-press" | "analyst" | "other";

const PRIMARY = [
  "prnewswire.com",
  "businesswire.com",
  "globenewswire.com",
  "sec.gov",
  "sec.report",
  "ycombinator.com",
  // company-owned blogs and press pages
  "ramp.com",
  "cascading.ai",
  "stripe.com",
  "anthropic.com",
];

const TIER1_PRESS = [
  "americanbanker.com",
  "techcrunch.com",
  "theinformation.com",
  "bloomberg.com",
  "forbes.com",
  "reuters.com",
  "wsj.com",
  "ft.com",
  "fortune.com",
  "cnbc.com",
  "axios.com",
  "wired.com",
  "businessinsider.com",
  "economist.com",
  "nytimes.com",
];

const ANALYST = [
  "gartner.com",
  "forrester.com",
  "idc.com",
  "mckinsey.com",
  "bcg.com",
  "bain.com",
  "deloitte.com",
  "pwc.com",
  "kpmg.com",
  "ey.com",
  "moodysanalytics.com",
  "spglobal.com",
];

function host(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "").toLowerCase();
  } catch {
    return "";
  }
}

function matches(h: string, list: string[]): boolean {
  return list.some((d) => h === d || h.endsWith("." + d));
}

export function classifySource(url: string): SourceType {
  const h = host(url);
  if (!h) return "other";
  if (matches(h, PRIMARY)) return "primary";
  if (matches(h, TIER1_PRESS)) return "tier1-press";
  if (matches(h, ANALYST)) return "analyst";
  // company blog heuristic — single-segment com/io/ai with /blog or /press in path
  if (/\/(blog|press|news|company)\b/i.test(url)) return "primary";
  return "other";
}

export function sourceTypeColor(t: SourceType): string {
  switch (t) {
    case "primary":
      return "var(--color-accent)";
    case "tier1-press":
      return "var(--color-warn)";
    case "analyst":
      return "var(--color-positive)";
    default:
      return "var(--color-text-muted)";
  }
}

export function sourceTypeLabel(t: SourceType): string {
  switch (t) {
    case "primary":
      return "Primary";
    case "tier1-press":
      return "Tier-1 press";
    case "analyst":
      return "Industry analyst";
    default:
      return "Other";
  }
}
