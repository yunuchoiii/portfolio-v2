import CSSIcon from "@/assets/icons/CSS.svg";
import HTMLIcon from "@/assets/icons/HTML.svg";
import MUIIcon from "@/assets/icons/MUI.svg";
import AWSIcon from "@/assets/icons/aws.svg";
import BootstrapIcon from "@/assets/icons/bootstrap.svg";
import FigmaIcon from "@/assets/icons/figma.svg";
import FirebaseIcon from "@/assets/icons/firebase.svg";
import GithubIcon from "@/assets/icons/github.svg";
import JavaScriptIcon from "@/assets/icons/javascript.svg";
import MySQLIcon from "@/assets/icons/mysql.svg";
import NextJsIcon from "@/assets/icons/nextjs.svg";
import NodeJsIcon from "@/assets/icons/nodejs.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ReactQueryIcon from "@/assets/icons/reactquery.svg";
import RecoilIcon from "@/assets/icons/recoil.svg";
import ShadcnUIIcon from "@/assets/icons/shadcnui.svg";
import StorybookIcon from "@/assets/icons/storybook.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import VercelIcon from "@/assets/icons/vercel.svg";
import VueIcon from "@/assets/icons/vue.svg";
import VuetifyIcon from "@/assets/icons/vuetifyjs.svg";
import VuexIcon from "@/assets/icons/vuex.svg";
import { Skill, SkillData, SkillEnum, SkillLevel, Tool } from "@/types/skill";

export const SKILL_LIST: Partial<Record<SkillEnum, Skill>> = {
  [SkillEnum.React]: {
    name: "React",
    icon: ReactIcon,
    level: SkillLevel.Expert,
    pointColor: "#61DAFB"
  },
  [SkillEnum.NextJs]: {
    name: "Next.js",
    icon: NextJsIcon,
    level: SkillLevel.Expert,
    pointColor: "#FFFFFF"
  },
  [SkillEnum.ReactNative]: {
    name: "React Native",
    icon: ReactIcon,
    level: SkillLevel.Basic,
    pointColor: "#000000"
  },
  [SkillEnum.Vue]: {
    name: "Vue",
    icon: VueIcon,
    level: SkillLevel.Basic,
    pointColor: "#41B883"
  },
  [SkillEnum.TypeScript]: {
    name: "TypeScript",
    icon: TypeScriptIcon,
    level: SkillLevel.Expert,
    pointColor: "#007ACC"
  },
  [SkillEnum.JavaScript]: {
    name: "JavaScript",
    icon: JavaScriptIcon,
    level: SkillLevel.Expert,
    pointColor: "#F0DB4F"
  },
  [SkillEnum.HTML]: {
    name: "HTML",
    icon: HTMLIcon,
    level: SkillLevel.Expert,
    pointColor: "#E34F26"
  },
  [SkillEnum.CSS]: {
    name: "CSS",
    icon: CSSIcon,
    level: SkillLevel.Expert,
    pointColor: "#1B73BA"
  },
  [SkillEnum.NodeJs]: {
    name: "Node.js",
    icon: NodeJsIcon,
    level: SkillLevel.Basic,
    pointColor: "#8CC84B"
  },
  [SkillEnum.MySQL]: {
    name: "MySQL",
    icon: MySQLIcon,
    level: SkillLevel.Basic,
    pointColor: "#00546B"
  },
  [SkillEnum.ReactQuery]: {
    name: "ReactQuery",
    icon: ReactQueryIcon,
    level: SkillLevel.Skilled,
    pointColor: "#6EDBFD"
  },
  [SkillEnum.Recoil]: {
    name: "Recoil",
    icon: RecoilIcon,
    level: SkillLevel.Skilled,
    pointColor: "#3578E5"
  },
  [SkillEnum.Vuex]: {
    name: "Vuex",
    icon: VuexIcon,
    level: SkillLevel.Basic,
    pointColor: "#4FC08D"
  },
  [SkillEnum.Tailwind]: {
    name: "Tailwind",
    icon: TailwindIcon,
    level: SkillLevel.Expert,
    pointColor: "#38BDF8"
  },
  [SkillEnum.ShadcnUI]: {
    name: "ShadcnUI",
    icon: ShadcnUIIcon,
    level: SkillLevel.Skilled,
    pointColor: "#FFFFFF"
  },
  [SkillEnum.MUI]: {
    name: "MUI",
    icon: MUIIcon,
    level: SkillLevel.Skilled,
    pointColor: "#0073E6"
  },
  [SkillEnum.Bootstrap]: {
    name: "Bootstrap",
    icon: BootstrapIcon,
    level: SkillLevel.Skilled,
    pointColor: "#7E13F8"
  },
  [SkillEnum.Vuetify]: {
    name: "Vuetify",
    icon: VuetifyIcon,
    level: SkillLevel.Basic,
    pointColor: "#1697F6"
  },
};

export const TOOL_LIST: Partial<Record<SkillEnum, Tool>> = {
  [SkillEnum.Github]: {
    name: "Github",
    icon: GithubIcon,
    pointColor: "#FFFFFF"
  },
  [SkillEnum.AWS]: {
    name: "AWS",
    icon: AWSIcon,
    pointColor: "#FF9900"
  },
  [SkillEnum.Firebase]: {
    name: "Firebase",
    icon: FirebaseIcon,
    pointColor: "#FF9100"
  },
  [SkillEnum.Vercel]: {
    name: "Vercel",
    icon: VercelIcon,
    pointColor: "#FFFFFF"
  },
  [SkillEnum.Figma]: {
    name: "Figma",
    icon: FigmaIcon,
    pointColor: "#FFFFFF"
  },
  [SkillEnum.Storybook]: {
    name: "Storybook",
    icon: StorybookIcon,
    pointColor: "#FF4785"
  },
};

export const SOFT_SKILLS: string[] = [
  "사용자 중심 사고",
  "디테일에 대한 감각",
  "꼼꼼한 서비스 품질 관리",
  "문제 해결력",
  "명확한 커뮤니케이션",
  "빠른 학습 능력",
];

export const SKILL_SETS: string[] = [
  "컴포넌트 아키텍처 구축",
  "퍼포먼스 최적화",
  "상태 관리 아키텍처 설계",
  "WebView 환경 최적화",
  "결제·브릿지 연동 구현",
  "UX 흐름 개선 능력",
];

export const LANGUAGES: string[] = ["한국어", "English"];

export const SKILL_DATA: SkillData = {
  skills: Object.values(SKILL_LIST).filter((skill): skill is Skill => skill !== undefined),
  tools: Object.values(TOOL_LIST).filter((tool): tool is Tool => tool !== undefined),
  softSkills: SOFT_SKILLS,
  skillSets: SKILL_SETS,
  languages: LANGUAGES,
};

// 스킬 enum으로 Skill 또는 Tool 정보 찾기
export const getSkillByEnum = (skillEnum: SkillEnum): Skill | Tool | undefined => {
  return SKILL_LIST[skillEnum] || TOOL_LIST[skillEnum];
};

