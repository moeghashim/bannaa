import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JobRolePage } from "@/components/site/jobs-page";
import { jobsCopy, siteContent } from "@/lib/content";
import { isLocale } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string; slug: string }> };
export function generateStaticParams() { return jobsCopy.en.roles.map(role => ({ slug: role.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const role = jobsCopy[locale].roles.find(item => item.slug === slug);
  return { title: role?.title, description: role?.line, robots: { index: false, follow: false } };
}
export default async function JobRoleRoute({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const role = jobsCopy[locale].roles.find(item => item.slug === slug);
  if (!role) notFound();
  return <JobRolePage role={role} locale={locale} content={siteContent[locale]} />;
}
