"use client";

import { Blobatar } from "@blobatar/react";
import type { CSSProperties } from "react";

import { brandPalette, brandSeed, brandTraits } from "@/lib/brand";
import type { Locale } from "@/lib/i18n";

type BrandMarkProps = {
  size?: number;
  className?: string;
  title?: string;
};

export function BrandMark({ size = 28, className, title }: BrandMarkProps) {
  const style = { "--brand-mark-size": `${size}px` } as CSSProperties;

  return (
    <span className={`brand-mark${className ? ` ${className}` : ""}`} style={style}>
      <Blobatar name={brandSeed} size={size} title={title} background={false}
        palette={brandPalette} traits={brandTraits} animate="always" />
    </span>
  );
}

type BrandLogoProps = {
  locale: Locale;
  className?: string;
  markSize?: number;
};

export function BrandLogo({ locale, className, markSize }: BrandLogoProps) {
  if (locale === "ar") {
    return (
      <span
        className={`brand-logo brand-logo--ar${className ? ` ${className}` : ""}`}
        aria-label="بنّاء"
        dir="rtl"
      >
        <BrandMark size={markSize ?? 38} />
        <span aria-hidden="true">بنّاء</span>
      </span>
    );
  }

  return (
    <span className={`brand-logo brand-logo--en${className ? ` ${className}` : ""}`}>
      <BrandMark size={markSize ?? 38} title="Bannaa" />
      <span>Bannaa</span>
    </span>
  );
}
