import AboutSection from "@/components/sections/AboutSection";
import HomeSection from "@/components/sections/HomeSection";
import SkillsSection from "@/components/sections/SkillsSection";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        {/* <WorksSection />
        <ExperienceSection />
        <ServicesSection />
        <StatisticsSection />
        <ContactSection />
        <SocialSection /> */}
      </Suspense>
    </main>
  );
}
