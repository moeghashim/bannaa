import { notFound } from "next/navigation";
import { ConsultationSection } from "@/components/site/consultation-section";
import { SiteShell } from "@/components/site/site-shell";
import { siteContent } from "@/lib/content";
import { isLocale } from "@/lib/i18n";
export default async function ConsultationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <SiteShell content={siteContent[locale]} locale={locale}><ConsultationSection locale={locale} /></SiteShell>;
}
