import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HomeSection from "@/components/sections/HomeSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SkillsSection from "@/components/sections/SkillsSection";
import SocialSection from "@/components/sections/SocialSection";
import StatisticsSection from "@/components/sections/StatisticsSection";
import WorksSection from "@/components/sections/WorksSection";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <WorksSection />
      <ServicesSection />
      <ExperienceSection />
      <StatisticsSection />
      <ContactSection />
      <SocialSection />
    </main>
  );
}
