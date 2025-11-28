"use client";

import GradientTitle from "@/components/common/Typography/GradientTitle";
import { CAREER_LIST } from "@/constant/career";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Career as CareerType } from "@/types/career";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import CareerCard from "./CareerCard";

const ExtraSubscription = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4 sm:mt-5 border-t border-white/20 pt-4 sm:pt-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-x-4 text-left active:opacity-50 lg:hover:opacity-80 transition-opacity"
      >
        <h6 className="text-sm sm:text-base font-semibold text-white/90">
          파트타임스터디 파산 사태와 관련하여
        </h6>
        <ChevronDown
          className={cn(
            "size-5 sm:size-6 text-white/70 flex-shrink-0 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "text-sm sm:text-base !leading-relaxed text-white/80 whitespace-pre-line overflow-hidden transition-all duration-300 ease-in-out flex flex-col gap-y-2",
          isOpen ? "mt-4 sm:mt-5 max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <p>
          본 포폴리오의 파트타임스터디 프로젝트는 퇴사일까지 재직하며 수행한 웹 프론트엔드 개발 결과물입니다.
        </p>
        <p>
          2025년 11월 회사의 파산 사태와 관련하여, 저는 퇴사 당일 아침에야 해당 소식을 접했으며, 경영진의 파산 계획 및 결정에 대해 사전에 전혀 인지하거나 관여하지 않았음을 명확히 밝힙니다.
        </p>
        <p>
          실제로 퇴사 하루 전까지 새로운 기능의 오류를 수정하며 서비스 개선에 전념하는 등, 저의 업무는 오직 직무적 책임에만 국한되어 있었습니다.
        </p>
        <p>
          해당 사태와 무관하게, 이 작업물은 해당 기간 동안의 저의 직무 역량과 전문성을 평가하는 자료로만 활용해 주시기를 부탁드립니다.
        </p>
      </div>
    </div>
  )
}

const Career = () => {
  //구직 중 상태
  const isSearching = true;

  return (
    <section className="w-full max-w-[928px] flex flex-col gap-y-6 sm:gap-y-8">
      <GradientTitle>
        Career
      </GradientTitle>
      <div className="flex flex-col gap-y-6 lg:gap-y-8">
        {isSearching && (
          <AnimatedCareerCard delay={0} />
        )}
        {CAREER_LIST.map((career: CareerType, index) => (
          <AnimatedCareerCard 
            key={career.eng_name} 
            career={career} 
            delay={(isSearching ? index + 1 : index) * 100}
            children={career.kor_name === "(주)스터디워크" ? <ExtraSubscription /> : null}
          />
        ))}
      </div>
    </section>
  );
};

const AnimatedCareerCard = ({ career, children, delay = 0 }: { career?: CareerType; children?: React.ReactNode; delay?: number }) => {
  const { elementRef, isVisible } = useScrollAnimation({ 
    threshold: 0.1,
    rootMargin: "0px",
    triggerOnce: true 
  });

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={cn(
        "scroll-animate-slide-up",
        isVisible && "visible"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <CareerCard career={career}>
        {children}
      </CareerCard>
    </div>
  );
};

export default Career;