import { TrackGlyph } from "@/components/site/track-glyph";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type TracksStripProps = {
  content: SiteContent["tracks"];
  locale: Locale;
};

export function TracksStrip({ content, locale }: TracksStripProps) {
  return (
    <section className="wrap" id="tracks">
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
          <a className="ul" href={`/${locale}/tracks`} style={{ marginTop: 12 }}>
            {content.allLink}
          </a>
        </div>
      </header>
      <div className="grid g-3">
        {content.cards.map((t) => (
          <article key={t.id} className="card track-card">
            <span className="corner" />
            <div className="track-card__art">
              <TrackGlyph kind={t.kind} />
              <div className="track-card__num num">{t.num}</div>
              <div className="track-card__sub">
                <span className="tag">
                  <span className="pip" />
                  {t.sub}
                </span>
              </div>
            </div>
            <div className="track-card__body">
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
              <ul className="track-card__outcomes">
                {t.outcomes.slice(0, 3).map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
              <div className="track-card__meta">
                <span>{t.weeks}</span>
                <span>{t.level}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
