import type { Metadata } from "next";

const SITE_NAME = "최서원 포트폴리오";
const SITE_URL = "https://seowonchoiii.vercel.app/";
const SITE_DESCRIPTION =
  "사람의 시선과 흐름을 먼저 떠올리는 프론트엔드 개발자 최서원의 포트폴리오입니다. 사용자 경험을 중심에 둔 웹 서비스와 프로젝트를 소개합니다.";
const SITE_TITLE = "프론트엔드 개발자 최서원 | 포트폴리오";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | 최서원 포트폴리오",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "프론트엔드 개발자",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "포트폴리오",
    "웹 개발",
    "UI 개발",
    "UX",
  ],
  authors: [{ name: "최서원" }],
  creator: "최서원",
  publisher: "최서원",
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/images/portfolio/og-image.png",
        width: 1200,
        height: 630,
        alt: "프론트엔드 개발자 최서원 포트폴리오 대표 이미지",
      },
    ],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
};

export const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "최서원",
  jobTitle: "Frontend Developer",
  url: SITE_URL,
  image: `${SITE_URL}/images/profile.png`,
  sameAs: [
    "https://github.com/yunuchoiii",
    "https://www.linkedin.com/in/seowon-choi-677844241",
  ],
};


