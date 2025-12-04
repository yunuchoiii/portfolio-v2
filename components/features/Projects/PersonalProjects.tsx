"use client";

import Title from "@/components/common/Typography/Title";
import { PERSONAL_PROJECT_LIST } from "@/constant/project";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";

interface PersonalProjectsProps {
  onProjectClick: (project: Project) => void;
}

const PersonalProjects = ({ onProjectClick }: PersonalProjectsProps) => {
  return (
    <section className="w-full flex flex-col gap-y-5">
      <Title>Personal Projects</Title>
      <div className="flex flex-col gap-y-3 sm:gap-y-5">
        {PERSONAL_PROJECT_LIST.map((project, index) => (
          <AnimatedProjectCard
            key={project.title}
            project={project}
            onClick={() => onProjectClick(project)}
            delay={index * 100}
          />
        ))}
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
        "scroll-animate-slide-up flex",
        isVisible && "visible"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <ProjectCard project={project} onClick={onClick} />
    </div>
  );
};

export default PersonalProjects;