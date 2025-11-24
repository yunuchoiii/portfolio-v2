"use client";

import InstagramIcon from "@/assets/icons/instagram.svg";
import KakaoTalkIcon from "@/assets/icons/kakaotalk.svg";
import IconButton from "@/components/common/Button/IconButton";
import { ArrowDown, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <section 
      id="home" 
      className="h-screen w-full bg-gradient-to-br from-[#393939] to-[#1D1E1E]"
    >
      <Image
        src="/images/background_lines.png"
        alt="background lines"
        width={1000}
        height={1000}
        className="absolute bottom-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-1/2 -translate-y-1/2 lg:left-[20%] lg:-translate-x-0 left-1/2 -translate-x-1/2 flex flex-col gap-y-10">
        <h1 className="text-[72px] font-extrabold italic font-poppins leading-none bg-clip-text text-transparent bg-gradient-to-br from-green-20 to-blue-40 whitespace-nowrap">
          Frontend<br/>
          Developer .
        </h1>
        <p className="text-lg leading-loose">
          사람의 시선과 흐름을 먼저 떠올리는 개발자입니다.<br/>
          개발자이기 이전에 한명의 소비자로서, 최선의 사용자 경험을 모색해왔습니다.<br/>
          제가 어떤 고민을 해왔는지, 이 곳에서 확인해보세요.
        </p>
        <ul className="flex items-center gap-x-5">
          <li>
            <a href="mailto:chltjdnjs529@gmail.com">
              <IconButton icon={<Mail className="size-9" />} />
            </a>
          </li>
          <li>
            <a href="https://open.kakao.com/o/sYldU2qg" target="_blank" rel="noopener noreferrer">
              <IconButton icon={<KakaoTalkIcon className="size-9" />} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/yunuchoiii" target="_blank" rel="noopener noreferrer">
              <IconButton icon={<InstagramIcon className="size-9" />} />
            </a>
          </li>
          <li>
            <Link href="#about" replace>
              <div className="group w-[140px] h-14 rounded-full bg-gradient-to-br from-green-20 to-blue-40 flex items-center justify-center p-0.5 shadow-[4px_4px_8px_rgba(0,0,0,0.15)] hover:shadow-[0px_0px_16px_rgba(30,214,184,0.3)] transition-all duration-300 ease-in-out">
                <div className="w-full h-full pl-1 rounded-full bg-[radial-gradient(circle_at_center,#3b3e3e,#333737)] backdrop-blur flex items-center justify-center gap-x-1.5">
                  <span className="font-medium whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-green-20 to-blue-30">
                    더 알아보기
                  </span>
                  <ArrowDown className="size-6 text-blue-30" />
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;