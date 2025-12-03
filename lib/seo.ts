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
    "최서원",
    "최서원 포트폴리오",
    "프론트엔드 최서원",
    "프론트엔드 개발자 최서원",
    "프론트엔드 개발자",
    "프론트엔드 포트폴리오",
    "프론트엔드 개발자 포트폴리오",
    "프론트엔드 개발자 웹 개발",
    "프론트엔드 개발자 UI 개발",
    "프론트엔드 개발자 UX",
    "프론트엔드 개발자 웹 서비스",
    "프론트엔드 개발자 웹 앱",
    "프론트엔드 개발자 웹 사이트",
    "프론트엔드 개발자 웹 애플리케이션",
    "프론트엔드 엔지니어",
    "프론트엔드 엔지니어 최서원",
    "리액트 개발자",
    "리액트 개발자 최서원",
    "리액트 개발자 최서원 포트폴리오",
    "React 개발자",
    "React 개발자 최서원",
    "React 개발자 최서원 포트폴리오",
    "Next.js 개발자",
    "Next.js 개발자 최서원",
    "TypeScript 개발자",
    "TypeScript 개발자 최서원",
    "웹 개발자",
    "웹 개발자 최서원",
    "웹 개발자 최서원 포트폴리오",
    "Frontend Developer",
    "Frontend Developer Portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Tailwind",
    "React Query",
    "Recoil",
    "MUI",
    "ShadcnUI",
    "Bootstrap",
    "Node.js",
    "Vue",
    "AWS",
    "Firebase",
    "Vercel",
    "Figma",
    "Storybook",
    "포트폴리오",
    "웹 개발",
    "UI 개발",
    "UX",
    "반응형 웹",
    "반응형 웹 개발",
    "웹 디자인",
    "컴포넌트 개발",
    "디자인 시스템",
    "웹뷰 개발",
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
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/portfolio/og-image.png"],
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


