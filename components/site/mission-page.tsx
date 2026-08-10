import { MissionSection } from "@/components/site/mission-section";
import { PageHero } from "@/components/site/page-hero";
import { SiteShell } from "@/components/site/site-shell";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type MissionPageProps = {
  content: SiteContent;
  locale: Locale;
};

export function MissionPage({ content, locale }: MissionPageProps) {
  return (
    <SiteShell content={content} locale={locale}>
      <PageHero copy={content.pages.mission} />
      <section className="legal wrap page-copy">
        <div className="legal__sections">
          {content.pages.mission.sections.map((section) => (
            <section key={section.heading} className="legal__section">
              <h2>{section.heading}</h2>
              {section.body.map((body) => (
                <p key={body}>{body}</p>
              ))}
            </section>
          ))}
        </div>
      </section>
      <section className="mission-track-map wrap">
        <header className="sec-head">
          <div>
            <div className="eyebrow">{locale === "ar" ? "/ المسارات الثلاثة" : "/ the three tracks"}</div>
            <h2>
              {locale === "ar" ? "كل شيء يعود" : "Everything maps"}
              <br />
              <span className="accent">{locale === "ar" ? "إلى مسار." : "to a track."}</span>
            </h2>
          </div>
          <div className="right">
            {locale === "ar"
              ? "كل فيديو، خيط، نشرة، نقاش، أو مورد يجب أن يدعم هدف بناء 10,000 شركة صغيرة عالية الإنتاجية."
              : "Every video, thread, newsletter, discussion, or resource should support the goal of enabling 10,000 high-productivity micro-startups."}
          </div>
        </header>
        <div className="mission-track-grid">
          {content.tracks.cards.map((track) => (
            <article key={track.id} className="card mission-track-card">
              <span className="corner" />
              <span className="num">{track.num}</span>
              <h3>{track.title}</h3>
              <p>{track.desc}</p>
              <div>
                <h4>{locale === "ar" ? "يغطي" : "Covers"}</h4>
                <ul>
                  {track.modules.map((module) => (
                    <li key={module.title}>{module.title}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <MissionSection content={content.mission} />
    </SiteShell>
  );
}
