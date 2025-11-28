import MfpIcon from "@/assets/icons/mfp.svg";
import PtsIcon from "@/assets/icons/pts.svg";
import { Career } from "@/types/career";

export const CAREER_LIST: Career[] = [
  {
    kor_name: "(주)스터디워크",
    eng_name: "StudyWork",
    department: "개발팀",
    position: "웹 개발자",
    period: {
      start: "2025.04",
      end: "2025.11",
    },
    isCurrent: false,
    descriptions: [
      "모바일 WebView 기반 학습 플랫폼 프론트엔드 개발 및 UX 개선",
      "Next.js 기반 B2C-B2B WebApp 구조 설계 및 UI 컴포넌트 개발",
      "TanStack Query Recoil 기반 상태 관리 체계 구축 및 서버 상태 최적화",
      "스터디 그룹, 게이미피케이션, 커머스 등 핵심 B2C 기능 개발",
      "PortOne 결제 연동 및 iOS/Android WebView 네이티브 브릿지 통신 구현",
      "Lottie 애니메이션, 이미지 프리로딩, Skeleton UI 등을 적용하여 모바일 UX 향상",
      "레이어드 아키텍처 적용 및 Query Key 재설계를 통한 코드 품질·유지보수성 개선",
    ],
    icon: PtsIcon,
  },
  {
    kor_name: "메디푸드플랫폼",
    eng_name: "MediFoodPlatform",
    department: "플랫폼개발부",
    position: "사원·프론트엔드 개발자",
    period: {
      start: "2022.10",
      end: "2024.09",
    },
    isCurrent: false,
    descriptions: [
      "Admin, SaaS 서비스 프론트엔드 개발 및 UX/UI 디자인",
      "이커머스 서비스 프론트엔드 전체 개발 작업",
      "RESTful API를 활용한 실시간 데이터 처리 및 동적 컨텐츠 렌더링 최적화",
      "사용자 중심의 인터페이스 설계 및 개발 주도",
      "반응형 웹 애플리케이션 구현 및 크로스 플랫폼 최적화 작업",
      "Jenkins를 활용하여 프론트엔드 프로젝트 배포 수행 및 문제 해결",
      "데이터 시각화 작업",
    ],
    icon: MfpIcon,
  },
];

