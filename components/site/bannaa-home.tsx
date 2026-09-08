import { CtaSection } from "@/components/site/cta-section";
import { HeroSection } from "@/components/site/hero-section";
import { Marquee } from "@/components/site/marquee";
import { MissionSection } from "@/components/site/mission-section";
import { SiteShell } from "@/components/site/site-shell";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type BannaaHomeProps = {
  content: SiteContent;
  locale: Locale;
};

export function BannaaHome({ content, locale }: BannaaHomeProps) {
  return (
    <SiteShell content={content} locale={locale}>
        <HeroSection content={content.hero} locale={locale} />
        <Marquee items={content.marquee} />
        <MissionSection content={content.mission} />
        <CtaSection content={content.cta} locale={locale} />
    </SiteShell>
  );
}
