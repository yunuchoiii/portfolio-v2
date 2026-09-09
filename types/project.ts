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
  notionLink?: string;
  notionId?: string;
  /** public/content/projects/<contentSlug>.md — 상세 본문. scripts/sync-notion-content.mjs 가 채운다 */
  contentSlug?: string;
  githubLink?: string;
  company?: string;
  deployedLink?: string;
}