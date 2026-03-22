import type { PropsWithChildren } from "react";

import { cx } from "@/lib/utils";

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

export function Container({ children, className }: ContainerProps) {
  return <div className={cx("ds-container", className)}>{children}</div>;
}
