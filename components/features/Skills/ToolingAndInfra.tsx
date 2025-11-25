"use client";

import SkillIconButton from "@/components/common/Button/SkillIconButton";
import Title from "@/components/common/Typography/Title";
import { SKILL_DATA } from "@/constant/skill";

const ToolingAndInfra = () => {
  return <section className="flex flex-col gap-y-8">
    <Title>Tooling & Infra</Title>
    <div className="grid grid-cols-7 gap-5">
      {SKILL_DATA.tools.map((tool) => (
        <SkillIconButton
          key={tool.name} 
          active={true} 
          {...tool} 
        />
      ))}
    </div>
  </section>;
};

export default ToolingAndInfra;