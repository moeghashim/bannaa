import { notFound } from "next/navigation";
import { BlogList } from "@/components/site/blog-list";
import { PageHero } from "@/components/site/page-hero";
import { SiteShell } from "@/components/site/site-shell";
import { getPosts } from "@/lib/blog";
import { siteContent } from "@/lib/content";
import { isLocale } from "@/lib/i18n";
export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const ar = locale === "ar";
  return <SiteShell content={siteContent[locale]} locale={locale}><PageHero copy={{ eyebrow: ar ? "من فريق بنّاء" : "FROM THE BAN NAA TEAM".replace("BAN NAA", "BANNAA"), title: ar ? "المدونة" : "The blog", accent: ar ? "معرفة من التجربة." : "Learning from practice.", intro: ar ? "أفكار وتجارب ودروس من بناء الوكلاء والمنتجات." : "Ideas, experiments, and lessons from building agents and products." }} /><BlogList posts={getPosts(locale).map(({ body, ...post }) => { void body; return post; })} locale={locale} /></SiteShell>;
}
