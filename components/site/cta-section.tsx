import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type CtaSectionProps = {
  content: SiteContent["cta"];
  locale: Locale;
};

export function CtaSection({ content, locale }: CtaSectionProps) {
  return (
    <section className="cta" id="cta">
      <div className="cta__wrap">
        <div className="cta__row">
          <div>
            <div className="cta__eyebrow">{content.eyebrow}</div>
            <h2>
              {content.titleLine1}
              <br />
              <span className="accent">{content.titleAccent}</span>
            </h2>
          </div>
          <div className="cta__form-col">
            <p>{content.description}</p>
            <form className="cta__form" action={`/${locale}/join`}>
              <input type="email" placeholder={content.placeholder} aria-label={content.placeholder} />
              <button type="submit" className="btn primary">
                {content.button}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
