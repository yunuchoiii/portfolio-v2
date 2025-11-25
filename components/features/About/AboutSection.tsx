"use client";

import Career from "./Career";
import Introduction from "./Introduction";

const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="w-full flex items-center justify-center py-[150px]"
    >
      <div className="flex flex-col items-center justify-center gap-y-20">
        <Introduction />
        <Career />
      </div>
    </section>
  );
};

export default AboutSection;