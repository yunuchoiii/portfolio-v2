import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const isCompanyProject = !!project.company;
  // padding-bottom 비율 계산: (height / width) * 100%
  // 562/288 = 51.245%, 902/288 = 31.944%
  const aspectRatio = isCompanyProject ? "51.245%" : "31.944%";
  
  return (
    <button 
      key={project.title}
      onClick={onClick}
      className="group w-full relative rounded-[20px] sm:rounded-[28px] md:rounded-[32px] lg:rounded-[40px] overflow-hidden active:scale-95 active:brightness-75 transition-all duration-200 ease-in-out"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${project.image})` }}
      />
      <div 
        className="w-full relative"
        style={{ paddingBottom: aspectRatio }}
      >
        <div className="absolute inset-0 flex flex-col items-start justify-between bg-black/50 backdrop-blur-xl transition-all duration-300 ease-in-out p-10 opacity-0 lg:group-hover:opacity-100">
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
      </div>
    </button>
  );
};

export default ProjectCard;