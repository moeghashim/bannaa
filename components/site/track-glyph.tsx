import type { TrackKind } from "@/lib/content";

type TrackGlyphProps = { kind: TrackKind };

const agentNodes = [
  { deg: 0, x: 300, y: 150 },
  { deg: 60, x: 250, y: 236.6025403784 },
  { deg: 120, x: 150, y: 236.6025403784 },
  { deg: 180, x: 100, y: 150 },
  { deg: 240, x: 150, y: 63.3974596216 },
  { deg: 300, x: 250, y: 63.3974596216 }
];

const builderBars = [
  120, 167.9425538604, 204.1470984808, 219.7494986604, 210.9297426826,
  179.8472144104, 134.112000806, 84.921677231, 44.3197504692, 22.2469882335,
  24.1075725337, 49.445967443, 92.0584501801, 141.5119988088, 185.6986598719,
  213.7999976775, 218.9358246623, 199.8487112623, 161.2118485242, 112.4848879538,
  65.5978889111, 32.0304240028, 20.0009793449, 32.4547825312, 66.3427082,
  113.3678102649, 162.0167036827, 200.3784426552, 219.0607355695, 213.4895055525,
  185.0287840157, 140.6467481938, 91.2096683335, 48.8214657631, 23.860250812,
  22.4373994532, 44.9012753228, 85.751938153, 134.9877209663, 180.553986972,
  211.2945250728, 219.6829794279, 203.6655638536, 167.1639003094, 119.114869071,
  71.2825487539, 35.3779595825, 20.1917972021, 29.4421637993, 60.8642470135,
  106.7648249902, 155.9058354022, 196.255845048, 217.9357643104, 215.6375928405,
  189.9240031655, 147.0905788308, 97.6244359813, 53.6366115787, 25.8968591657
];

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
        {agentNodes.map((node) => (
          <g key={node.deg} fill="none" stroke="var(--line-2)">
            <line x1="200" y1="150" x2={node.x} y2={node.y} />
            <circle cx={node.x} cy={node.y} r="12" fill="var(--bg-2)" stroke="var(--accent)" />
          </g>
        ))}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="100%" height="100%" fill="var(--bg-3)" />
      {builderBars.map((h, i) => {
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
