import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { TerminalBlock } from "@/components/ui/terminal-block";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type HeroSectionProps = {
  content: SiteContent["hero"];
  locale: Locale;
};

export function HeroSection({ content, locale }: HeroSectionProps) {
  return (
    <Section className="hero-section blueprint-grid" tone="default">
      <Container className="hero-section__grid">
        <div className="hero-section__copy">
          <span className="hero-section__eyebrow">{content.eyebrow}</span>
          <h1 className="hero-section__title">
            {content.titleLines.map((line) => (
              <span className="hero-section__title-line" key={line}>
                {line}
              </span>
            ))}
            <span className="hero-section__title-line hero-section__title-line-accent">{content.accentLine}</span>
          </h1>
          <p className="hero-section__description">{content.description}</p>
          <div className="hero-section__actions">
            <Button href="#cta" size="lg">
              {content.primaryCta}
            </Button>
            <Button href={`/${locale}/system`} size="lg" variant="secondary">
              {content.secondaryCta}
            </Button>
          </div>
        </div>
        <div className="hero-section__visual">
          <TerminalBlock label={content.terminalLabel} lines={content.terminalLines} />
        </div>
        <div className="hero-section__watermark" aria-hidden="true">
          {locale === "en" ? "OS" : "٠١"}
        </div>
      </Container>
    </Section>
  );
}
