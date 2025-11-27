"use client";

import Career from "./Career";
import Introduction from "./Introduction";

const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="w-full flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-[150px] px-4 sm:px-6 md:px-8"
    >
      <div className="flex flex-col items-center justify-center gap-y-12 sm:gap-y-16 md:gap-y-20 w-full max-w-7xl">
        <Introduction />
        <Career />
      </div>
    </section>
  );
};

export default AboutSection;