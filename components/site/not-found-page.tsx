"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useSyncExternalStore } from "react";

import { BrandMark } from "@/components/site/brand-mark";
import { SiteShell } from "@/components/site/site-shell";
import { notFoundCopy, siteContent } from "@/lib/content";
import { getDirection, type Locale } from "@/lib/i18n";

const subscribe = () => () => {};
const getServerLocale = (): Locale => "ar";

export function NotFoundPage() {
  const pathname = usePathname();
  const locale = useSyncExternalStore(
    subscribe,
    (): Locale => pathname?.split("/")[1] === "en" ? "en" : "ar",
    getServerLocale
  );
  const copy = notFoundCopy[locale];
  const [paused, setPaused] = useState(false);

  return (
    <div lang={locale} dir={getDirection(locale)}>
      <SiteShell content={siteContent[locale]} locale={locale}>
        <section className={`lost-page${paused ? " lost-page--paused" : ""}`}>
          <div className="lost-page__meta">
            <span><i aria-hidden="true" />{copy.eyebrow}</span>
            <span className="lost-page__coordinates" aria-hidden="true">404 / ∞</span>
          </div>

          <div className="lost-page__art" aria-hidden="true">
            <span className="lost-page__four">4</span>
            <div className="lost-page__zero">
              <span className="lost-page__orbit" />
              <span className="lost-page__spark lost-page__spark--one">✳</span>
              <span className="lost-page__spark lost-page__spark--two">✧</span>
              <span className="lost-page__traveler"><BrandMark size={100} /></span>
              <span className="lost-page__trail"><i /><i /><i /></span>
            </div>
            <span className="lost-page__four lost-page__four--last">4</span>
          </div>

          <div className="lost-page__copy">
            <p className="lost-page__caption">{copy.caption}</p>
            <h1 aria-label={`404. ${copy.title} ${copy.accent}`}>{copy.title}<br /><span>{copy.accent}</span></h1>
            <p className="lost-page__intro">{copy.intro}</p>
            <div className="lost-page__actions">
              <Link className="lost-page__home" href={`/${locale}`}>
                {copy.home}<span aria-hidden="true">{locale === "ar" ? "↖" : "↗"}</span>
              </Link>
              <Link className="lost-page__community" href={`/${locale}/community`}>{copy.community}</Link>
            </div>
          </div>

          <div className="lost-page__next">
            <p>{copy.next}</p>
            <div>{copy.links.map((link, index) => (
              <Link key={link.path} href={`/${locale}/${link.path}`}>
                <span className="lost-page__step">0{index + 1}</span>
                {link.label}<span aria-hidden="true">{locale === "ar" ? "←" : "→"}</span>
              </Link>
            ))}</div>
          </div>

          <button className="lost-page__motion" aria-pressed={paused} onClick={() => setPaused(value => !value)}>
            <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>{paused ? copy.resume : copy.pause}
          </button>
        </section>
      </SiteShell>
    </div>
  );
}
