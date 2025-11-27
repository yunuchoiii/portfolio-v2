"use client";

import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import GradientTitle from "@/components/common/Typography/GradientTitle";
import { AWARD_LIST } from "@/constant/award";

const Award = () => {
  return <section className="flex flex-col gap-y-6 sm:gap-y-8 md:gap-y-10 lg:gap-y-12">
    <GradientTitle>Award</GradientTitle>
    <ul className="flex flex-col gap-y-4">
      {AWARD_LIST.map((award, index) => (
        <AnimatedAwardItem key={award.date} award={award} delay={index * 100} />
      ))}
    </ul>
  </section>;
};

const AnimatedAwardItem = ({ award, delay = 0 }: { award: typeof AWARD_LIST[0]; delay?: number }) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <li 
      ref={elementRef as React.RefObject<HTMLLIElement>}
      className={cn(
        "flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 gap-x-5 scroll-animate-slide-up",
        isVisible && "visible"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="text-blue-20 text-sm lg:text-base">
        {award.date}
      </span>
      <div className="text-sm lg:text-base">
        {award.title}
      </div>
    </li>
  );
};

export default Award;