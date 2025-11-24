"use client";

import GitHubIcon from "@/assets/icons/github.svg";
import { Menu, menuList } from "@/types/menu";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MenuLink = ({ href, children, onClick, active }: { href: string, children: React.ReactNode, onClick: () => void, active: boolean }) => {
  return (
    <Link 
      href={href} 
      className={`group h-10 flex items-center justify-center px-6 rounded-full border border-transparent hover:border-white/20 hover:bg-white/10 transition-all duration-300 ease-in-out ${active ? "bg-white/10" : ""}`} 
      onClick={onClick}
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

  return (
    <header className="fixed top-10 left-[50px] right-[50px] z-50 w-[calc(100%-100px)] h-14 flex items-center justify-between">
      <Image
        src="/logos/logo_with_name.png"
        alt="logo"
        width={71}
        height={56}
        className="w-auto h-12 object-contain"
      />
      <nav className="h-14 flex items-center p-2 bg-[linear-gradient(150deg,rgba(255,255,255,0.03),rgba(255,255,255,0.07))] border border-white/10 backdrop-blur rounded-full">
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
      <a href="https://github.com/yunuchoiii" target="_blank" rel="noopener noreferrer">
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