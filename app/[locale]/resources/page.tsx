import { notFound, permanentRedirect } from "next/navigation";
import { isLocale } from "@/lib/i18n";

type PageProps = { params: Promise<{ locale: string }> };

export default async function ResourcesRoute({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  permanentRedirect(`/${locale}/community`);
}
