"use client";

import GradientTitle from "@/components/common/Typography/GradientTitle";
import { SKILL_DATA } from "@/constant/skill";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import TechnicalSkills from "./TechnicalSkills";
import TextListSection from "./TextListSection";
import ToolingAndInfra from "./ToolingAndInfra";

const Skills = () => {
  const titleRef = useScrollAnimation();
  const leftColumnRef = useScrollAnimation();
  const rightColumnRef = useScrollAnimation();

  return <section className="flex flex-col gap-y-6 sm:gap-y-8 md:gap-y-10 lg:gap-y-12 md:w-full">
    <div
      ref={titleRef.elementRef as React.RefObject<HTMLDivElement>}
      className={cn(
        "scroll-animate-fade-in",
        titleRef.isVisible && "visible"
      )}
    >
      <GradientTitle>Skills</GradientTitle>
    </div>
    <div className="w-full flex flex-col lg:flex-row lg:gap-x-[120px] lg:justify-between gap-y-12 lg:gap-y-0">
      <div
        ref={leftColumnRef.elementRef as React.RefObject<HTMLDivElement>}
        className={cn(
          "flex flex-col gap-y-12 scroll-animate-slide-up",
          leftColumnRef.isVisible && "visible"
        )}
        style={{ transitionDelay: "200ms" }}
      >
        <TechnicalSkills />
        <ToolingAndInfra />
      </div>
      <div
        ref={rightColumnRef.elementRef as React.RefObject<HTMLDivElement>}
        className={cn(
          "flex flex-col lg:justify-between gap-y-12 scroll-animate-slide-up",
          rightColumnRef.isVisible && "visible"
        )}
        style={{ transitionDelay: "400ms" }}
      >
        <TextListSection title="Soft Skills" items={SKILL_DATA.softSkills} />
        <TextListSection title="Skill Set" items={SKILL_DATA.skillSets} />
        <TextListSection title="Languages" items={SKILL_DATA.languages} />
      </div>
    </div>
  </section>;
};

export default Skills;