type MarqueeProps = {
  items: string[];
};

export function Marquee({ items }: MarqueeProps) {
  const row = items.map((t, i) => (
    <span key={i} style={{ display: "inline-flex", gap: 48 }}>
      <span className="star">✦</span>
      <span>{t}</span>
    </span>
  ));
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row}
        {row}
        {row}
      </div>
    </div>
  );
}
