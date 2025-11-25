import Title from "@/components/common/Typography/Title";
import { PERSONAL_PROJECT_LIST } from "@/constant/project";
import { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";

interface PersonalProjectsProps {
  onProjectClick: (project: Project) => void;
}

const PersonalProjects = ({ onProjectClick }: PersonalProjectsProps) => {
  return (
    <section className="w-full flex flex-col gap-y-5">
      <Title>Personal Projects</Title>
      {PERSONAL_PROJECT_LIST.map((project) => (
        <ProjectCard
          key={project.title}
          project={project}
          onClick={() => onProjectClick(project)}
        />
      ))}
    </section>
  );
};

export default PersonalProjects;