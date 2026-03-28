import { CtaSection } from "@/components/site/cta-section";
import { CurriculumSection } from "@/components/site/curriculum-section";
import { HeroSection } from "@/components/site/hero-section";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { ToolsSection } from "@/components/site/tools-section";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type BannaaHomeProps = {
  content: SiteContent;
  locale: Locale;
};

export function BannaaHome({ content, locale }: BannaaHomeProps) {
  return (
    <>
      <SiteHeader content={content.header} locale={locale} />
      <main>
        <HeroSection content={content.hero} locale={locale} />
        <CurriculumSection content={content.curriculum} />
        <ToolsSection content={content.tools} />
        <CtaSection content={content.cta} locale={locale} />
      </main>
      <SiteFooter content={content.footer} locale={locale} />
    </>
  );
}
