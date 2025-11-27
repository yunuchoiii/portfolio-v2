import Award from "./Award";
import Education from "./Education";
import Skills from "./Skills";

const SkillsSection = () => {
  return <section 
    id="skills"
    className="w-full flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-[150px] px-6 md:px-8 bg-[linear-gradient(160deg,#152F23,#16272D)]"
  >
    <div className="flex flex-col gap-y-12 sm:gap-y-16 md:gap-y-20 w-full max-w-7xl">
      <Education />
      <Award />
      <Skills />
    </div>
  </section>;
};

export default SkillsSection;