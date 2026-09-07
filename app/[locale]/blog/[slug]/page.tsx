import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { SiteShell } from "@/components/site/site-shell";
import { getPosts } from "@/lib/blog";
import { siteContent } from "@/lib/content";
import { isLocale, locales } from "@/lib/i18n";
type Props = { params: Promise<{ locale: string; slug: string }> };
export function generateStaticParams() { return locales.flatMap(locale => getPosts(locale).map(post => ({ locale, slug: post.slug }))); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = isLocale(locale) ? getPosts(locale).find(post => post.slug === slug) : undefined;
  return post ? { title: post.title, description: post.description, alternates: { canonical: `/${locale}/blog/${slug}` }, openGraph: { type: "article", title: post.title, description: post.description, publishedTime: post.date, authors: [post.author] } } : {};
}
export default async function PostPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const post = getPosts(locale).find(post => post.slug === slug);
  if (!post) notFound();
  return <SiteShell content={siteContent[locale]} locale={locale}><article className="blog-article wrap">
    <a href={`/${locale}/blog`}>{locale === "ar" ? "كل المقالات" : "All articles"}</a>
    <header><p>{post.author} · <time dateTime={post.date}>{post.date}</time></p><h1>{post.title}</h1><p>{post.description}</p><div className="tags">{post.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></header>
    <div className="blog-prose"><ReactMarkdown remarkPlugins={[remarkGfm]} skipHtml>{post.body}</ReactMarkdown></div>
  </article></SiteShell>;
}
