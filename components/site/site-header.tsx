import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/site/brand-logo";
import { Container } from "@/components/ui/container";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type SiteHeaderProps = {
  content: SiteContent["header"];
  locale: Locale;
};

export function SiteHeader({ content, locale }: SiteHeaderProps) {
  const alternateHref = locale === "en" ? "/ar" : "/en";

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <BrandLogo href={`/${locale}`} label={content.brand} locale={locale} size="header" />
        <nav aria-label="Primary" className="site-header__nav">
          {content.links.map((link) => (
            <a className="site-header__link" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
          <a className="site-header__locale" href={alternateHref}>
            {locale === "en" ? "AR" : "EN"}
          </a>
          <Button href="#cta" size="sm">
            {content.cta}
          </Button>
        </nav>
      </Container>
    </header>
  );
}
