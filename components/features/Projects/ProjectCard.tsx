import { cn } from "@/lib/utils";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const isCompanyProject = !!project.company;
  return (
    <button 
      key={project.title}
      onClick={onClick}
      className={cn("group w-full bg-cover bg-center rounded-[40px] bg-no-repeat", isCompanyProject ? "aspect-[562/288]" : "aspect-[902/288]")}
      style={{ backgroundImage: `url(${project.image})` }}
    >
      <div className="size-full flex flex-col items-start justify-between bg-black/50 backdrop-blur-xl transition-all duration-300 ease-in-out rounded-[38px] p-10 opacity-0 group-hover:opacity-100">
        <div className="flex flex-col items-start gap-y-3">
          <h4 className="text-xl font-medium">{project.title}</h4>
          <p>
            {project.period?.start} - {project.period?.end}
          </p>
        </div>
        <div className="flex flex-col items-start text-left leading-relaxed">
          {project.summary.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </button>
  );
};

export default ProjectCard;