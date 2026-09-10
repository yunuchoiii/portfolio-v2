import { CompanyBannerMap } from "@/types/company";
import { ProjectCompany } from "@/types/project";

/**
 * Company Projects 옆에 세로로 서는 회사 배너.
 * 원래 PNG 한 장(2MB, 1.3MB)이었던 것을 HTML로 옮겼다 — 프로젝트 수가 바뀌어도 배너가 같이 늘어난다.
 * 색은 기존 배너 이미지에서 실제로 뽑은 값이다.
 */
export const COMPANY_BANNER: CompanyBannerMap = {
  [ProjectCompany.PTS]: {
    name: "(주)스터디워크",
    subtitle: "직장 내 프로젝트",
    engName: ["StudyWork"],
    engDirection: "up",
    logo: { src: "/logos/company/studywork.png", width: 253, height: 264 },
    gradientFrom: "#CAACFF",
    nameColor: "#8039DF",
    engColor: "#8477F4",
  },
  [ProjectCompany.MFP]: {
    name: "메디푸드플랫폼",
    subtitle: "직장 내 프로젝트",
    engName: ["MediFood", "Platform"],
    engDirection: "down",
    logo: { src: "/logos/company/mfp.png", width: 192, height: 180 },
    gradientFrom: "#BBE1FF",
    nameColor: "#18517C",
    engColor: "#4899AB",
  },
};
