import { Baloo_2, IBM_Plex_Sans_Arabic, Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import type { PropsWithChildren } from "react";

import "@/app/globals.css";
import { env } from "@/lib/env";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-brand-latin"
});

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic"
});

export default function RootLayout({ children }: PropsWithChildren) {
  const googleTagId = env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html className={`${inter.variable} ${grotesk.variable} ${baloo.variable} ${arabic.variable}`} lang="en">
      <body>
        {googleTagId ? (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
              strategy="afterInteractive"
            />
            <Script id="google-tag-manager" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleTagId}');
              `}
            </Script>
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
