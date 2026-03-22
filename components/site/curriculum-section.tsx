import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { SiteContent } from "@/lib/content";

type CurriculumSectionProps = {
  content: SiteContent["curriculum"];
};

export function CurriculumSection({ content }: CurriculumSectionProps) {
  return (
    <Section id="curriculum" tone="muted">
      <Container>
        <div className="section-heading">
          <div>
            <h2 className="section-heading__title">
              {content.title} <span>{content.accent}</span>
            </h2>
            <p className="section-heading__description">{content.description}</p>
          </div>
          <div className="section-heading__meta">
            {content.meta.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="module-grid">
          {content.modules.map((module) => (
            <Card className="module-card" key={module.id}>
              <span className="module-card__index">{module.id}</span>
              <h3 className="module-card__title">{module.title}</h3>
              <p className="module-card__description">{module.description}</p>
              <ul className="module-card__list">
                {module.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
