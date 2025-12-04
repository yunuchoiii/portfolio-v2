"use client";

import Title from "@/components/common/Typography/Title";
import { COMPANY_PROJECT_LIST } from "@/constant/project";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Project, ProjectCompany } from "@/types/project";
import ProjectCard from "./ProjectCard";

interface CompanyProjectsProps {
  onProjectClick: (project: Project) => void;
}

const CompanyProjects = ({ onProjectClick }: CompanyProjectsProps) => {
  const PTS_PROJECTS = COMPANY_PROJECT_LIST.filter((project) => project.company === ProjectCompany.PTS);
  const MFP_PROJECTS = COMPANY_PROJECT_LIST.filter((project) => project.company === ProjectCompany.MFP);

  const ptsBannerRef = useScrollAnimation();
  const mfpBannerRef = useScrollAnimation();

  return (
    <section className="w-full flex flex-col gap-y-5">
      <Title>Company Projects</Title>
      <div className="flex gap-x-3 sm:gap-x-5">
        <div
          ref={ptsBannerRef.elementRef as React.RefObject<HTMLDivElement>}
          className={cn(
            "flex-[0_0_35%] min-w-0 aspect-[320/904] bg-cover bg-center rounded-[16px] sm:rounded-[28px] md:rounded-[32px] lg:rounded-[40px] bg-no-repeat scroll-animate-slide-right",
            ptsBannerRef.isVisible && "visible"
          )}
          style={{ backgroundImage: `url("/images/projects/PTS/banner.png")` }}
        />
        <div className="flex flex-col gap-y-3 sm:gap-y-5 flex-1 min-w-0">
          {PTS_PROJECTS.map((project, index) => (
            <AnimatedProjectCard
              key={project.title}
              project={project}
              onClick={() => onProjectClick(project)}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-row-reverse gap-x-3 sm:gap-x-5">
        <div
          ref={mfpBannerRef.elementRef as React.RefObject<HTMLDivElement>}
          className={cn(
            "flex-[0_0_35%] min-w-0 aspect-[320/596] bg-cover bg-center rounded-[16px] sm:rounded-[28px] md:rounded-[32px] lg:rounded-[40px] bg-no-repeat scroll-animate-slide-left",
            mfpBannerRef.isVisible && "visible"
          )}
          style={{ backgroundImage: `url("/images/projects/MFP/banner.png")` }}
        />
        <div className="flex flex-col gap-y-3 sm:gap-y-5 flex-1 min-w-0">
          {MFP_PROJECTS.map((project, index) => (
            <AnimatedProjectCard
              key={project.title}
              project={project}
              onClick={() => onProjectClick(project)}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedProjectCard = ({ project, onClick, delay = 0 }: { project: Project; onClick: () => void; delay?: number }) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={cn(
        "scroll-animate-slide-up",
        isVisible && "visible"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <ProjectCard project={project} onClick={onClick} />
    </div>
  );
};

export default CompanyProjects;