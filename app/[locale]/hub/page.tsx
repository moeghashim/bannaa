import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HubPage } from "@/components/site/hub-page";
import { siteContent } from "@/lib/content";
import { isLocale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = siteContent[locale].pages.hub;
  return { title: copy.title, description: copy.intro };
}

export default async function HubRoute({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <HubPage content={siteContent[locale]} locale={locale} />;
}
