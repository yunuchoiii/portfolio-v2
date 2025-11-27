"use client";

import SkillIconButton from "@/components/common/Button/SkillIconButton";
import Title from "@/components/common/Typography/Title";
import { SKILL_DATA } from "@/constant/skill";
import { cn } from "@/lib/utils";
import { SkillLevel } from "@/types/skill";
import { useState } from "react";

const TechnicalSkills = () => {
  const [selectedLevel, setSelectedLevel] = useState<SkillLevel | null>(null);

  const levelButtons = [
    {
      label: "Expert",
      value: SkillLevel.Expert,
    },
    {
      label: "Skilled",
      value: SkillLevel.Skilled,
    },
    {
      label: "Basic",
      value: SkillLevel.Basic,
    },
  ];

  const handleLevelButtonClick = (value: SkillLevel) => {
    if (selectedLevel === value) {
      setSelectedLevel(null);
    } else {
      setSelectedLevel(value);
    }
  };

  return <section className="flex flex-col gap-y-8">
    <Title>Technical Skills</Title>
    <div className="flex flex-col gap-y-5">
      <div className="flex gap-x-2.5">
        {levelButtons.map((button) => (
          <button 
            key={button.value} 
            onClick={() => handleLevelButtonClick(button.value)}
            className={cn(
              "group relative px-4 py-2.5 lg:px-5 lg:py-3 rounded-full transition-all duration-300 ease-in-out hover:ring-2 hover:ring-white/20 hover:scale-105 active:scale-95",
              selectedLevel === button.value 
                ? "text-black shadow-[0px_0px_16px_rgba(71,192,173,0.75)]" 
                : "text-white"
            )}
          >
            {/* 배경 레이어 - 활성화 상태 */}
            <div 
              className={cn(
                "absolute inset-0 rounded-full bg-gradient-to-br from-green-20 to-blue-40 transition-opacity duration-300 ease-in-out",
                selectedLevel === button.value ? "opacity-100" : "opacity-0"
              )}
            />
            
            {/* 배경 레이어 - 비활성화 상태 */}
            <div 
              className={cn(
                "absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),rgba(255,255,255,0.18))] transition-opacity duration-300 ease-in-out",
                selectedLevel === button.value ? "opacity-0" : "opacity-100"
              )}
            />
            
            {/* 텍스트 레이어 */}
            <span className="relative z-10 text-sm lg:text-base">{button.label}</span>
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-5">
        {SKILL_DATA.skills.map((skill) => (
          <SkillIconButton 
            key={skill.name} 
            active={selectedLevel ? selectedLevel === skill.level : true} 
            {...skill} 
          />
        ))}
      </div>
    </div>
  </section>;
};

export default TechnicalSkills;