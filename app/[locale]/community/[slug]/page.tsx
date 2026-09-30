import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CommunityArticle } from '@/components/site/community-article';
import { communityEntry, tutorialSlugs, memberSlugs } from '@/lib/community-posts';
import { communityLearningCopy, communitySpaceCopy } from '@/lib/content';
import { isLocale } from '@/lib/i18n';

type Props = { params: Promise<{ locale: string; slug: string }> };
export function generateStaticParams() {
  return ['ar', 'en'].flatMap(locale => [...tutorialSlugs, ...memberSlugs].map(slug => ({ locale, slug })));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const entry = communityEntry(slug);
  if (!isLocale(locale) || !entry) return {};
  const tutorial = communityLearningCopy[locale].tutorials[entry.index];
  const member = communitySpaceCopy[locale].posts[entry.index];
  return { title: entry.type === 'tutorial' ? tutorial.title : member.project, description: entry.type === 'tutorial' ? tutorial.intro : member.body };
}
export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !communityEntry(slug)) notFound();
  return <CommunityArticle locale={locale} slug={slug} />;
}
