import { ComponentType } from "react";

export enum SkillLevel {
  Expert = "expert",
  Skilled = "skilled",
  Basic = "basic",
}

export interface Skill {
  name: string;
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  level: SkillLevel;
  pointColor: string;
}

export interface Tool {
  name: string;
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  pointColor: string;
}

export interface SkillData {
  skills: Skill[];
  tools: Tool[];
  softSkills: string[];
  skillSets: string[];
  languages: string[];
}

