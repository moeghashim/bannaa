import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BrandGuidelinePage } from "@/components/site/brand-guideline-page";
import { siteContent } from "@/lib/content";
import { isLocale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = siteContent[locale].pages.brand;
  return { title: copy.title, description: copy.intro };
}

export default async function BrandRoute({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <BrandGuidelinePage content={siteContent[locale]} locale={locale} />;
}
