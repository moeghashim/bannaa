import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { RoadmapPage } from "@/components/site/roadmap-page";
import { siteContent } from "@/lib/content";
import { isLocale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = siteContent[locale].roadmap.hero;
  return { title: copy.title, description: copy.intro };
}

export default async function RoadmapRoute({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <RoadmapPage content={siteContent[locale]} locale={locale} />;
}
