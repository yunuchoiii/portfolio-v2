import { Skill, Tool } from "@/types/skill";

const SkillTag = ({skill}: {skill: Skill | Tool}) => {
  return <div 
    className="relative flex items-center justify-center shrink-0 gap-x-2 px-2.5 py-1.5 rounded-lg overflow-hidden"
  >
    <div className="size-full absolute opacity-20" style={{ backgroundColor: skill.pointColor }} />
    <skill.icon className="size-4 z-10" />
    <span className="text-sm font-medium z-10">{skill.name}</span>
  </div>;
};

export default SkillTag;