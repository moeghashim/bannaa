import { notFound, permanentRedirect } from "next/navigation";
import { getPosts } from "@/lib/blog";
import { isLocale, locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.flatMap(locale => getPosts(locale).map(post => ({ locale, slug: post.slug })));
}

export default async function ArticleRedirect({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !getPosts(locale).some(post => post.slug === slug)) notFound();
  permanentRedirect(`/${locale}/hub/${slug}`);
}
