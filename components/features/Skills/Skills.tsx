import GradientTitle from "@/components/common/Typography/GradientTitle";
import { SKILL_DATA } from "@/constant/skill";
import TechnicalSkills from "./TechnicalSkills";
import TextListSection from "./TextListSection";
import ToolingAndInfra from "./ToolingAndInfra";

const Skills = () => {
  return <section className="flex flex-col gap-y-6 sm:gap-y-8 md:gap-y-10 lg:gap-y-12 md:w-full">
    <GradientTitle>Skills</GradientTitle>
    <div className="w-full flex flex-col lg:flex-row lg:gap-x-[120px] lg:justify-between gap-y-12 lg:gap-y-0">
      <div className="flex flex-col gap-y-12">
        <TechnicalSkills />
        <ToolingAndInfra />
      </div>
      <div className="flex flex-col lg:justify-between gap-y-12">
        <TextListSection title="Soft Skills" items={SKILL_DATA.softSkills} />
        <TextListSection title="Skill Set" items={SKILL_DATA.skillSets} />
        <TextListSection title="Languages" items={SKILL_DATA.languages} />
      </div>
    </div>
  </section>;
};

export default Skills;