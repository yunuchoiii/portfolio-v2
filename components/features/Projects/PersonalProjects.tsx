import Title from "@/components/common/Typography/Title";
import { PERSONAL_PROJECT_LIST } from "@/constant/project";
import ProjectCard from "./ProjectCard";

const PersonalProjects = () => {
  return (
    <section className="w-full flex flex-col gap-y-5">
      <Title>Personal Projects</Title>
      {PERSONAL_PROJECT_LIST.map((project) => (
        <ProjectCard
          key={project.title}
          project={project}
        />
      ))}
    </section>
  );
};

export default PersonalProjects;