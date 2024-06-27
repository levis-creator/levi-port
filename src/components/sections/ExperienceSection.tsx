import React from "react";
import Head from "../Head";
import ExperienceCard from "../ExperienceCard";

const ExperienceSection = () => {
  return (
    <section className="px-8 py-8 md:px-8 lg:px-28 lg:pb-28">
      <Head title="Work Experience" />
      <div>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </section>
  );
};

export default ExperienceSection;
