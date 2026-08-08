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
      <MissionSection content={content.mission} />
    </SiteShell>
  );
}
