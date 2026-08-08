import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CommunityPage } from "@/components/site/community-page";
import { siteContent } from "@/lib/content";
import { isLocale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = siteContent[locale].pages.community;
  return { title: copy.title, description: copy.intro };
}

export default async function CommunityRoute({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <CommunityPage content={siteContent[locale]} locale={locale} />;
}
