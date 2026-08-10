import Image from "next/image";
import type { CSSProperties } from "react";

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
      <Image src="/assets/brand/icon.svg" alt={title ?? ""} width={size} height={size} unoptimized />
    </span>
  );
}

type BrandLogoProps = {
  locale: Locale;
  className?: string;
};

export function BrandLogo({ locale, className }: BrandLogoProps) {
  if (locale === "ar") {
    return (
      <Image
        className={`brand-logo brand-logo--ar${className ? ` ${className}` : ""}`}
        src="/assets/brand/arabic_logo.svg"
        alt="بنّاء"
        width={126}
        height={45}
        priority
        unoptimized
      />
    );
  }

  return (
    <span className={`brand-logo brand-logo--en${className ? ` ${className}` : ""}`}>
      <BrandMark size={30} title="Bannaa" />
      <span>Bannaa</span>
    </span>
  );
}
