import { cn } from "@/lib/utils";
import { Tool } from "@/types/skill";

type SkillIconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & Tool & {
  active: boolean;
};

const SkillIconButton = ({ icon: Icon, name, pointColor, active, ...props }: SkillIconButtonProps) => {
  return <div className="flex flex-col items-center gap-y-2 w-[60px]">
    <button 
      title={name}
      aria-label={name} 
      className={cn(
        "group relative size-[60px] rounded-full flex items-center justify-center flex-col gap-y-2 overflow-hidden transition-all duration-300 ease-in-out",
        !active && "blur-xl"
      )}
      disabled={!active}
      {...props}
    >
      <div  
        className={cn("size-full absolute transition-opacity duration-200 ease-in-out", (name === "TypeScript" || name === "JavaScript") ? "opacity-100" : active ? "opacity-20 group-hover:opacity-30" : "opacity-20")}
        style={{ backgroundColor: pointColor }}
      />
      <Icon className="size-10 z-10" />
    </button>
    <p className={cn("text-xs whitespace-nowrap transition-all duration-300 ease-in-out", !active && "blur-xl")}>
      {name}
    </p>
  </div>;
};

export default SkillIconButton;