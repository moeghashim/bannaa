import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { PropsWithChildren } from "react";

import { siteContent } from "@/lib/content";
import { getDirection, isLocale, locales, type Locale } from "@/lib/i18n";

type LocaleLayoutProps = PropsWithChildren<{
  params: Promise<{ locale: string }>;
}>;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = siteContent[locale];

  return {
    title: content.metadata.title,
    description: content.metadata.description
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const direction = getDirection(locale as Locale);

  return <div className="locale-shell" dir={direction} lang={locale}>{children}</div>;
}
