import AboutSection from "@/components/sections/AboutSection";
import HomeSection from "@/components/sections/HomeSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SkillsSection from "@/components/sections/SkillsSection";
import WorksSection from "@/components/sections/WorksSection";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <WorksSection />
      <ServicesSection />
      {/* <ExperienceSection />
      <StatisticsSection />
      <ContactSection />
      <SocialSection /> */}
    </main>
  );
}
