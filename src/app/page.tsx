import AboutSection from "@/components/sections/AboutSection";
import HomeSection from "@/components/sections/HomeSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      {/* <WorksSection />
      <ServicesSection />
      <ExperienceSection />
      <StatisticsSection />
      <ContactSection />
      <SocialSection /> */}
    </main>
  );
}
