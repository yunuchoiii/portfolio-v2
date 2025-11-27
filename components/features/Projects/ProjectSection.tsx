"use client";

import GradientTitle from "@/components/common/Typography/GradientTitle";
import { Project } from "@/types/project";
import { useState } from "react";
import CompanyProjects from "./CompanyProjects";
import PersonalProjects from "./PersonalProjects";
import ProjectDetailModal from "./ProjectDetailModal";

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="flex items-center justify-center lg:py-[150px] py-12 sm:py-16 md:py-20">
      <div className="flex flex-col lg:gap-y-20 gap-y-12 w-[calc(100%-48px)] sm:w-[calc(100%-60px)] md:w-[calc(100%-80px)] lg:w-[920px]">
        <GradientTitle>Projects</GradientTitle>
        <CompanyProjects onProjectClick={handleProjectClick} />
        <PersonalProjects onProjectClick={handleProjectClick} />
      </div>
      <ProjectDetailModal project={selectedProject} onClose={handleCloseModal} />
    </section>
  );
};

export default ProjectSection;