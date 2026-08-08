import { PipelineTerminal } from "@/components/site/pipeline-terminal";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type HeroSectionProps = {
  content: SiteContent["hero"];
  locale: Locale;
};

export function HeroSection({ content, locale }: HeroSectionProps) {
  return (
    <section className="hero" id="top">
      <div className="abs-fill grid-bg hero__grid-bg" aria-hidden="true" />
      <div className="hero__wrap">
        <div className="hero__tags">
          {content.tags.map((t) => (
            <span key={t.label} className={`tag${t.tone === "warn" ? " warn" : ""}`}>
              <span className="pip" />
              {t.label}
            </span>
          ))}
        </div>

        <div className="hero__layout">
          <div className="hero__copy">
            <h1 className="hero__title">
              {content.titleLine1}
              <br />
              <span className="accent">{content.titleAccent}</span>
              {content.titleTail}
            </h1>
            <p className="hero__desc">{content.description}</p>
            <div className="hero__actions">
              <a className="btn primary" href={`/${locale}/community`}>
                {content.primaryCta}
              </a>
              <a className="btn" href={`/${locale}/tracks`}>
                {content.secondaryCta}
              </a>
            </div>
          </div>
          <div className="hero__terminal-slot">
            <PipelineTerminal content={content.terminal} />
          </div>
        </div>

        <div className="hero__stats">
          {content.stats.map((s) => (
            <div key={s.sub} className="stat-block">
              <div className="n">{s.num}</div>
              <div className="label">{s.label}</div>
              <div className="sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
