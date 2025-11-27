import { ComponentType } from "react";

export enum SkillLevel {
  Expert = "expert",
  Skilled = "skilled",
  Basic = "basic",
}

export enum SkillEnum {
  React = "React",
  NextJs = "Next.js",
  Vue = "Vue",
  TypeScript = "TypeScript",
  JavaScript = "JavaScript",
  HTML = "HTML",
  CSS = "CSS",
  NodeJs = "Node.js",
  MySQL = "MySQL",
  ReactQuery = "ReactQuery",
  Recoil = "Recoil",
  Vuex = "Vuex",
  Tailwind = "Tailwind",
  ShadcnUI = "ShadcnUI",
  MUI = "MUI",
  Bootstrap = "Bootstrap",
  Vuetify = "Vuetify",
  Github = "Github",
  AWS = "AWS",
  Firebase = "Firebase",
  Vercel = "Vercel",
  Figma = "Figma",
  Storybook = "Storybook",
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

