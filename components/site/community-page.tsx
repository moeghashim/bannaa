import { CommunityPanel } from "@/components/site/community-panel";
import { PageHero } from "@/components/site/page-hero";
import { SiteShell } from "@/components/site/site-shell";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type CommunityPageProps = {
  content: SiteContent;
  locale: Locale;
};

export function CommunityPage({ content, locale }: CommunityPageProps) {
  return (
    <SiteShell content={content} locale={locale}>
      <PageHero copy={content.pages.community} />
      <CommunityPanel content={content.community} locale={locale} />
    </SiteShell>
  );
}
