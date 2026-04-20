"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type GoogleAnalyticsProps = {
  measurementId: string;
};

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();
  const pagePath = search ? `${pathname}?${search}` : pathname;

  useEffect(() => {
    window.gtag?.("config", measurementId, { page_path: pagePath });
  }, [measurementId, pagePath]);

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = function gtag(){window.dataLayer.push(arguments);};
          window.gtag('js', new Date());
        `}
      </Script>
    </>
  );
}
