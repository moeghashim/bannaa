import type { TrackKind } from "@/lib/content";

type TrackGlyphProps = { kind: TrackKind };

export function TrackGlyph({ kind }: TrackGlyphProps) {
  if (kind === "foundations") {
    return (
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        <rect width="100%" height="100%" fill="var(--bg-3)" />
        {Array.from({ length: 10 }).map((_, i) => (
          <rect
            key={i}
            x={40 + i * 32}
            y={260 - (i + 1) * 22}
            width={24}
            height={(i + 1) * 22}
            fill={i === 9 ? "var(--accent)" : "var(--bg-2)"}
            stroke={i === 9 ? "var(--accent)" : "var(--line-2)"}
          />
        ))}
      </svg>
    );
  }
  if (kind === "agents") {
    return (
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        <rect width="100%" height="100%" fill="var(--bg-3)" />
        <circle cx="200" cy="150" r="20" fill="var(--accent)" />
        {[0, 60, 120, 180, 240, 300].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const x = 200 + Math.cos(rad) * 100;
          const y = 150 + Math.sin(rad) * 100;
          return (
            <g key={deg} fill="none" stroke="var(--line-2)">
              <line x1="200" y1="150" x2={x} y2={y} />
              <circle cx={x} cy={y} r="12" fill="var(--bg-2)" stroke="var(--accent)" />
            </g>
          );
        })}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="100%" height="100%" fill="var(--bg-3)" />
      {Array.from({ length: 60 }).map((_, i) => {
        const h = 20 + (Math.sin(i * 0.5) + 1) * 100;
        return (
          <rect
            key={i}
            x={20 + i * 6}
            y={150 - h / 2}
            width={4}
            height={h}
            fill={i % 9 === 0 ? "var(--accent)" : "var(--line-2)"}
          />
        );
      })}
    </svg>
  );
}
