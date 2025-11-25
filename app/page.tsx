import AboutSection from "@/components/features/About/AboutSection";
import ContactSection from "@/components/features/Contact/ContactSection";
import HomeSection from "@/components/features/Home/HomeSection";
import ProjectSection from "@/components/features/Projects/ProjectSection";
import SkillsSection from "@/components/features/Skills/SkillsSection";

export default function Main() {
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
