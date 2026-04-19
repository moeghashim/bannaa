import { ConceptsSection } from "@/components/site/concepts-section";
import { CtaSection } from "@/components/site/cta-section";
import { HeroSection } from "@/components/site/hero-section";
import { Marquee } from "@/components/site/marquee";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { TemplatesStrip } from "@/components/site/templates-strip";
import { TracksStrip } from "@/components/site/tracks-strip";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type BannaaHomeProps = {
  content: SiteContent;
  locale: Locale;
};

export function BannaaHome({ content, locale }: BannaaHomeProps) {
  return (
    <>
      <SiteHeader content={{ statusBar: content.statusBar, nav: content.nav }} locale={locale} />
      <main>
        <HeroSection content={content.hero} />
        <Marquee items={content.marquee} />
        <TracksStrip content={content.tracks} />
        <ConceptsSection content={content.concepts} />
        <TemplatesStrip content={content.templates} />
        <CtaSection content={content.cta} />
      </main>
      <SiteFooter content={content.footer} locale={locale} />
    </>
  );
}
