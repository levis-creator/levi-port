import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HomeSection from "@/components/sections/HomeSection";
import SkillsSection from "@/components/sections/SkillsSection";
import SocialSection from "@/components/sections/SocialSection";
import StatisticsSection from "@/components/sections/StatisticsSection";
import WorksSection from "@/components/sections/WorksSection";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <WorksSection />
        {/* <ExperienceSection />
        <ServicesSection /> */}
        <StatisticsSection />
        <ContactSection />
        <SocialSection />
      </Suspense>
    </main>
  );
}
