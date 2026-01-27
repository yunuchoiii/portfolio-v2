import Header from "@/components/features/Layout/Header";
import { defaultMetadata, jsonLdPerson, jsonLdWebsite } from "@/lib/seo";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = defaultMetadata;

// Poppins 폰트 최적화 - 자동으로 preload 및 최적화됨
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={poppins.variable}>
      <head>
        {/* Pretendard 폰트 CSS - preload와 stylesheet를 함께 사용하여 빠른 로딩 */}
        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        {/* 배경 이미지 preload - 높은 우선순위 */}
        <link
          rel="preload"
          href="/images/background_lines.png"
          as="image"
          fetchPriority="high"
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
