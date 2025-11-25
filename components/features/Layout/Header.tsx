"use client";

import GitHubIcon from "@/assets/icons/github.svg";
import { GITHUB_LINK } from "@/constant/link";
import { Menu, menuList } from "@/types/menu";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const MenuLink = ({ href, children, onClick, active }: { href: string, children: React.ReactNode, onClick: () => void, active: boolean }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // href에서 id 추출 (# 제거)
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    onClick();
  };

  return (
    <Link 
      href={href} 
      className={`group h-10 flex items-center justify-center px-6 rounded-full border border-transparent hover:border-white/20 hover:bg-white/10 transition-all duration-300 ease-in-out ${active ? "bg-white/10" : ""}`} 
      onClick={handleClick}
      replace
    >
      <span className="relative inline-block">
        {/* 기본 텍스트 (흰색) */}
        <span className={`bg-gradient-to-r from-white/80 to-white/80 bg-clip-text text-transparent ${active ? "text-transparent" : ""}`}>
          {children}
        </span>
        {/* 그라디언트 텍스트 (호버 시, active 시 나타남) */}
        <span className={`absolute inset-0 bg-gradient-to-r from-green-20 to-blue-40 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out ${active ? "opacity-100" : ""}`}>
          {children}
        </span>
      </span>
    </Link>
  );
};

const Header = () => {
  const [activeSection, setActiveSection] = useState<Menu | null>(null);

  useEffect(() => {
    // 모든 섹션 요소를 관찰하기 위한 Intersection Observer 설정
    const observerOptions = {
      root: null, // 뷰포트를 기준으로
      rootMargin: '-20% 0px -70% 0px', // 상단 20% 지점부터 하단 70% 지점까지를 활성화 영역으로 설정
      threshold: 0, // 요소가 조금이라도 보이면 감지
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // 현재 뷰포트에 보이는 섹션들 중에서 가장 많이 보이는 섹션 찾기
      let maxVisibleRatio = 0;
      let mostVisibleSection: Menu | null = null;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const visibleRatio = entry.intersectionRatio;
          if (visibleRatio > maxVisibleRatio) {
            maxVisibleRatio = visibleRatio;
            const sectionId = entry.target.id;
            // menuList에서 해당 id와 일치하는 메뉴 찾기
            const matchedMenu = menuList.find(
              (menu) => menu.href.replace('#', '') === sectionId
            );
            if (matchedMenu) {
              mostVisibleSection = matchedMenu.label as Menu;
            }
          }
        }
      });

      // 가장 많이 보이는 섹션이 있으면 활성화
      if (mostVisibleSection) {
        setActiveSection(mostVisibleSection);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // 모든 섹션 요소 관찰 시작
    menuList.forEach((menu) => {
      const sectionId = menu.href.replace('#', '');
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    // 컴포넌트 언마운트 시 observer 정리
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed top-10 left-[50px] right-[50px] z-50 w-[calc(100%-100px)] h-[var(--navigation-height)] flex items-center justify-between">
      <Image
        src="/logos/logo_with_name.png"
        alt="logo"
        width={71}
        height={56}
        className="w-auto h-12 object-contain"
      />
      <nav className="h-14 flex items-center p-2 bg-[linear-gradient(150deg,rgba(255,255,255,0.03),rgba(255,255,255,0.07))] border border-white/10 backdrop-blur rounded-full shadow-[4px_4px_32px_rgba(0,0,0,0.1)]">
          <ul className="flex items-center gap-x-2">
              {menuList.map((menu) => (
                <li key={menu.label}>
                  <MenuLink 
                    href={menu.href} 
                    active={activeSection === menu.label as Menu}
                    onClick={() => setActiveSection(menu.label as Menu)}
                  >
                    {menu.label}
                  </MenuLink>
                </li>
              ))}
          </ul>
      </nav>
      <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
        <div className="group w-14 h-14 p-2 hover:bg-white/5 rounded-full flex items-center justify-center border border-transparent hover:border-white/10 backdrop-blur transition-all duration-300 ease-in-out hover:w-[165px] hover:justify-between hover:gap-x-4">
          <GitHubIcon className="flex-shrink-0" />
          <div className="flex items-center gap-x-2 group-hover:opacity-100 group-hover:w-[85px] opacity-0 w-0 overflow-hidden transition-all duration-300 ease-in-out">
            <span className="font-medium whitespace-nowrap">GitHub</span>
            <ArrowRight className="size-6 flex-shrink-0" />
          </div>
        </div>
      </a>
    </header>
  );
};

export default Header;