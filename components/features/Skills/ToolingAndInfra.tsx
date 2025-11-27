"use client";

import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import SkillIconButton from "@/components/common/Button/SkillIconButton";
import Title from "@/components/common/Typography/Title";
import { SKILL_DATA } from "@/constant/skill";

const ToolingAndInfra = () => {
  const titleRef = useScrollAnimation();
  const toolsRef = useScrollAnimation();

  return <section className="flex flex-col gap-y-8">
    <div
      ref={titleRef.elementRef as React.RefObject<HTMLDivElement>}
      className={cn(
        "scroll-animate-fade-in",
        titleRef.isVisible && "visible"
      )}
    >
      <Title>Tooling & Infra</Title>
    </div>
    <div
      ref={toolsRef.elementRef as React.RefObject<HTMLDivElement>}
      className={cn(
        "flex flex-wrap gap-5 scroll-animate-fade-in",
        toolsRef.isVisible && "visible"
      )}
      style={{ transitionDelay: "200ms" }}
    >
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