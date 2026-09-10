"use client";

import Title from "@/components/common/Typography/Title";
import { COMPANY_BANNER } from "@/constant/company";
import { COMPANY_PROJECT_LIST } from "@/constant/project";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Project, ProjectCompany } from "@/types/project";
import CompanyBanner from "./CompanyBanner";
import ProjectCard from "./ProjectCard";

interface CompanyProjectsProps {
  onProjectClick: (project: Project) => void;
}

/** 배너를 왼쪽/오른쪽 번갈아 세운다. 회사가 늘면 여기에 한 줄만 더한다. */
const COMPANY_GROUPS: ProjectCompany[] = [ProjectCompany.PTS, ProjectCompany.MFP];

const CompanyProjects = ({ onProjectClick }: CompanyProjectsProps) => {
  return (
    <section className="w-full flex flex-col gap-y-5">
      <Title>Company Projects</Title>
      {COMPANY_GROUPS.map((company, index) => (
        <CompanyGroup
          key={company}
          company={company}
          bannerOnRight={index % 2 === 1}
          onProjectClick={onProjectClick}
        />
      ))}
    </section>
  );
};

const CompanyGroup = ({
  company,
  bannerOnRight,
  onProjectClick,
}: {
  company: ProjectCompany;
  bannerOnRight: boolean;
  onProjectClick: (project: Project) => void;
}) => {
  const projects = COMPANY_PROJECT_LIST.filter((project) => project.company === company);
  const banner = COMPANY_BANNER[company];
  const bannerRef = useScrollAnimation();

  if (projects.length === 0) return null;

  return (
    <div className={cn("flex gap-x-3 sm:gap-x-5", bannerOnRight && "flex-row-reverse")}>
      {/* 높이를 지정하지 않는다 — flex stretch 로 옆 카드 열과 같은 높이가 된다 */}
      <div
        ref={bannerRef.elementRef as React.RefObject<HTMLDivElement>}
        className={cn(
          "flex-[0_0_35%] min-w-0",
          bannerOnRight ? "scroll-animate-slide-left" : "scroll-animate-slide-right",
          bannerRef.isVisible && "visible"
        )}
      >
        <CompanyBanner banner={banner} className="h-full" />
      </div>
      <div className="flex flex-col gap-y-3 sm:gap-y-5 flex-1 min-w-0">
        {projects.map((project, index) => (
          <AnimatedProjectCard
            key={project.title}
            project={project}
            onClick={() => onProjectClick(project)}
            delay={index * 100}
          />
        ))}
      </div>
    </div>
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
