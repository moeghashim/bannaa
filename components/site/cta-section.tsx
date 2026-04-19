import type { SiteContent } from "@/lib/content";

type CtaSectionProps = {
  content: SiteContent["cta"];
};

export function CtaSection({ content }: CtaSectionProps) {
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
            <form className="cta__form" action="#cta">
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
