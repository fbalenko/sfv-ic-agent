export default function ScoreCircle({
  score,
  outOf = 30,
  size = 64,
}: {
  score: number;
  outOf?: number;
  size?: number;
}) {
  const radius = size / 2 - 4;
  const circ = 2 * Math.PI * radius;
  const ratio = Math.max(0, Math.min(1, score / outOf));
  const dash = circ * ratio;
  return (
    <div className="flex flex-col items-start gap-2">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-label={`Score ${score} of ${outOf}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(122,147,184,0.25)"
          strokeWidth={3}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth={3}
          strokeLinecap="butt"
          strokeDasharray={`${dash} ${circ}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="display"
          fontFamily="var(--font-display)"
          fontSize={size / 3}
          fontWeight={700}
          fill="var(--color-text)"
        >
          {score}
        </text>
      </svg>
      <span className="label text-[10px] text-text-muted">Rubric score</span>
    </div>
  );
}
