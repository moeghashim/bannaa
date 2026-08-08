import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContactPage } from "@/components/site/contact-page";
import { siteContent } from "@/lib/content";
import { isLocale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = siteContent[locale].contact.hero;
  return { title: copy.title, description: copy.intro };
}

export default async function ContactRoute({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <ContactPage content={siteContent[locale]} locale={locale} />;
}
