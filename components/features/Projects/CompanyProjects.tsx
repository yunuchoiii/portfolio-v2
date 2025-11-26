import Title from "@/components/common/Typography/Title";
import { COMPANY_PROJECT_LIST } from "@/constant/project";
import { Project, ProjectCompany } from "@/types/project";
import ProjectCard from "./ProjectCard";

interface CompanyProjectsProps {
  onProjectClick: (project: Project) => void;
}

const CompanyProjects = ({ onProjectClick }: CompanyProjectsProps) => {
  const PTS_PROJECTS = COMPANY_PROJECT_LIST.filter((project) => project.company === ProjectCompany.PTS);
  const MFP_PROJECTS = COMPANY_PROJECT_LIST.filter((project) => project.company === ProjectCompany.MFP);

  return (
    <section className="w-full flex flex-col gap-y-5">
      <Title>Company Projects</Title>
      <div className="flex gap-x-5">
        <div
          className="flex-[0_0_35%] min-w-0 aspect-[320/904] bg-cover bg-center rounded-[40px] bg-no-repeat"
          style={{ backgroundImage: `url("/images/projects/PTS/banner.png")` }}
        />
        <div className="flex flex-col gap-y-5 flex-1 min-w-0">
          {PTS_PROJECTS.map((project) => (
            <ProjectCard 
              key={project.title}
              project={project}
              onClick={() => onProjectClick(project)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-row-reverse gap-x-5">
        <div
          className="flex-[0_0_35%] min-w-0 aspect-[320/596] bg-cover bg-center rounded-[40px] bg-no-repeat"
          style={{ backgroundImage: `url("/images/projects/MFP/banner.png")` }}
        />
        <div className="flex flex-col gap-y-5 flex-1 min-w-0">
          {MFP_PROJECTS.map((project) => (
            <ProjectCard 
              key={project.title}
              project={project}
              onClick={() => onProjectClick(project)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyProjects;