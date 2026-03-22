import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { SiteContent } from "@/lib/content";

type ToolsSectionProps = {
  content: SiteContent["tools"];
};

export function ToolsSection({ content }: ToolsSectionProps) {
  const [featured, ...secondaryCards] = content.cards;

  return (
    <Section className="tools-section" id="tools">
      <Container>
        <h2 className="section-heading__title tools-section__title">{content.title}</h2>
        <div className="tools-layout">
          <Card className="tool-card tool-card-featured" tone="dark">
            <div className="tool-card-featured__screen" aria-hidden="true" />
            <div className="tool-card-featured__bar" aria-hidden="true" />
            <div className="tool-card__content">
              <h3 className="tool-card__title">{featured.title}</h3>
              <p className="tool-card__description">{featured.description}</p>
              <Button size="sm" variant="secondary">
                {featured.label}
              </Button>
            </div>
          </Card>
          <div className="tools-layout__stack">
            {secondaryCards.map((card) => (
              <Card className="tool-card" key={card.id} tone={card.accent ? "accent" : "muted"}>
                <div className="tool-card__badge" aria-hidden="true">
                  {card.label}
                </div>
                <div className="tool-card__content">
                  <h3 className="tool-card__title">{card.title}</h3>
                  <p className="tool-card__description">{card.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
