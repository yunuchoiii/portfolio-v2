"use client";

import Skeleton from "@/components/common/Loader/Skeleton";
import SkillTag from "@/components/common/Tag/SkillTag";
import { getSkillByEnum } from "@/constant/skill";
import { formatNotionPageId } from "@/lib/notion";
import { Project } from "@/types/project";
import { SkillEnum } from "@/types/skill";
import { ChevronLeft, ChevronRight, XIcon } from "lucide-react";
import { ExtendedRecordMap } from "notion-types";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect, useState } from "react";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";
import Gallery from "react-photo-gallery";

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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

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
      document.body.style.overflow = "auto";
      // 애니메이션 종료 후 언마운트 및 displayProject 초기화 (0.45s)
      const timer = setTimeout(() => {
        setShouldRender(false);
        setDisplayProject(null);
        setRecordMap(null);
      }, 450);
      return () => clearTimeout(timer);
    }
  }, [project, shouldRender, displayProject]);

  const imageList = displayProject?.imageList || [];
  const hasImages = imageList.length > 0;
  const [imageDimensions, setImageDimensions] = useState<Array<{ width: number; height: number }>>([]);

  // 이미지 크기 로드
  useEffect(() => {
    if (!hasImages) return;

    const loadImageDimensions = async () => {
      const dimensions = await Promise.all(
        imageList.map((src) => {
          return new Promise<{ width: number; height: number }>((resolve) => {
            const img = new Image();
            img.onload = () => {
              resolve({ width: img.naturalWidth, height: img.naturalHeight });
            };
            img.onerror = () => {
              // 에러 시 기본 비율 사용
              resolve({ width: 4, height: 3 });
            };
            img.src = src;
          });
        })
      );
      setImageDimensions(dimensions);
    };

    loadImageDimensions();
  }, [imageList, hasImages]);

  // react-photo-gallery용 포맷 변환
  const galleryPhotos = imageList.map((src, index) => {
    const dimension = imageDimensions[index] || { width: 4, height: 3 };
    return {
      src,
      width: dimension.width,
      height: dimension.height,
      alt: `${displayProject?.title} 이미지 ${index + 1}`,
      index, // index를 photo 객체에 추가
    };
  });

  const handleImageClick = (event: React.MouseEvent, { index }: { index: number }) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // 라이트박스 키보드 네비게이션
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev > 0 ? prev - 1 : imageList.length - 1));
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev < imageList.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, imageList.length]);

  const handlePrevious = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : imageList.length - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev < imageList.length - 1 ? prev + 1 : 0));
  };

  if (!shouldRender || !displayProject) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
      style={{ perspective: "1000px" }}
    >
      <div
        className={`relative bg-[#202020]/75 rounded-[30px] px-6 sm:px-8 md:px-12 lg:px-[60px] py-[45px] 2xl:max-w-5xl sm:max-w-[80%] max-w-[calc(100%-24px)] w-full max-h-[85%] h-full shadow-[0_0_120px_rgba(0,0,0,0.5)] backdrop-blur-[80px] ${
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
          className="absolute top-4 right-4 md:top-6 md:right-6 active:opacity-50 transition-opacity"
        >
          <XIcon className="md:size-8 size-6" />
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

          {/* 이미지 콜라주 */}
          {hasImages && (
            <div className="flex-shrink-0">
              <h3 className="text-xl font-semibold mb-4 sr-only">프로젝트 이미지</h3>
              <div className="rounded-lg overflow-hidden">
                {imageDimensions.length === imageList.length ? (
                  <Gallery
                    photos={galleryPhotos}
                    onClick={handleImageClick}
                    margin={8}
                    targetRowHeight={200}
                    renderImage={({ photo, margin, onClick }) => {
                      const photoWithIndex = photo as typeof photo & { index?: number };
                      const index = photoWithIndex.index ?? galleryPhotos.findIndex((p) => p.src === photo.src);
                      return (
                        <div
                          key={photo.src}
                          className="flex items-center justify-center cursor-pointer hover:brightness-75 transition-all"
                          style={{
                            width: photo.width,
                            height: photo.height,
                            margin,
                          }}
                          onClick={(e) => onClick?.(e, { index })}
                        >
                          <img
                            src={photo.src}
                            alt={photo.alt || `${displayProject?.title} 이미지`}
                            style={{
                              maxWidth: '100%',
                              maxHeight: '100%',
                              width: 'auto',
                              height: 'auto',
                              objectFit: 'contain',
                            }}
                          />
                        </div>
                      );
                    }}
                  />
                ) : (
                  <div className="flex items-center justify-center py-20">
                    <p className="text-gray-400">이미지 로딩 중...</p>
                  </div>
                )}
              </div>
            </div>
          )}

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

      {/* 전체화면 이미지 라이트박스 */}
      {lightboxOpen && hasImages && (
        <div
          className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center backdrop-blur-[10px]"
          onClick={(e) => {
            e.stopPropagation();
            setLightboxOpen(false);
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(false);
            }}
            className="absolute top-6 right-6 text-white hover:opacity-70 transition-opacity z-10"
            aria-label="닫기"
          >
            <XIcon className="size-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            className="absolute left-0 p-6 top-1/2 -translate-y-1/2 text-white hover:opacity-70 transition-opacity z-10"
            aria-label="이전 이미지"
          >
            <ChevronLeft className="size-10" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-0 p-6 top-1/2 -translate-y-1/2 text-white hover:opacity-70 transition-opacity z-10"
            aria-label="다음 이미지"
          >
            <ChevronRight className="size-10" />
          </button>

          <div
            className="relative max-w-[calc(100%-128px)] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imageList[lightboxIndex]}
              alt={`${displayProject.title} 이미지 ${lightboxIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm">
            {lightboxIndex + 1} / {imageList.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailModal;

