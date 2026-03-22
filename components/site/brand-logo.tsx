import Image from "next/image";
import Link from "next/link";
import { cx } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  href?: string;
  label: string;
  size?: "header" | "footer";
};

export function BrandLogo({ className, href = "/", label, size = "header" }: BrandLogoProps) {
  const lockup = (
    <span className={cx("brand-lockup", `brand-lockup-${size}`, className)}>
      <Image
        alt=""
        aria-hidden="true"
        className={cx("brand-lockup__mark", size === "header" ? "site-header__brand-mark" : "site-footer__brand-mark")}
        height={size === "header" ? 34 : 35}
        priority={size === "header"}
        src="/bannaa-logo.svg"
        width={size === "header" ? 34 : 35}
      />
      <span className="brand-lockup__label">{label}</span>
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
