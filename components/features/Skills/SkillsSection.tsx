import Award from "./Award";
import Education from "./Education";
import Skills from "./Skills";

const SkillsSection = () => {
  return <section className="w-full flex items-center justify-center py-[150px] bg-[linear-gradient(160deg,#152F23,#16272D)]">
    <div className="w-[64%] max-w-[1200px] flex flex-col gap-y-20">
      <Education />
      <Award />
      <Skills />
    </div>
  </section>;
};

export default SkillsSection;