import GradientTitle from "@/components/common/Typography/GradientTitle";
import CompanyProjects from "./CompanyProjects";
import PersonalProjects from "./PersonalProjects";

const ProjectSection = () => {
  return (
    <section id="projects" className="flex items-center justify-center py-[150px]">
      <div className="flex flex-col gap-y-20 w-[920px]">
        <GradientTitle>Projects</GradientTitle>
        <CompanyProjects />
        <PersonalProjects />
      </div>
    </section>
  );
};

export default ProjectSection;