import AboutMeSection from "~/components/AboutMeSection";
import ContactSection from "~/components/ContactSection";
import HeaderSection from "~/components/HeaderSection";
import HeroSection from "~/components/HeroSection";
import ProjectsSection from "~/components/ProjectsSection";
import SkillsSection from "~/components/SkillsSection";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
