"use client";

import Image from "next/image";
import { useState } from "react";
import { heroLandscapeContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export function HeroLandscape({ locale }: { locale: Locale }) {
  const [paused, setPaused] = useState(false);
  const copy = heroLandscapeContent[locale];
  return (
    <>
      <div className={`hero-landscape${paused ? " is-paused" : ""}`} aria-hidden="true">
        <Image className="hero-landscape__scene" src="/assets/hero/builder-landscape.png" alt="" fill priority sizes="100vw" />
        <div className="hero-landscape__float">
          <span className="hero-landscape__shadow" />
          <Image className="hero-landscape__cube" src="/assets/hero/builder-cube.png" alt="" width={220} height={220} sizes="(max-width: 760px) 120px, 220px" />
        </div>
      </div>
      <button className="hero-landscape__toggle" type="button" aria-pressed={paused} onClick={() => setPaused(value => !value)}>
        <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>
        {paused ? copy.resume : copy.pause}
      </button>
    </>
  );
}
