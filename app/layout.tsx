import { IBM_Plex_Sans_Arabic, Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import type { PropsWithChildren } from "react";

import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic"
});

const GOOGLE_TAG_ID = "G-56QKJXZJNK";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html className={`${inter.variable} ${grotesk.variable} ${arabic.variable}`} lang="en">
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
