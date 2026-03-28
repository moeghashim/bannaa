import Image from "next/image";
import Link from "next/link";

import type { Locale } from "@/lib/i18n";
import { cx } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  href?: string;
  label: string;
  locale: Locale;
  size?: "header" | "footer";
};

export function BrandLogo({ className, href = "/", label, locale, size = "header" }: BrandLogoProps) {
  const lockup = (
    <span className={cx("brand-lockup", `brand-lockup-${size}`, className)}>
      <Image
        alt=""
        aria-hidden="true"
        className={cx("brand-lockup__mark", size === "header" ? "site-header__brand-mark" : "site-footer__brand-mark")}
        height={239}
        priority={size === "header"}
        src="/bannaa-logo.svg"
        width={196}
      />
      <span className={cx("brand-lockup__label", locale === "en" && "brand-lockup__label-en")}>{label}</span>
    </span>
  );

  if (!href) {
    return lockup;
  }

  return (
    <Link aria-label={`${label} home`} href={href}>
      {lockup}
    </Link>
  );
}
