import Link from "next/link";
import type { PropsWithChildren } from "react";

import { cx } from "@/lib/utils";

type ButtonProps = PropsWithChildren<{
  className?: string;
  href?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}>;

export function Button({
  children,
  className,
  href,
  variant = "primary",
  size = "md"
}: ButtonProps) {
  const classes = cx("ds-button", `ds-button-${variant}`, `ds-button-${size}`, className);

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type="button">
      {children}
    </button>
  );
}
