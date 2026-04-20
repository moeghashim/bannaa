import Link from "next/link";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import type { LegalPageCopy, SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type LegalPageProps = {
  content: SiteContent;
  copy: LegalPageCopy;
  locale: Locale;
};

export function LegalPage({ content, copy, locale }: LegalPageProps) {
  return (
    <>
      <SiteHeader content={{ statusBar: content.statusBar, nav: content.nav }} locale={locale} />
      <main className="legal wrap">
        <p className="legal__eyebrow mono">{copy.eyebrow}</p>
        <h1 className="legal__title display">{copy.title}</h1>
        <p className="legal__intro">{copy.intro}</p>
        <p className="legal__updated mono">{copy.updated}</p>
        <div className="legal__sections">
          {copy.sections.map((section) => (
            <section key={section.heading} className="legal__section">
              <h2>{section.heading}</h2>
              {section.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </section>
          ))}
        </div>
        <section className="legal__contact">
          <h2>{copy.contact.heading}</h2>
          <address className="legal__address mono">
            {copy.contact.lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
        </section>
        <p className="legal__back">
          <Link className="mono" href={`/${locale}`}>
            {copy.backLabel}
          </Link>
        </p>
      </main>
      <SiteFooter content={content.footer} locale={locale} />
    </>
  );
}
