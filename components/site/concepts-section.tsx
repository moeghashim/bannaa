import type { SiteContent } from "@/lib/content";

type ConceptsSectionProps = {
  content: SiteContent["concepts"];
};

export function ConceptsSection({ content }: ConceptsSectionProps) {
  return (
    <section className="wrap" id="concepts">
      <header className="sec-head">
        <div>
          <div className="eyebrow">{content.eyebrow}</div>
          <h2>
            {content.title}
            <br />
            {content.titleAccent}
          </h2>
        </div>
        <div className="right">
          <div>{content.description}</div>
          <div className="mono" style={{ marginTop: 12 }}>
            {content.meta}
          </div>
        </div>
      </header>
      <div className="concepts-grid">
        {content.cells.map((c) => (
          <article key={c.id} className="concept-cell">
            <div className="concept-cell__head">
              <span className="num">#{c.id}</span>
              <span className="concept-cell__arrow">→</span>
            </div>
            <h3>{c.title}</h3>
            <div className="concept-cell__sub">{c.sub}</div>
            <p>{c.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
