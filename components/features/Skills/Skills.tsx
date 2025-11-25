import GradientTitle from "@/components/common/Typography/GradientTitle";
import { SKILL_DATA } from "@/constant/skill";
import TechnicalSkills from "./TechnicalSkills";
import TextListSection from "./TextListSection";
import ToolingAndInfra from "./ToolingAndInfra";

const Skills = () => {
  return <section className="flex flex-col gap-y-12 w-full">
    <GradientTitle>Skills</GradientTitle>
    <div className="w-full flex gap-x-[120px] justify-between">
      <div className="flex flex-col gap-y-12">
        <TechnicalSkills />
        <ToolingAndInfra />
      </div>
      <div className="flex flex-col justify-between gap-y-12">
        <TextListSection title="Soft Skills" items={SKILL_DATA.softSkills} />
        <TextListSection title="Skill Set" items={SKILL_DATA.skillSets} />
        <TextListSection title="Languages" items={SKILL_DATA.languages} />
      </div>
    </div>
  </section>;
};

export default Skills;