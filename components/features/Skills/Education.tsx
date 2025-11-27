"use client";

import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import GradientTitle from "@/components/common/Typography/GradientTitle";
import { EDUCATION_LIST } from "@/constant/education";

const Education = () => {
  return <section className="flex flex-col gap-y-6 sm:gap-y-8 md:gap-y-10 lg:gap-y-12">
    <GradientTitle>Education</GradientTitle>
    <ul className="flex flex-col gap-y-4">
      {EDUCATION_LIST.map((education, index) => (
        <AnimatedEducationItem key={education.institution} education={education} delay={index * 100} />
      ))}
    </ul>
  </section>;
};

const AnimatedEducationItem = ({ education, delay = 0 }: { education: typeof EDUCATION_LIST[0]; delay?: number }) => {
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
        {education.period.start} - {education.period.end}
      </span>
      <div className="text-sm lg:text-base">
        {`[${education.institution}] ${education.major}`}
      </div>
    </li>
  );
};

export default Education;