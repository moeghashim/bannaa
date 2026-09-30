import { parentBrandCopy } from '@/lib/content';
import type { Locale } from '@/lib/i18n';

export function ParentBrandCredit({ locale }: { locale: Locale }) {
  return <span className="parent-brand-credit">{parentBrandCopy[locale]} <a href="https://10claws.com" target="_blank" rel="noopener noreferrer"><bdi>10claws</bdi></a></span>;
}
