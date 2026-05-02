import type { Recommendation } from "@/src/lib/memo-parser";

const STYLES: Record<Recommendation, { bg: string; fg: string; border?: string }> = {
  PURSUE: { bg: "var(--color-accent)", fg: "#ffffff" },
  "TERM SHEET": {
    bg: "var(--color-bg)",
    fg: "var(--color-accent)",
    border: "var(--color-accent)",
  },
  WATCH: { bg: "var(--color-warn)", fg: "#1a1100" },
  PASS: { bg: "var(--color-negative)", fg: "#ffffff" },
  UNKNOWN: { bg: "transparent", fg: "var(--color-text-muted)", border: "var(--color-text-muted)" },
};

export default function RecommendationBadge({
  value,
  size = "sm",
}: {
  value: Recommendation;
  size?: "sm" | "md";
}) {
  const s = STYLES[value] || STYLES.UNKNOWN;
  const dims =
    size === "md"
      ? { padding: "6px 12px", fontSize: 13, letterSpacing: "0.1em" }
      : { padding: "4px 10px", fontSize: 11, letterSpacing: "0.1em" };
  return (
    <span
      className="mono inline-flex items-center font-semibold uppercase"
      style={{
        background: s.bg,
        color: s.fg,
        border: s.border ? `1px solid ${s.border}` : "1px solid transparent",
        borderRadius: 2,
        ...dims,
      }}
    >
      {value}
    </span>
  );
}
