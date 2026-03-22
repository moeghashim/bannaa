import type { PropsWithChildren } from "react";

import { cx } from "@/lib/utils";

type CardProps = PropsWithChildren<{
  className?: string;
  tone?: "base" | "muted" | "dark" | "accent";
}>;

export function Card({ children, className, tone = "base" }: CardProps) {
  return <article className={cx("ds-card", `ds-card-${tone}`, className)}>{children}</article>;
}
