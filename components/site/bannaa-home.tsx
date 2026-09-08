import { CommunityPanel } from "@/components/site/community-panel";
import { BlogList } from "@/components/site/blog-list";
import { getPosts } from "@/lib/blog";
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
        <section className="wrap"><header className="sec-head"><h2>{locale === "ar" ? "من مدونة الفريق" : "From the team"}</h2><a href={`/${locale}/blog`}>{locale === "ar" ? "كل المقالات" : "All articles"}</a></header></section>
        <BlogList posts={getPosts(locale).slice(0, 3).map(({ body, ...post }) => { void body; return post; })} locale={locale} />
        <CommunityPanel content={content.community} locale={locale} />
        <CtaSection content={content.cta} locale={locale} />
    </SiteShell>
  );
}
