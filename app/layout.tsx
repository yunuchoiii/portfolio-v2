import Header from "@/components/features/Layout/Header";
import { defaultMetadata, jsonLdPerson, jsonLdWebsite } from "@/lib/seo";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Script id="website-json-ld" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(jsonLdWebsite)}
        </Script>
        <Script id="person-json-ld" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(jsonLdPerson)}
        </Script>
        <Header />
        {children}
      </body>
    </html>
  );
}
