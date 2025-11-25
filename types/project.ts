import { SkillEnum } from "./skill";

export enum ProjectCompany {
  PTS = "PTS",
  MFP = "MFP",
}

export interface Project {
  title: string;
  summary: string;
  image: string;
  skills: SkillEnum[];
  period?: {
    start: string;
    end?: string;
  };
  notionLink?: string;
  notionId?: string;
  githubLink?: string;
  company?: string;
}