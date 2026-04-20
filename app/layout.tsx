import { IBM_Plex_Sans_Arabic, JetBrains_Mono, Rubik } from "next/font/google";
import Script from "next/script";
import type { PropsWithChildren } from "react";

import "@/app/globals.css";

const body = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body"
});

const display = Rubik({
  subsets: ["latin", "arabic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono"
});

const GOOGLE_TAG_ID = "G-56QKJXZJNK";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      className={`${body.variable} ${display.variable} ${mono.variable}`}
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
    >
      <body>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_TAG_ID}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
