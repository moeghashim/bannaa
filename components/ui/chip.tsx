import type { PropsWithChildren } from "react";

import { cx } from "@/lib/utils";

type ChipProps = PropsWithChildren<{
  className?: string;
}>;

export function Chip({ children, className }: ChipProps) {
  return <span className={cx("ds-chip", className)}>{children}</span>;
}
