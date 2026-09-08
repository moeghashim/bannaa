import { BlogList } from "@/components/site/blog-list";
import { getPosts } from "@/lib/blog";
import { articleContent } from "@/lib/content";
import { ContentHub } from "@/components/site/content-hub";
import { PageHero } from "@/components/site/page-hero";
import { SiteShell } from "@/components/site/site-shell";
import type { ExternalVideo, SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type HubPageProps = {
  content: SiteContent;
  locale: Locale;
  latestVideos: ExternalVideo[];
};

export function HubPage({ content, locale, latestVideos }: HubPageProps) {
  return (
    <SiteShell content={content} locale={locale}>
      <PageHero copy={content.pages.hub} />
      <section className="wrap"><header className="sec-head"><h2>{articleContent[locale].title}</h2></header></section>
      <BlogList posts={getPosts(locale).map(({ body, ...post }) => { void body; return post; })} locale={locale} />
      <ContentHub content={{ hub: content.hub, tracks: content.tracks }} latestVideos={latestVideos} locale={locale} />
    </SiteShell>
  );
}
