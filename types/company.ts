import { ProjectCompany } from "./project";

/**
 * 세로로 쓴 영문명을 읽는 방향.
 * - "up"   : 아래에서 위로 (writing-mode + 180도) — 스터디워크
 * - "down" : 위에서 아래로 (writing-mode 기본)     — 메디푸드플랫폼
 */
export type VerticalTextDirection = "up" | "down";

export interface CompanyBanner {
  /** 카드 상단에 굵게 들어가는 회사명 */
  name: string;
  /** 회사명 아래 한 줄 */
  subtitle: string;
  /** 세로로 크게 깔리는 영문명. 배열이면 줄바꿈된다(예: ["MediFood", "Platform"]) */
  engName: string[];
  engDirection: VerticalTextDirection;
  /** public/ 기준 로고 경로. 번들에 인라인되지 않도록 SVG 컴포넌트가 아니라 이미지로 쓴다 */
  logo: {
    src: string;
    width: number;
    height: number;
  };
  /** 좌상단 색. 우하단은 항상 흰색으로 빠진다 */
  gradientFrom: string;
  nameColor: string;
  engColor: string;
}

export type CompanyBannerMap = Record<ProjectCompany, CompanyBanner>;
