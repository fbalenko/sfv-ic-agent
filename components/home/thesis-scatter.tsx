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
  UNKNOWN: "var(--color-text-muted)",
};

interface Props {
  rows: ScoredCompany[];
  active: SubsegmentKey | null;
}

interface DotProps {
  cx?: number;
  cy?: number;
  payload?: ScoredCompany & { jx: number; jy: number };
  active: SubsegmentKey | null;
  router: ReturnType<typeof useRouter>;
}

function ScatterDot({ cx, cy, payload, active, router }: DotProps) {
  if (cx == null || cy == null || !payload) return null;
  const fill = RECOMMENDATION_FILL[payload.recommendation] ?? "var(--color-text-muted)";
  const dim = active && payload.subsegment !== active;
  const radius = 8 + (payload.score - 18) * 0.9; // bubble size by score
  const opacity = dim ? 0.18 : 0.92;
  const onClick = () => {
    if (payload.slug) router.push(`/memo/${payload.slug}`);
  };
  return (
    <g style={{ cursor: payload.slug ? "pointer" : "default" }} onClick={onClick}>
      <circle
        cx={cx}
        cy={cy}
        r={Math.max(radius, 6)}
        fill={fill}
        opacity={opacity}
        stroke={fill}
        strokeOpacity={dim ? 0.3 : 1}
        strokeWidth={1}
        style={{ transition: "transform 150ms ease-out, opacity 150ms ease-out", transformOrigin: `${cx}px ${cy}px` }}
      />
      <text
        x={cx + radius + 6}
        y={cy + 4}
        fill="currentColor"
        opacity={dim ? 0.3 : 0.9}
        className="label"
        fontSize={10}
        letterSpacing={0.6}
        style={{ pointerEvents: "none" }}
      >
        {payload.company}
      </text>
    </g>
  );
}

export default function ThesisScatter({ rows, active }: Props) {
  const router = useRouter();
  // jitter overlapping points slightly so labels don't stack
  const seen: Record<string, number> = {};
  const data = rows.map((r) => {
    const key = `${r.aiCentrality}-${r.workflowDepth}`;
    seen[key] = (seen[key] || 0) + 1;
    const offset = (seen[key] - 1) * 0.18;
    return {
      ...r,
      jx: r.aiCentrality + offset,
      jy: r.workflowDepth - offset,
    };
  });

  return (
    <div className="border border-white/10 bg-bg-elevated/50">
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
        <h2 className="display text-[20px] text-text">Thesis positioning</h2>
        <span className="label text-[10px] text-text-muted">
          AI centrality × Workflow depth · bubble = total score
        </span>
      </div>
      <div className="h-[480px] w-full px-3 py-3 text-text-muted">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 24, right: 80, bottom: 36, left: 40 }}>
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
        <Legend color="var(--color-text-muted)" label="Pass / Unknown" />
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
