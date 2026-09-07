import { AgentSpectrum } from "@/components/site/agent-spectrum";
import { PageHero } from "@/components/site/page-hero";
import { SiteShell } from "@/components/site/site-shell";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export function RoadmapPage({ content, locale }: { content: SiteContent; locale: Locale }) {
  return <SiteShell content={content} locale={locale}><PageHero copy={content.pages.tracks} /><AgentSpectrum content={content} locale={locale} /></SiteShell>;
}
