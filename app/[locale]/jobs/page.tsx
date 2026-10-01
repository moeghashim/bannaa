import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JobsPage } from "@/components/site/jobs-page";
import { jobsCopy, siteContent } from "@/lib/content";
import { isLocale } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: jobsCopy[locale].rolesTitle, description: jobsCopy[locale].intro, robots: { index: false, follow: false } };
}
export default async function JobsRoute({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <JobsPage locale={locale} content={siteContent[locale]} />;
}
