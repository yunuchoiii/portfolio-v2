import { SkillEnum } from "./skill";

export enum ProjectCompany {
  PTS = "PTS",
  MFP = "MFP",
}

export interface Project {
  title: string;
  summary: string;
  image: string;
  imageList?: string[];
  skills: SkillEnum[];
  period?: {
    start: string;
    end?: string;
  };
  /** public/content/projects/<contentSlug>.md — 상세 본문. 이 파일이 정본이며 직접 고친다 */
  contentSlug?: string;
  githubLink?: string;
  company?: string;
  deployedLink?: string;
}