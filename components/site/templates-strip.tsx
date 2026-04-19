import type { SiteContent } from "@/lib/content";

type TemplatesStripProps = {
  content: SiteContent["templates"];
};

export function TemplatesStrip({ content }: TemplatesStripProps) {
  return (
    <section className="wrap" id="templates">
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
          <a className="ul" href="#templates" style={{ marginTop: 12 }}>
            {content.allLink}
          </a>
        </div>
      </header>
      <div className="grid g-4">
        {content.cards.map((t) => (
          <article key={t.id} className="card tpl-card">
            <span className="corner" />
            <div>
              <div className="tpl-card__head">
                <span className="tag">
                  {t.kind === "prompt" ? "◻" : "◧"} {t.tag}
                </span>
                <span className="tpl-card__uses">
                  {t.uses} {content.usesSuffix}
                </span>
              </div>
              <h3>{t.title}</h3>
            </div>
            <div className="tpl-card__foot">
              <div className="tpl-card__hint">{content.hint}</div>
              <div className="tpl-card__icon">↙</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
