import { ComponentType } from "react";

export interface Career {
  company: string;
  department: string;
  position: string;
  period: {
    start: string;
    end: string;
  };
  isCurrent: boolean;
  descriptions: string[];
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
}

