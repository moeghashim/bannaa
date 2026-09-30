import { ParentBrandCredit } from "@/components/site/parent-brand-credit";
import Image from "next/image";
import Link from "next/link";

import { launchCopy } from "@/lib/content";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type SiteFooterProps = {
  content: SiteContent["footer"];
  locale: Locale;
  contained?: boolean;
};

export function SiteFooter({ content, locale, contained = false }: SiteFooterProps) {
  const copy = launchCopy[locale];

  return (
    <div className={`shared-footer${contained ? " shared-footer--contained" : ""}`}>
      <footer className="shared-footer__main" id="footer">
        <Link className="shared-footer__brand" href={`/${locale}`}>
          <Image src="/assets/launch/logo.png" width={37} height={37} alt="" />
          <span>{locale === "ar" ? "بنّاء" : "Bannaa"}</span>
        </Link>
        <p>{copy.footer}</p>
        <div className="shared-footer__links">
          <a href="https://www.youtube.com/@bannaateam">YouTube</a>
          <a href="https://www.tiktok.com/@bannaahq">TikTok</a>
          <Link href={`/${locale}/contact`}>{copy.contact}</Link>
        </div>
      </footer>
      <div className="shared-footer__bottom">
      <nav className="shared-footer__directory" aria-label={copy.moreLinks}>
        {content.groups.map(group => (
          <div key={group.title}>
            <strong>{group.title}</strong>
            {group.items.map(item => item.href ? (
              <Link key={item.label} href={item.href}>{item.label}</Link>
            ) : <span key={item.label}>{item.label}</span>)}
          </div>
        ))}
      </nav>
      <div className="shared-footer__credit"><ParentBrandCredit locale={locale} /></div>
      </div>
    </div>
  );
}
