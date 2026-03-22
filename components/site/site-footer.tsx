import { BrandLogo } from "@/components/site/brand-logo";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { SiteContent } from "@/lib/content";

type SiteFooterProps = {
  content: SiteContent["footer"];
};

export function SiteFooter({ content }: SiteFooterProps) {
  return (
    <Section className="site-footer" id="footer" tone="muted">
      <Container className="site-footer__grid">
        <div className="site-footer__brand-block">
          <BrandLogo href="/" label={content.brand} size="footer" />
          <p className="site-footer__description">{content.description}</p>
        </div>
        {content.linkGroups.map((group) => (
          <div className="site-footer__group" key={group.title}>
            <h3 className="site-footer__group-title">{group.title}</h3>
            <ul className="site-footer__links">
              {group.links.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="site-footer__group">
          <h3 className="site-footer__group-title">{content.socialTitle}</h3>
          <ul className="site-footer__links">
            {content.social.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Container>
      <Container>
        <div className="site-footer__copyright">{content.copyright}</div>
      </Container>
    </Section>
  );
}
