import { sourceTypeColor, type SourceType } from "@/src/lib/source-classifier";

export default function SourceDot({ type, size = 6 }: { type: SourceType; size?: number }) {
  return (
    <span
      aria-hidden="true"
      className="inline-block shrink-0 rounded-full"
      style={{
        width: size,
        height: size,
        background: sourceTypeColor(type),
      }}
    />
  );
}
