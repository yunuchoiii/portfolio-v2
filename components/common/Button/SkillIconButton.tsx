import { cn } from "@/lib/utils";
import { Tool } from "@/types/skill";

type SkillIconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & Tool & {
  active: boolean;
  size?: "base" | "sm";
};

const SkillIconButton = ({ icon: Icon, name, pointColor, active, size = "base", ...props }: SkillIconButtonProps) => {
  return <div className={cn("flex flex-col items-center gap-y-2", size === "sm" ? "w-12" : "w-[60px]")}>
    <button 
      title={name}
      aria-label={name} 
      className={cn(
        "group relative rounded-full flex items-center justify-center flex-col gap-y-2 overflow-hidden transition-all duration-300 ease-in-out",
        size === "sm" ? "size-12" : "size-[60px]",
        !active && "blur-xl"
      )}
      disabled={!active}
      {...props}
    >
      <div  
        className={cn("size-full absolute transition-opacity duration-200 ease-in-out", (name === "TypeScript" || name === "JavaScript") ? "opacity-100" : active ? "opacity-20 group-hover:opacity-30" : "opacity-20")}
        style={{ backgroundColor: pointColor }}
      />
      <Icon className={cn("z-10", size === "sm" ? "size-8" : "size-10")} />
    </button>
    <p className={cn("whitespace-nowrap transition-all duration-300 ease-in-out", size === "sm" ? "text-xs" : "text-[10px]", !active && "blur-xl")}>
      {name}
    </p>
  </div>;
};

export default SkillIconButton;