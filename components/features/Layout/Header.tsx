"use client";

import GitHubIcon from "@/assets/icons/github.svg";
import { GITHUB_LINK } from "@/constant/link";
import { moveToSection } from "@/lib/navigation";
import { Menu, menuList } from "@/types/menu";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const MenuLink = ({ href, children, onClick, active }: { href: string, children: React.ReactNode, onClick: () => void, active: boolean }) => {

  return (
    <Link 
      href={href} 
      className={`group h-10 flex items-center justify-center px-6 rounded-full border border-transparent hover:border-white/20 hover:bg-white/10 transition-all duration-300 ease-in-out ${active ? "bg-white/10" : ""}`} 
      onClick={(e) => moveToSection(e, href, onClick)}
      replace
    >
      <span className="relative inline-block whitespace-nowrap">
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
  const isProgrammaticScrollRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // 스크롤 위치 기반으로 활성 섹션 결정
    const updateActiveSection = () => {
      // 프로그래밍 방식 스크롤 중일 때는 업데이트 무시
      if (isProgrammaticScrollRef.current) {
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight * 0.3; // 뷰포트 상단 30% 지점
      let activeSection: Menu | null = null;

      // 모든 섹션을 확인하여 현재 스크롤 위치에 가장 적합한 섹션 찾기
      for (let i = menuList.length - 1; i >= 0; i--) {
        const menu = menuList[i];
        const sectionId = menu.href.replace('#', '');
        const sectionElement = document.getElementById(sectionId);
        
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionBottom = sectionTop + sectionElement.offsetHeight;
          
          // 스크롤 위치가 섹션 범위 내에 있거나, 섹션을 지나갔지만 다음 섹션에 아직 도달하지 않은 경우
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            activeSection = menu.label as Menu;
            break;
          }
          // 스크롤 위치가 섹션보다 위에 있지만, 이전 섹션들을 모두 지나간 경우 (첫 번째 섹션)
          if (i === 0 && scrollPosition < sectionTop) {
            activeSection = menu.label as Menu;
            break;
          }
        }
      }

      // 위에서 찾지 못한 경우, 가장 가까운 섹션 찾기
      if (!activeSection) {
        let closestSection: Menu | null = null;
        let minDistance = Infinity;

        menuList.forEach((menu) => {
          const sectionId = menu.href.replace('#', '');
          const sectionElement = document.getElementById(sectionId);
          if (sectionElement) {
            const sectionTop = sectionElement.offsetTop;
            const distance = Math.abs(sectionTop - scrollPosition);
            
            if (distance < minDistance) {
              minDistance = distance;
              closestSection = menu.label as Menu;
            }
          }
        });

        if (closestSection) {
          activeSection = closestSection;
        }
      }

      if (activeSection) {
        setActiveSection(activeSection);
      }
    };

    // 초기 활성 섹션 설정
    updateActiveSection();

    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      updateActiveSection();
      
      scrollTimeoutRef.current = setTimeout(() => {
        // 스크롤이 완료되면 observer 다시 활성화
        isProgrammaticScrollRef.current = false;
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // 리사이즈 이벤트도 처리 (레이아웃 변경 시)
    window.addEventListener('resize', updateActiveSection, { passive: true });

    // 컴포넌트 언마운트 시 정리
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateActiveSection);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const handleMenuClick = (menu: Menu) => {
    // 버튼 클릭 시 즉시 해당 섹션 활성화
    setActiveSection(menu);
    
    // 프로그래밍 방식 스크롤 시작
    isProgrammaticScrollRef.current = true;
    
    // 스크롤 완료 후 observer 다시 활성화
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    scrollTimeoutRef.current = setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 1000); // 스크롤 애니메이션 시간 고려
  };

  return (<>
    {/* 데스크탑 버전 */}
    <header className="fixed top-6 left-[50px] right-[50px] z-50 w-[calc(100%-100px)] h-[var(--navigation-height)] hidden md:flex items-center justify-between">
      <Image
        src="/logos/logo_with_name.png"
        alt="logo"
        width={71}
        height={56}
        className="w-auto h-12 object-contain"
      />
      <nav className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-14 flex items-center p-2 bg-[linear-gradient(150deg,rgba(0,0,0,0.2),rgba(0,0,0,0.3))] border border-white/10 backdrop-blur rounded-full shadow-[4px_4px_32px_rgba(0,0,0,0.2)]">
        <ul className="flex items-center gap-x-2">
          {menuList.map((menu) => (
            <li key={menu.label}>
              <MenuLink 
                href={menu.href} 
                active={activeSection === menu.label as Menu}
                onClick={() => handleMenuClick(menu.label as Menu)}
              >
                {menu.label}
              </MenuLink>
            </li>
          ))}
        </ul>
      </nav>
      <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
        <div className="group w-14 h-14 p-2 hover:bg-white/5 rounded-full flex items-center justify-center border border-transparent hover:border-white/10 backdrop-blur transition-all duration-300 ease-in-out hover:w-[165px] hover:justify-between hover:gap-x-4">
          <GitHubIcon className="flex-shrink-0 size-10" />
          <div className="flex items-center gap-x-2 group-hover:opacity-100 group-hover:w-[85px] opacity-0 w-0 overflow-hidden transition-all duration-300 ease-in-out">
            <span className="font-medium whitespace-nowrap">GitHub</span>
            <ArrowRight className="size-6 flex-shrink-0" />
          </div>
        </div>
      </a>
    </header>

    {/* 모바일 버전 - 상단 로고 */}
    <header className="fixed top-4 left-5 right-5 z-50 w-[calc(100%-48px)] h-[var(--navigation-height)] flex items-center justify-between md:hidden">
      <Image
        src="/logos/logo_with_name.png"
        alt="logo"
        width={71}
        height={56}
        className="w-auto h-8 object-contain"
      />
    </header>

    {/* 모바일 버전 - 하단 네비게이션 */}
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
      <div className="w-fit h-12 flex items-center p-1 bg-[linear-gradient(150deg,rgba(0,0,0,0.3),rgba(0,0,0,0.4))] border border-white/10 backdrop-blur-xl rounded-full shadow-[4px_4px_32px_rgba(0,0,0,0.3)]">
        <ul className="flex items-center justify-center w-full gap-x-1">
          {menuList.map((menu) => {
            const isActive = activeSection === menu.label as Menu;
            const Icon = menu.icon;
            return (
              <li key={menu.label} className="flex-none">
                <Link 
                  href={menu.href} 
                  className={`group h-10 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out overflow-hidden ${
                    isActive 
                      ? "bg-gradient-to-br from-green-20/20 to-blue-40/20 border border-green-20/50 shadow-[0px_0px_16px_rgba(44,245,153,0.3)] w-28" 
                      : "w-10 border border-transparent active:bg-white/10"
                  }`}
                  onClick={(e) => {
                    moveToSection(e, menu.href, () => handleMenuClick(menu.label as Menu));
                  }}
                  replace
                >
                  <div className="relative w-full">
                    <Icon className={`size-5 flex-shrink-0 transition-colors duration-300 absolute top-1/2 -translate-y-1/2 ${
                      isActive 
                        ? "left-2.5 text-white" 
                        : "left-1/2 -translate-x-1/2 text-white/60 group-active:text-white/80 group-active:scale-90"
                    }`} />
                    <span className={`text-sm font-medium whitespace-nowrap transition-all duration-300 ease-in-out absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full pl-2 text-center ${
                      isActive 
                        ? "opacity-100 max-w-[80px] ml-2" 
                        : "opacity-0 max-w-0"
                    } overflow-hidden`}>
                      {menu.label}
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  </>);
};

export default Header;