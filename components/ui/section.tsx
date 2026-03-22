import type { PropsWithChildren } from "react";

import { cx } from "@/lib/utils";

type SectionProps = PropsWithChildren<{
  className?: string;
  id?: string;
  tone?: "default" | "muted" | "dark";
}>;

export function Section({ children, className, id, tone = "default" }: SectionProps) {
  return (
    <section className={cx("ds-section", `ds-section-${tone}`, className)} id={id}>
      {children}
    </section>
  );
}
