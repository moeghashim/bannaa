import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Section } from "@/components/ui/section";
import { TerminalBlock } from "@/components/ui/terminal-block";
import {
  colorTokens,
  componentRecipes,
  spacingTokens,
  typographyTokens
} from "@/lib/design-system/tokens";
import type { Locale } from "@/lib/i18n";

type DesignSystemShowcaseProps = {
  locale: Locale;
};

export function DesignSystemShowcase({ locale }: DesignSystemShowcaseProps) {
  return (
    <main>
      <Section className="system-hero blueprint-grid">
        <Container>
          <span className="hero-section__eyebrow">Design System Reference</span>
          <h1 className="hero-section__title system-hero__title">
            <span className="hero-section__title-line">Architectural</span>
            <span className="hero-section__title-line hero-section__title-line-accent">Blueprint</span>
          </h1>
          <p className="hero-section__description system-hero__description">
            Token-backed primitives, typography, and interaction recipes used by the bilingual homepage.
          </p>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <h2 className="section-heading__title">Color Tokens</h2>
          <div className="token-grid">
            {colorTokens.map((token) => (
              <Card className="token-card" key={token.name}>
                <div className="token-card__swatch" style={{ background: token.value }} />
                <h3 className="module-card__title">{token.name}</h3>
                <p className="module-card__description">{token.value}</p>
                <p className="module-card__description">{token.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="system-grid">
          <Card className="system-panel">
            <h2 className="section-heading__title">Typography</h2>
            <div className="system-spec-list">
              {typographyTokens.map((token) => (
                <div className="system-spec-list__item" key={token.name}>
                  <div>
                    <strong>{token.name}</strong>
                    <p>{token.usage}</p>
                  </div>
                  <span>{token.sample}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="system-panel">
            <h2 className="section-heading__title">Spacing</h2>
            <div className="system-spec-list">
              {spacingTokens.map((token) => (
                <div className="system-spec-list__item" key={token.name}>
                  <strong>{token.name}</strong>
                  <span>{token.value}</span>
                </div>
              ))}
            </div>
          </Card>
        </Container>
      </Section>

      <Section tone="muted">
        <Container className="system-grid">
          <Card className="system-panel">
            <h2 className="section-heading__title">Components</h2>
            <div className="system-samples">
              <div className="system-actions">
                <Button size="lg">Initialize Protocol</Button>
                <Button size="lg" variant="secondary">
                  View Specs
                </Button>
              </div>
              <div className="system-actions">
                <Chip>Token Map</Chip>
                <Chip>Arabic Ready</Chip>
                <Chip>Sharp Corners</Chip>
              </div>
              <Input dir={locale === "ar" ? "rtl" : "ltr"} placeholder="ENTER_EMAIL_PROTOCOL" />
            </div>
          </Card>
          <TerminalBlock
            className="system-terminal"
            label="terminal_os_v1"
            lines={[
              ">> system_preview --mode=reference",
              "[SUCCESS] Component recipes loaded.",
              "[SUCCESS] Locale support verified.",
              "[READY] Tokens synchronized."
            ]}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="section-heading__title">Recipes</h2>
          <div className="token-grid">
            {componentRecipes.map((recipe) => (
              <Card className="token-card" key={recipe.name}>
                <h3 className="module-card__title">{recipe.name}</h3>
                <p className="module-card__description">{recipe.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
