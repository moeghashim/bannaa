import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Section } from "@/components/ui/section";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type CtaSectionProps = {
  content: SiteContent["cta"];
  locale: Locale;
};

export function CtaSection({ content, locale }: CtaSectionProps) {
  return (
    <Section className="cta-section blueprint-grid-dark" id="cta" tone="dark">
      <Container className="cta-section__inner">
        <h2 className="cta-section__title">
          {content.title} <span>{content.accent}</span>
        </h2>
        <p className="cta-section__description">{content.description}</p>
        <form className="cta-section__form">
          <Input dir={locale === "ar" ? "rtl" : "ltr"} placeholder={content.placeholder} />
          <Button size="lg">{content.button}</Button>
        </form>
        <p className="cta-section__hint">{content.hint}</p>
      </Container>
    </Section>
  );
}
