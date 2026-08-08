import { PageHero } from "@/components/site/page-hero";
import { SiteShell } from "@/components/site/site-shell";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type ResourcesPageProps = {
  content: SiteContent;
  locale: Locale;
};

export function ResourcesPage({ content, locale }: ResourcesPageProps) {
  return (
    <SiteShell content={content} locale={locale}>
      <PageHero copy={content.resources.hero} />
      <section className="resource-sections wrap">
        {content.resources.sections.map((section) => (
          <div key={section.title} className="resource-section">
            <header className="sec-head">
              <div>
                <div className="eyebrow">/ resource stack</div>
                <h2>{section.title}</h2>
              </div>
            </header>
            <div className="resource-grid">
              {section.items.map((item) => (
                <article key={item.title} className="card resource-card">
                  <span className="corner" />
                  <span className="tag">
                    <span className="pip" />
                    {item.tag}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <a className="ul" href={item.href}>
                    ↗
                  </a>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </SiteShell>
  );
}
