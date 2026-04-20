"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { BrandMark } from "@/components/site/brand-mark";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type Theme = "dark" | "light";

type SiteHeaderProps = {
  content: Pick<SiteContent, "statusBar" | "nav">;
  locale: Locale;
};

export function SiteHeader({ content, locale }: SiteHeaderProps) {
  return (
    <>
      <StatusBar content={content.statusBar} />
      <SiteNav content={content.nav} locale={locale} />
    </>
  );
}

function StatusBar({ content }: { content: SiteContent["statusBar"] }) {
  const [clock, setClock] = useState<string | null>(null);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("bannaa.theme") : null;
    setTheme(stored === "light" ? "light" : "dark");
  }, []);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setClock(`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`);
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (next === "light") document.documentElement.setAttribute("data-theme", "light");
    else document.documentElement.removeAttribute("data-theme");
    try {
      localStorage.setItem("bannaa.theme", next);
    } catch {
      /* noop */
    }
  };

  return (
    <div className="statusbar">
      <div className="seg">
        <span>
          <span className="dot" />
          {content.os}
        </span>
        <span>{content.region}</span>
      </div>
      <div className="seg">
        <span>{content.signal}</span>
        <span className="statusbar__lang">{content.langLabel}</span>
        <span suppressHydrationWarning>{clock ?? "--:--:--"}</span>
        <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "dark" ? content.themeLight : content.themeDark}
        </button>
      </div>
    </div>
  );
}

function SiteNav({ content, locale }: { content: SiteContent["nav"]; locale: Locale }) {
  const otherLocale: Locale = locale === "ar" ? "en" : "ar";
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav">
      <div className="nav-left">
        <Link className="brand" href={`/${locale}`}>
          <BrandMark size={28} />
          <span>{locale === "ar" ? "بنّاء" : "Bannaa"}</span>
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
          href={`/${otherLocale}`}
          style={{ fontSize: 11, color: "var(--fg-mute)", textDecoration: "none" }}
        >
          {content.langSwitch}
        </Link>
        <button type="button" className="btn ghost">
          {content.ghostCta}
        </button>
        <a className="btn primary" href="#cta">
          {content.primaryCta}
        </a>
      </div>
      <button
        type="button"
        className="nav-toggle"
        aria-label="Menu"
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
            href={`/${otherLocale}`}
            onClick={closeMenu}
          >
            {content.langSwitch}
          </Link>
          <button type="button" className="btn ghost">
            {content.ghostCta}
          </button>
          <a className="btn primary" href="#cta" onClick={closeMenu}>
            {content.primaryCta}
          </a>
        </div>
      </div>
    </nav>
  );
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}
