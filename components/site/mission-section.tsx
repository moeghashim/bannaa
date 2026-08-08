import type { SiteContent } from "@/lib/content";

type MissionSectionProps = {
  content: SiteContent["mission"];
};

export function MissionSection({ content }: MissionSectionProps) {
  return (
    <section className="mission-band" id="mission">
      <div className="wrap">
        <header className="sec-head">
          <div>
            <div className="eyebrow">{content.eyebrow}</div>
            <h2>
              {content.title}
              <br />
              <span className="accent">{content.titleAccent}</span>
            </h2>
          </div>
          <div className="right">{content.description}</div>
        </header>
        <div className="mission-grid">
          <div className="mission-metrics">
            {content.metrics.map((metric) => (
              <div key={metric.sub} className="mission-metric">
                <div className="n display">{metric.num}</div>
                <div>{metric.label}</div>
                <span className="mono">{metric.sub}</span>
              </div>
            ))}
          </div>
          <div className="mission-pillars">
            {content.pillars.map((pillar, index) => (
              <article key={pillar.title} className="card mission-pillar">
                <span className="corner" />
                <span className="num">{String(index + 1).padStart(2, "0")}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
