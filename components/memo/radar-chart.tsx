"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import type { RubricScore } from "@/src/lib/memo-parser";

const ORDER = [
  "AI centrality",
  "Workflow depth",
  "Data loop",
  "Founder-workflow fit",
  "Traction signal",
  "SFV thesis fit",
];

const SHORT: Record<string, string> = {
  "AI centrality": "AI",
  "Workflow depth": "Wf depth",
  "Data loop": "Data loop",
  "Founder-workflow fit": "Founder fit",
  "Traction signal": "Traction",
  "SFV thesis fit": "SFV fit",
};

export default function RubricRadar({ rubric }: { rubric: RubricScore[] }) {
  const map: Record<string, number> = {};
  for (const r of rubric) map[r.dimension.toLowerCase()] = r.score;
  const data = ORDER.map((d) => ({
    dim: SHORT[d],
    full: d,
    score: map[d.toLowerCase()] ?? 0,
  }));
  return (
    <div className="border border-white/10 bg-bg/60">
      <div className="border-b border-white/10 px-4 py-3">
        <span className="label text-[10px] text-text-muted">Rubric breakdown</span>
      </div>
      <div className="h-[260px] w-full px-2 py-3">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data} outerRadius="70%">
            <PolarGrid stroke="rgba(122,147,184,0.25)" />
            <PolarAngleAxis
              dataKey="dim"
              tick={{
                fill: "var(--color-text-muted)",
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: 0.4,
              }}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 5]}
              tick={false}
              axisLine={false}
            />
            <Radar
              dataKey="score"
              stroke="var(--color-accent)"
              strokeWidth={1.5}
              fill="var(--color-accent)"
              fillOpacity={0.3}
              isAnimationActive={false}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
