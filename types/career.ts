import { ComponentType } from "react";

export interface Career {
  kor_name: string;
  eng_name: string;
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

