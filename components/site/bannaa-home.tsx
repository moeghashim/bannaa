import { CommunityPanel } from "@/components/site/community-panel";
import { ContentPreview } from "@/components/site/content-preview";
import { CtaSection } from "@/components/site/cta-section";
import { HeroSection } from "@/components/site/hero-section";
import { Marquee } from "@/components/site/marquee";
import { MissionSection } from "@/components/site/mission-section";
import { SiteShell } from "@/components/site/site-shell";
import { TracksStrip } from "@/components/site/tracks-strip";
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
        <TracksStrip content={content.tracks} locale={locale} />
        <ContentPreview content={{ hub: content.hub, tracks: content.tracks }} locale={locale} />
        <CommunityPanel content={content.community} locale={locale} />
        <CtaSection content={content.cta} locale={locale} />
    </SiteShell>
  );
}
