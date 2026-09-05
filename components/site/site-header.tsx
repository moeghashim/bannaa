"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { BrandLogo } from "@/components/site/brand-mark";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type SiteHeaderProps = {
  content: Pick<SiteContent, "nav">;
  locale: Locale;
};

export function SiteHeader({ content, locale }: SiteHeaderProps) {
  return <SiteNav content={content.nav} locale={locale} />;
}

function SiteNav({ content, locale }: { content: SiteContent["nav"]; locale: Locale }) {
  const otherLocale: Locale = locale === "ar" ? "en" : "ar";
  const pathname = usePathname();
  const localizedPath = pathname?.startsWith(`/${locale}`)
    ? pathname.replace(`/${locale}`, `/${otherLocale}`)
    : `/${otherLocale}`;
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav">
      <div className="nav-left">
        <Link className="brand" href={`/${locale}`}>
          <BrandLogo locale={locale} />
        </Link>
        <div className="nav-links">
          {content.links.map((link) => (
            <a key={link.id} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="nav-right">
        <Link
          className="mono"
          href={localizedPath}
          style={{ fontSize: 11, color: "var(--fg-mute)", textDecoration: "none" }}
        >
          {content.langSwitch}
        </Link>
        <Link href={`/${locale}/community`} className="btn ghost">
          {content.ghostCta}
        </Link>
        <Link className="btn primary" href={`/${locale}/join`}>
          {content.primaryCta}
        </Link>
      </div>
      <button
        type="button"
        className="nav-toggle"
        aria-label={content.menuLabel}
        aria-expanded={menuOpen}
        aria-controls="nav-mobile"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <svg width={22} height={22} viewBox="0 0 22 22" aria-hidden="true">
          {menuOpen ? (
            <>
              <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="2" />
              <line x1="4" y1="18" x2="18" y2="4" stroke="currentColor" strokeWidth="2" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" />
              <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" />
              <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" />
            </>
          )}
        </svg>
      </button>
      <div id="nav-mobile" className={`nav-mobile${menuOpen ? " nav-mobile--open" : ""}`}>
        <div className="nav-mobile__links">
          {content.links.map((link) => (
            <a key={link.id} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="nav-mobile__actions">
          <Link
            className="mono nav-mobile__lang"
            href={localizedPath}
            onClick={closeMenu}
          >
            {content.langSwitch}
          </Link>
          <Link href={`/${locale}/community`} className="btn ghost" onClick={closeMenu}>
            {content.ghostCta}
          </Link>
          <Link className="btn primary" href={`/${locale}/join`} onClick={closeMenu}>
            {content.primaryCta}
          </Link>
        </div>
      </div>
    </nav>
  );
}
