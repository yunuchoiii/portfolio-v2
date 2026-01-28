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
    <div className="mt-4 sm:mt-5 border-t border-white/30 pt-4 sm:pt-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-x-4 text-left active:opacity-50 lg:hover:opacity-80 transition-opacity"
      >
        <h3 className="text-sm sm:text-base font-semibold text-white">
          파트타임스터디 파산 사태와 관련하여
        </h3>
        <ChevronDown
          className={cn(
            "size-5 sm:size-6 text-white/85 flex-shrink-0 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>
      <div
        className={cn(
          "text-sm sm:text-base !leading-relaxed text-white/90 whitespace-pre-line overflow-hidden transition-all duration-300 ease-in-out flex flex-col gap-y-2",
          isOpen ? "mt-4 sm:mt-5 max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <p>
          본 포트폴리오에 포함된 &apos;파트타임스터디&apos; 프로젝트는 퇴사일까지 제가 성실히 수행해온 웹 프론트엔드 개발의 결과물입니다.
        </p>
        <p>
          저는 2025년 11월에 발생한 회사의 파산 사태를 퇴사 당일 아침에야 처음 접하게 되었습니다. 경영진의 파산 계획이나 결정 과정에 대해서는 사전에 전혀 인지하지 못했으며, 어떠한 관여도 하지 않았음을 분명히 밝힙니다.
        </p>
        <p>
          실제로 저는 퇴사 바로 전날까지도 서비스의 새로운 기능을 점검하고 오류를 수정하며, 오로지 제가 맡은 직무적 책임에만 전념하고 있었습니다. 갑작스러운 사태와는 무관하게, 이 작업물들이 해당 기간 동안 제가 쌓아온 기술적 역량과 전문성을 보여주는 객관적인 지표로만 활용되기를 정중히 부탁드립니다.
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
          >
            {career.kor_name === "(주)스터디워크" ? <ExtraSubscription /> : null}
          </AnimatedCareerCard>
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