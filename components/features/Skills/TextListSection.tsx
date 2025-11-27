"use client";

import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import Title from "@/components/common/Typography/Title";

type TextListSectionProps = {
  title: string;
  items: string[];
};

const TextListSection = ({ title, items }: TextListSectionProps) => {
  const titleRef = useScrollAnimation();
  const listRef = useScrollAnimation();

  return (
    <div className="flex flex-col gap-y-8 flex-shrink-0">
      <div
        ref={titleRef.elementRef as React.RefObject<HTMLDivElement>}
        className={cn(
          "scroll-animate-fade-in",
          titleRef.isVisible && "visible"
        )}
      >
        <Title>{title}</Title>
      </div>
      <div
        ref={listRef.elementRef as React.RefObject<HTMLDivElement>}
        className={cn(
          "flex gap-x-6 scroll-animate-slide-up",
          listRef.isVisible && "visible"
        )}
        style={{ transitionDelay: "100ms" }}
      >
        <ul className="flex flex-col gap-y-5">
          {items.slice(0, 3).map((item, index) => (
            <li key={index} className="text-white text-sm lg:text-base whitespace-nowrap">
              {item}
            </li>
          ))}
        </ul>
        {items.length > 3 && (
          <>
            <div className="w-px bg-white/50"></div>
            <ul className="flex flex-col gap-y-5">
              {items.slice(3).map((item, index) => (
                <li key={index} className="text-white text-sm lg:text-base whitespace-nowrap">
                  {item}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default TextListSection;

