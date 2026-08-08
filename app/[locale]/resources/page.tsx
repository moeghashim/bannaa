import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ResourcesPage } from "@/components/site/resources-page";
import { siteContent } from "@/lib/content";
import { isLocale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = siteContent[locale].resources.hero;
  return { title: copy.title, description: copy.intro };
}

export default async function ResourcesRoute({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <ResourcesPage content={siteContent[locale]} locale={locale} />;
}
