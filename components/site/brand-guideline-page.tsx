import Image from "next/image";

import { PageHero } from "@/components/site/page-hero";
import { SiteShell } from "@/components/site/site-shell";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type BrandGuidelinePageProps = {
  content: SiteContent;
  locale: Locale;
};

const BRAND_GUIDELINE_SRC = "/assets/brand/brand_guideline.png";

export function BrandGuidelinePage({ content, locale }: BrandGuidelinePageProps) {
  return (
    <SiteShell content={content} locale={locale}>
      <PageHero copy={content.pages.brand} />
      <section className="brand-guideline wrap" aria-label={content.pages.brand.title}>
        <div className="brand-guideline__actions">
          <a href={BRAND_GUIDELINE_SRC} target="_blank" rel="noopener noreferrer">
            {locale === "ar" ? "افتح الصورة الأصلية ↗" : "Open source image ↗"}
          </a>
        </div>
        <figure className="brand-guideline__frame">
          <Image
            src={BRAND_GUIDELINE_SRC}
            alt={content.pages.brand.title}
            width={1055}
            height={1491}
            priority
            sizes="(max-width: 1100px) 100vw, 1055px"
          />
        </figure>
      </section>
    </SiteShell>
  );
}
