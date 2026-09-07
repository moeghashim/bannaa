import { PageHero } from "@/components/site/page-hero";
import { SiteShell } from "@/components/site/site-shell";
import { TrackGlyph } from "@/components/site/track-glyph";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type TracksPageProps = {
  content: SiteContent;
  locale: Locale;
};

export function TracksPage({ content, locale }: TracksPageProps) {
  return (
    <SiteShell content={content} locale={locale}>
      <PageHero copy={content.pages.tracks} />
      <section className="track-detail-list wrap">
        {content.tracks.cards.map((track) => (
          <article key={track.id} id={track.id} className="track-detail card">
            <span className="corner" />
            <div className="track-detail__art">
              <TrackGlyph kind={track.kind} />
              <span className="num">{track.num}</span>
            </div>
            <div className="track-detail__body">
              <span className="tag">
                <span className="pip" />
                {track.sub}
              </span>
              <h2>{track.title}</h2>
              <p>{track.desc}</p>
              <div className="track-detail__meta mono">
                <span>{track.weeks}</span>
                <span>{track.level}</span>
              </div>
              <div className="track-detail__cols">
                <div>
                  <h3>{locale === "ar" ? "المخرجات" : "Outcomes"}</h3>
                  <ul>
                    {track.outcomes.map((outcome) => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>{locale === "ar" ? "الموضوعات" : "Topics"}</h3>
                  <div className="module-list">
                    {track.modules.map((module) => (
                      <section key={module.title}>
                        <h4>{module.title}</h4>
                        <p>{module.desc}</p>
                      </section>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </SiteShell>
  );
}
