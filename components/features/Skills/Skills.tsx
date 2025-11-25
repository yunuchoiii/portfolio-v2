import GradientTitle from "@/components/common/Typography/GradientTitle";
import TechnicalSkills from "./TechnicalSkills";

const Skills = () => {
  return <section className="flex flex-col gap-y-12 w-full">
    <GradientTitle>Skills</GradientTitle>
    <div className="w-full flex justify-between">
      <div className="flex flex-col gap-y-12">
        <TechnicalSkills />
      </div>
    </div>
  </section>;
};

export default Skills;