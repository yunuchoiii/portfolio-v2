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
      <head>
        {/* 폰트 및 이미지 preload */}
        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          as="style"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          as="style"
        />
        <link
          rel="preload"
          href="/images/background_lines.png"
          as="image"
        />
      </head>
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
