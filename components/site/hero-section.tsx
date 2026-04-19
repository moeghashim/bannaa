import { PipelineTerminal } from "@/components/site/pipeline-terminal";
import type { SiteContent } from "@/lib/content";

type HeroSectionProps = {
  content: SiteContent["hero"];
};

export function HeroSection({ content }: HeroSectionProps) {
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
              <a className="btn primary" href="#tracks">
                {content.primaryCta}
              </a>
              <a className="btn" href="#templates">
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
