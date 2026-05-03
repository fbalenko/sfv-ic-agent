"use client";

import { useRouter } from "next/navigation";
import {
  CartesianGrid,
  Cell,
  ReferenceArea,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
  ResponsiveContainer,
} from "recharts";
import type { ScoredCompany } from "./types";
import type { SubsegmentKey } from "@/src/lib/subsegments";

const RECOMMENDATION_FILL: Record<string, string> = {
  PURSUE: "var(--color-accent)",
  "TERM SHEET": "var(--color-accent)",
  WATCH: "var(--color-warn)",
  PASS: "var(--color-text-muted)",
};

function fillForRecommendation(rec: string, company: string): string {
  const fill = RECOMMENDATION_FILL[rec];
  if (!fill) {
    console.warn(
      `[thesis-scatter] unrecognized recommendation "${rec}" for ${company} — defaulting to PURSUE color`,
    );
    return "var(--color-accent)";
  }
  return fill;
}

// abbreviate long company names for the chart only — full name still shown
// in the tooltip and on the underlying data row
const CHART_LABEL_OVERRIDES: Record<string, string> = {
  "Bretton AI (fka Greenlite)": "Bretton AI",
};

interface Props {
  rows: ScoredCompany[];
  active: SubsegmentKey | null;
}

type DotPayload = ScoredCompany & {
  jx: number;
  jy: number;
  labelSide: "left" | "right";
  labelDy: number;
  labelText: string;
};

interface DotProps {
  cx?: number;
  cy?: number;
  payload?: DotPayload;
  active: SubsegmentKey | null;
  router: ReturnType<typeof useRouter>;
}

function ScatterDot({ cx, cy, payload, active, router }: DotProps) {
  if (cx == null || cy == null || !payload) return null;
  const fill = fillForRecommendation(payload.recommendation, payload.company);
  const dim = active && payload.subsegment !== active;
  const radius = Math.max(8 + (payload.score - 18) * 0.9, 6);
  const opacity = dim ? 0.18 : 0.92;
  const onClick = () => {
    if (payload.slug) router.push(`/memo/${payload.slug}`);
  };
  const labelOnLeft = payload.labelSide === "left";
  const labelX = labelOnLeft ? cx - radius - 22 : cx + radius + 12;
  const labelY = cy + 4 + payload.labelDy;
  const labelColor = payload.isStarred ? "var(--color-text)" : "var(--color-text-muted)";
  return (
    <g style={{ cursor: payload.slug ? "pointer" : "default" }} onClick={onClick}>
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        fill={fill}
        opacity={opacity}
        stroke={fill}
        strokeOpacity={dim ? 0.3 : 1}
        strokeWidth={1}
        style={{ transition: "transform 150ms ease-out, opacity 150ms ease-out", transformOrigin: `${cx}px ${cy}px` }}
      />
      <text
        x={labelX}
        y={labelY}
        textAnchor={labelOnLeft ? "end" : "start"}
        fill={labelColor}
        opacity={dim ? 0.4 : 1}
        fontFamily="var(--font-mono)"
        fontSize={10}
        letterSpacing={0.4}
        style={{ pointerEvents: "none" }}
      >
        {payload.labelText}
      </text>
    </g>
  );
}

export default function ThesisScatter({ rows, active }: Props) {
  const router = useRouter();
  // jitter overlapping points slightly so they don't stack
  const seen: Record<string, number> = {};
  const jittered = rows.map((r) => {
    const key = `${r.aiCentrality}-${r.workflowDepth}`;
    seen[key] = (seen[key] || 0) + 1;
    const offset = (seen[key] - 1) * 0.18;
    return {
      ...r,
      jx: r.aiCentrality + offset,
      jy: r.workflowDepth - offset,
    };
  });

  // anchor labels on the side away from the nearest edge:
  // centrality <= 3 → label sits to the right of the bubble
  // centrality  > 3 → label sits to the left of the bubble (text-anchor: end)
  const X_MID = 3;

  // per-side label collision handling: group bubbles whose jy values are close
  // (within PROXIMITY_JY) and fan their labels out symmetrically in 14px steps
  // so consecutive labels in a tight cluster don't visually merge
  const STAGGER_PX = 14;
  const PROXIMITY_JY = 0.5;
  const stagger = new Map<string, number>();
  const assignFanOut = (cluster: typeof jittered) => {
    const sorted = cluster
      .slice()
      .sort((a, b) => b.jy - a.jy || a.company.localeCompare(b.company));
    const groups: (typeof sorted)[] = [];
    for (const b of sorted) {
      const last = groups[groups.length - 1];
      if (last && Math.abs(last[last.length - 1].jy - b.jy) < PROXIMITY_JY) {
        last.push(b);
      } else {
        groups.push([b]);
      }
    }
    for (const group of groups) {
      const N = group.length;
      group.forEach((r, i) => {
        stagger.set(r.company, (i - (N - 1) / 2) * STAGGER_PX);
      });
    }
  };
  assignFanOut(jittered.filter((r) => r.jx <= X_MID));
  assignFanOut(jittered.filter((r) => r.jx > X_MID));

  const data: DotPayload[] = jittered.map((r) => ({
    ...r,
    labelSide: r.jx > X_MID ? "left" : "right",
    labelDy: stagger.get(r.company) ?? 0,
    labelText: CHART_LABEL_OVERRIDES[r.company] ?? r.company,
  }));

  return (
    <div className="border border-white/10 bg-bg-elevated/50">
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
        <h2 className="display text-[20px] text-text">Thesis positioning</h2>
        <span className="label text-[10px] text-text-muted">
          AI centrality × Workflow depth · bubble = total score
        </span>
      </div>
      <div className="h-[660px] w-full px-3 py-3 text-text-muted">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 24, right: 40, bottom: 44, left: 48 }}>
            <CartesianGrid stroke="rgba(122,147,184,0.18)" strokeDasharray="2 4" />
            <ReferenceArea
              x1={3.5}
              x2={5.5}
              y1={3.5}
              y2={5.5}
              fill="var(--color-accent)"
              fillOpacity={0.08}
              stroke="var(--color-accent)"
              strokeOpacity={0.35}
              strokeDasharray="3 3"
              ifOverflow="visible"
            />
            <XAxis
              type="number"
              dataKey="jx"
              name="AI centrality"
              domain={[0.5, 5.5]}
              ticks={[1, 2, 3, 4, 5]}
              tickLine={false}
              label={{
                value: "AI CENTRALITY",
                position: "insideBottom",
                offset: -16,
                fill: "var(--color-text-muted)",
                fontSize: 10,
                letterSpacing: 1.6,
                fontFamily: "var(--font-display)",
              }}
            />
            <YAxis
              type="number"
              dataKey="jy"
              name="Workflow depth"
              domain={[0.5, 5.5]}
              ticks={[1, 2, 3, 4, 5]}
              tickLine={false}
              label={{
                value: "WORKFLOW DEPTH",
                angle: -90,
                position: "insideLeft",
                offset: 10,
                fill: "var(--color-text-muted)",
                fontSize: 10,
                letterSpacing: 1.6,
                fontFamily: "var(--font-display)",
              }}
            />
            <ZAxis dataKey="score" range={[60, 240]} />
            <Tooltip
              cursor={{ stroke: "var(--color-accent)", strokeOpacity: 0.4 }}
              contentStyle={{
                background: "var(--color-bg)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 0,
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--color-text)",
                padding: "10px 12px",
                maxWidth: 320,
              }}
              labelStyle={{ display: "none" }}
              wrapperStyle={{ outline: "none" }}
              formatter={(_v: any, _n: any, props: any) => {
                const p = props.payload as ScoredCompany;
                return [
                  <div key="t" style={{ whiteSpace: "normal" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 13, marginBottom: 4 }}>
                      {p.company}
                    </div>
                    <div style={{ color: "var(--color-text-muted)", marginBottom: 6 }}>
                      {p.recommendation} · {p.score}/30
                    </div>
                    <div style={{ color: "var(--color-text)", fontFamily: "var(--font-sans)", fontSize: 12 }}>
                      {p.take}
                    </div>
                  </div>,
                  "",
                ];
              }}
            />
            <Scatter
              data={data}
              shape={(props: any) => (
                <ScatterDot {...props} active={active} router={router} />
              )}
            >
              {data.map((d, i) => (
                <Cell key={i} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-wrap items-center gap-5 border-t border-white/10 px-6 py-3">
        <Legend color="var(--color-accent)" label="Pursue" />
        <Legend color="var(--color-warn)" label="Watch" />
        <Legend color="var(--color-text-muted)" label="Pass" />
        <span className="ml-auto label text-[10px] text-text-muted">
          Top-right · build conviction
        </span>
      </div>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-2">
      <span className="h-2 w-2" style={{ background: color }} />
      <span className="label text-[10px] text-text-muted">{label}</span>
    </span>
  );
}
