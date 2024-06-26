import AboutSection from "@/components/sections/AboutSection";
import HomeSection from "@/components/sections/HomeSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import WorksSection from "@/components/sections/WorksSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <WorksSection />
      <ServicesSection />
      <ExperienceSection />
    </main>
  );
}
