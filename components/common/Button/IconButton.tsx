"use client";

import { cn } from "@/lib/utils";

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ReactNode;
  className?: string;
};

const IconButton = ({ icon, className, onClick, ...props }: IconButtonProps) => {
  return (
    <button 
      className={cn("size-10 sm:size-11 md:size-12 lg:size-14 rounded-full bg-white/10 backdrop-blur flex items-center justify-center shadow-[4px_4px_8px_rgba(0,0,0,0.15),-4px_-4px_8px_rgba(0,0,0,0.15)_inset] transition-all duration-300 ease-in-out hover:bg-white/20 hover:scale-105 active:scale-95", className)}
      {...props}
    >
      {icon}
    </button>
  );
};

export default IconButton;