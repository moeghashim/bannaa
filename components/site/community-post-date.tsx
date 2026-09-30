import { communityPublicationDates } from '@/lib/content';
import type { Locale } from '@/lib/i18n';

type PostSlug = keyof typeof communityPublicationDates;
export function CommunityPostDate({ slug, locale }: { slug: PostSlug; locale: Locale }) {
  const date = communityPublicationDates[slug];
  const formatted = new Intl.DateTimeFormat(locale === 'ar' ? 'ar' : 'en-GB', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC', calendar: 'gregory', numberingSystem: 'latn'
  }).format(new Date(`${date}T12:00:00Z`));
  return <time className="community-post-date" dateTime={date}>{formatted}</time>;
}
