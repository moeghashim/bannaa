import { DesignSystemShowcase } from "@/components/site/design-system-showcase";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

type DesignSystemPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function DesignSystemPage({ params }: DesignSystemPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <DesignSystemShowcase locale={locale} />;
}
