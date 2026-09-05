import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type SiteShellProps = {
  children: ReactNode;
  content: SiteContent;
  locale: Locale;
};

export function SiteShell({ children, content, locale }: SiteShellProps) {
  return (
    <>
      <SiteHeader content={{ nav: content.nav }} locale={locale} />
      <main>{children}</main>
      <SiteFooter content={content.footer} locale={locale} />
    </>
  );
}
