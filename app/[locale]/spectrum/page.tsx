import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AgentSpectrum } from "@/components/site/agent-spectrum";
import { PageHero } from "@/components/site/page-hero";
import { SiteShell } from "@/components/site/site-shell";
import { siteContent } from "@/lib/content";
import { isLocale } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: locale === "ar" ? "طيف الوكلاء | بنّاء" : "Agent Spectrum | Bannaa",
    description: siteContent[locale].pages.tracks.intro,
    alternates: { canonical: `/${locale}/spectrum`, languages: { ar: "/ar/spectrum", en: "/en/spectrum" } } };
}
export default async function SpectrumPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = siteContent[locale];
  return <SiteShell content={content} locale={locale}><PageHero copy={content.pages.tracks} /><AgentSpectrum content={content} locale={locale} /></SiteShell>;
}
