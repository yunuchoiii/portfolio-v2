"use client";

import GradientTitle from "@/components/common/Typography/GradientTitle";
import { CAREER_LIST } from "@/constant/career";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Career as CareerType } from "@/types/career";
import CareerCard from "./CareerCard";

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
            key={career.company} 
            career={career} 
            delay={(isSearching ? index + 1 : index) * 100}
          />
        ))}
      </div>
    </section>
  );
};

const AnimatedCareerCard = ({ career, delay = 0 }: { career?: CareerType; delay?: number }) => {
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
      <CareerCard career={career} />
    </div>
  );
};

export default Career;