import { cn } from "@/lib/utils";
import { Tool } from "@/types/skill";

type SkillIconProps = Tool & {
  active: boolean;
};

const SkillIcon = ({ icon: Icon, name, pointColor, active }: SkillIconProps) => {
  return <div className="flex flex-col items-center gap-y-2 w-[60px]">
    <div 
      title={name}
      className={cn(
        "group relative size-[60px] rounded-full flex items-center justify-center flex-col gap-y-2 overflow-hidden transition-all duration-300 ease-in-out",
        !active && "blur-xl"
      )}
    >
      <div  
        className={cn("size-full absolute transition-opacity duration-200 ease-in-out", (name === "TypeScript" || name === "JavaScript") ? "opacity-100" : "opacity-20")}
        style={{ backgroundColor: pointColor }}
      />
      <Icon className={cn("z-10 size-10")} />
    </div>
    <p className={cn("whitespace-nowrap transition-all duration-300 ease-in-out text-xs", !active && "blur-xl")}>
      {name}
    </p>
  </div>;
};

export default SkillIcon;