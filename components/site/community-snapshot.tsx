import Link from 'next/link';
import { CommunityPostDate } from '@/components/site/community-post-date';
import { communityLearningCopy, communitySpaceCopy } from '@/lib/content';
import { tutorialSlugs, memberSlugs } from '@/lib/community-posts';
import type { Locale } from '@/lib/i18n';

export function CommunitySnapshot({ locale }: { locale: Locale }) {
  const c = communitySpaceCopy[locale];
  const learning = communityLearningCopy[locale];
  const cards = [
    { slug: tutorialSlugs[0], author: learning.author, label: learning.official, title: learning.tutorials[0].title, body: learning.tutorials[0].intro },
    ...c.posts.slice(0, 2).map((post, index) => ({ slug: memberSlugs[index], author: post.name, label: c.example, title: post.project, body: post.body }))
  ];
  return <section className="community-snapshot" aria-labelledby="community-entry-title">
    <div className="community-snapshot-heading"><div><h2 id="community-entry-title">{c.homeTitle}</h2><p>{c.homeBody}</p></div><Link className="text-link" href={`/${locale}/community`}>{c.homeAction} <span aria-hidden="true">↗</span></Link></div>
    <div className="community-snapshot-grid">{cards.map(card => <Link className="community-snapshot-card" key={card.slug} href={`/${locale}/community/${card.slug}`}><span className="community-snapshot-label">{card.label}</span><h3>{card.title}</h3><p>{card.body}</p><div className="community-snapshot-meta"><span>{card.author}</span><CommunityPostDate slug={card.slug} locale={locale} /><span aria-hidden="true">↗</span></div></Link>)}</div>
  </section>;
}
