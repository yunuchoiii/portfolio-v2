"use client";

import InstagramIcon from "@/assets/icons/instagram.svg";
import KakaoTalkIcon from "@/assets/icons/kakaotalk.svg";
import IconButton from "@/components/common/Button/IconButton";
import { EMAIL_LINK, INSTAGRAM_LINK, KAKAO_LINK } from "@/constant/link";
import { moveToSection } from "@/lib/navigation";
import { ArrowDown, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomeSection = () => {
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
        className="absolute bottom-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 lg:left-[20%] lg:translate-x-0 px-4 sm:px-6 md:px-8 flex flex-col gap-y-6 sm:gap-y-8 md:gap-y-10 w-full max-w-[90%] sm:max-w-[85%] md:max-w-none">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold italic font-poppins leading-none tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-green-20 to-blue-40 whitespace-nowrap">
          Frontend<br/>
          Developer .
        </h1>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose">
          사람의 시선과 흐름을 먼저 떠올리는 개발자입니다.<br/>
          개발자이기 이전에 한명의 소비자로서, 최선의 사용자 경험을 모색해왔습니다.<br/>
          제가 어떤 고민을 해왔는지, 이 곳에서 확인해보세요.
        </p>
        <ul className="flex items-center gap-x-3 sm:gap-x-4 md:gap-x-5 flex-wrap gap-y-3">
          <li>
            <a href={EMAIL_LINK} target="_blank" rel="noopener noreferrer">
              <IconButton icon={<Mail className="size-6 sm:size-7 md:size-8 lg:size-9" />} />
            </a>
          </li>
          <li>
            <a href={KAKAO_LINK} target="_blank" rel="noopener noreferrer">
              <IconButton icon={<KakaoTalkIcon className="size-6 sm:size-7 md:size-8 lg:size-9" />} />
            </a>
          </li>
          <li>
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
              <IconButton icon={<InstagramIcon className="size-6 sm:size-7 md:size-8 lg:size-9" />} />
            </a>
          </li>
          <li>
            <Link 
              href="#about" 
              replace 
              onClick={(e) => moveToSection(e, "#about", () => {})}
            >
              <div className="group w-[120px] sm:w-[130px] md:w-[140px] h-10 sm:h-11 md:h-12 lg:h-14 rounded-full bg-gradient-to-br from-green-20 to-blue-40 flex items-center justify-center p-0.5 shadow-[4px_4px_8px_rgba(0,0,0,0.15)] hover:shadow-[0px_0px_24px_rgba(30,214,184,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out">
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