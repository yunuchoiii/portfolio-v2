"use client";

import GithubIcon from "@/assets/icons/github.svg";
import KakaoTalkIcon from "@/assets/icons/kakaotalk.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import IconButton from "@/components/common/Button/IconButton";
import { EMAIL_LINK, GITHUB_LINK, KAKAO_LINK, LINKEDIN_LINK } from "@/constant/link";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import { moveToSection } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { ArrowDown, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const HomeSection = () => {
  const [mounted, setMounted] = useState(false);
  const backgroundRef = useScrollAnimation();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section 
      id="home" 
      className="h-screen w-full bg-gradient-to-b from-[#393939] to-[#1D1E1E] relative overflow-hidden"
    >
      <Image
        src="/images/background_lines.png"
        alt="background lines"
        width={1000}
        height={1000}
        ref={backgroundRef.elementRef as React.RefObject<HTMLImageElement>}
        className={cn(
          "absolute bottom-0 left-0 w-full h-full object-cover transition-all duration-1000 ease-out",
          backgroundRef.isVisible ? "scale-100 opacity-100" : "scale-150 opacity-0"
        )}
      />
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 lg:left-[20%] lg:translate-x-0 px-4 sm:px-6 md:px-12 flex flex-col gap-y-10 w-full max-w-[90%] sm:max-w-[85%] md:max-w-none">
        <h1 className="w-fit text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold italic font-poppins leading-none tracking-tight whitespace-nowrap">
          <span
            className={cn(
              "block bg-clip-text text-transparent bg-gradient-to-r from-green-20 to-blue-40 transition-all duration-500 ease-out",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "0.1s" }}
          >
            Frontend
          </span>
          <span
            className={cn(
              "block bg-clip-text text-transparent bg-gradient-to-r from-green-20 to-blue-40 transition-all duration-500 ease-out",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "0.3s" }}
          >
            Developer .
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose break-keep">
          <span
            className={cn(
              "block transition-all duration-500 ease-out",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "0.6s" }}
          >
            사람의 시선과 흐름을 먼저 떠올리는 개발자입니다.
          </span>
          <span
            className={cn(
              "block transition-all duration-500 ease-out",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "0.8s" }}
          >
            개발자이기 이전에 한명의 소비자로서, 최선의 사용자 경험을 고민해왔습니다.
          </span>
          <span
            className={cn(
              "block transition-all duration-500 ease-out",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "1s" }}
          >
            제가 어떤 고민을 해왔는지, 이 곳에서 확인해보세요.
          </span>
        </p>
        <ul className="flex flex-col md:flex-row items-start md:items-center gap-x-3 sm:gap-x-4 md:gap-x-5 flex-wrap gap-y-3">
          <div className="flex gap-x-3 sm:gap-x-4 md:gap-x-5">
            <li
              className={cn(
                "transition-all duration-500 ease-out",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: "1.3s" }}
            >
              <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
                <IconButton icon={<GithubIcon className="size-6 sm:size-7 md:size-8 lg:size-9" />} />
              </a>
            </li>
            <li
              className={cn(
                "transition-all duration-500 ease-out",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: "1.4s" }}
            >
              <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">
                <IconButton icon={<LinkedinIcon className="size-5 sm:size-6 md:size-7 lg:size-8" />} />
              </a>
            </li>
            <li
              className={cn(
                "transition-all duration-500 ease-out",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: "1.5s" }}
            >
              <a href={EMAIL_LINK} target="_blank" rel="noopener noreferrer">
                <IconButton icon={<Mail className="size-6 sm:size-7 md:size-8 lg:size-9" />} />
              </a>
            </li>
            <li
              className={cn(
                "transition-all duration-500 ease-out",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: "1.6s" }}
            >
              <a href={KAKAO_LINK} target="_blank" rel="noopener noreferrer">
                <IconButton icon={<KakaoTalkIcon className="size-6 sm:size-7 md:size-8 lg:size-9" />} />
              </a>
            </li>
          </div>
          <li
            className={cn(
              "transition-all duration-500 ease-out",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "1.7s" }}
          >
            <Link 
              href="#about" 
              replace 
              onClick={(e) => moveToSection(e, "#about", () => {})}
            >
              <div className="group w-[120px] sm:w-[130px] md:w-[140px] h-10 sm:h-11 md:h-12 lg:h-14 rounded-full bg-gradient-to-br from-green-20 to-blue-40 flex items-center justify-center p-0.5 shadow-[4px_4px_8px_rgba(0,0,0,0.15)] hover:shadow-[0px_0px_24px_rgba(30,214,184,0.5)] hover:scale-105 active:scale-95 transition-all md:duration-300 ease-in-out">
                <div className="w-full h-full pl-1 rounded-full bg-[radial-gradient(circle_at_center,#3b3e3e,#333737)] backdrop-blur flex items-center justify-center gap-x-1 sm:gap-x-1.5">
                  <span className="font-medium text-xs sm:text-sm md:text-base whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-green-20 to-blue-30">
                    더 알아보기
                  </span>
                  <ArrowDown className="size-4 sm:size-5 md:size-6 text-blue-30" />
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomeSection;