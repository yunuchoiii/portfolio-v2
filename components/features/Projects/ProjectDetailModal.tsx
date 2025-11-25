"use client";

import Skeleton from "@/components/common/Loader/Skeleton";
import SkillTag from "@/components/common/Tag/SkillTag";
import { getSkillByEnum } from "@/constant/skill";
import { formatNotionPageId } from "@/lib/notion";
import { Project } from "@/types/project";
import { SkillEnum } from "@/types/skill";
import { XIcon } from "lucide-react";
import { ExtendedRecordMap } from "notion-types";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect, useState } from "react";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectDetailModal = ({ project, onClose }: ProjectDetailModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [displayProject, setDisplayProject] = useState<Project | null>(null);
  const [recordMap, setRecordMap] = useState<ExtendedRecordMap | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // 노션 페이지 데이터 가져오기
  useEffect(() => {
    if (displayProject?.notionLink) {
      const pageId = displayProject.notionId;
      if (pageId) {
        setIsLoading(true);
        const formattedPageId = formatNotionPageId(pageId);
        fetch(`/api/notion/${formattedPageId}`)
          .then((res) => res.json())
          .then((data) => {
            setRecordMap(data);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error("Failed to load Notion page:", error);
            setIsLoading(false);
          });
      }
    } else {
      setRecordMap(null);
    }
  }, [displayProject?.notionLink]);

  // 모달 열리면 배경 스크롤 방지
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      setIsClosing(false);
      setDisplayProject(project);
      setShouldRender(true);
    } else if (shouldRender && displayProject) {
      // 닫기 애니메이션 시작 (displayProject는 유지)
      setIsClosing(true);
      // 애니메이션 종료 후 언마운트 및 displayProject 초기화 (0.45s)
      const timer = setTimeout(() => {
        setShouldRender(false);
        setDisplayProject(null);
        setRecordMap(null);
        document.body.style.overflow = "auto";
      }, 450);
      return () => clearTimeout(timer);
    }
  }, [project, shouldRender, displayProject]);

  if (!shouldRender || !displayProject) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
      style={{ perspective: "1000px" }}
    >
      <div
        className={`relative bg-[#202020]/75 rounded-[30px] px-[60px] py-[45px] 2xl:max-w-5xl sm:max-w-[80%] max-w-[calc(100%-24px)] w-full max-h-[85%] h-full shadow-[0_0_120px_rgba(0,0,0,0.5)] backdrop-blur-[80px] ${
          isClosing ? "animate-flip-out-hor-top" : "animate-flip-in-hor-top"
        }`}
        onClick={(e) => e.stopPropagation()}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center",
          animationFillMode: "both",
        }}
      >
        <button
          title="닫기"
          aria-label="닫기"
          onClick={onClose}
          className="absolute top-6 right-6 active:opacity-50 transition-opacity"
        >
          <XIcon className="size-8" />
        </button>
        <div className="flex flex-col gap-y-5 h-full overflow-y-auto scrollbar-hide">
          <div className="flex flex-col gap-y-5 flex-shrink-0">
            <h2 className="text-2xl font-semibold">
              {displayProject.title}
            </h2>
            <p>
              {displayProject.period?.start} - {displayProject.period?.end}
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              {displayProject.skills.map((skill: SkillEnum) => {
                const skillData = getSkillByEnum(skill);
                if (!skillData) return null;
                return (
                  <SkillTag
                    key={skill}
                    skill={skillData}
                  />
                );
              })}
            </div>
          </div>
          {displayProject.notionLink && (
            <div className="min-h-0 rounded-lg notion-container">
              {isLoading ? (
                <div className="flex flex-col gap-y-3">
                  <Skeleton width={200} height={20}/>
                  <Skeleton width={450} height={20}/>
                  <Skeleton width={500} height={20}/>
                  <Skeleton width={100} height={20}/>
                  <Skeleton width={500} height={20}/>
                  <Skeleton width={600} height={20}/>
                  <Skeleton width={500} height={20}/>
                  <Skeleton width={200} height={20}/>
                  <Skeleton width={450} height={20}/>
                  <Skeleton width={500} height={20}/>
                  <Skeleton width={100} height={20}/>
                  <Skeleton width={500} height={20}/>
                  <Skeleton width={600} height={20}/>
                  <Skeleton width={500} height={20}/>
                </div>
              ) : recordMap ? (
                <NotionRenderer
                  recordMap={recordMap}
                  fullPage={false}
                  darkMode={true}
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p>노션 페이지를 불러올 수 없습니다.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;

