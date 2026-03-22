import { IBM_Plex_Sans_Arabic, Inter, Space_Grotesk } from "next/font/google";
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

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html className={`${inter.variable} ${grotesk.variable} ${arabic.variable}`} lang="en">
      <body>{children}</body>
    </html>
  );
}
