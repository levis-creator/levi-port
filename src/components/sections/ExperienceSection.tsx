import ExperienceCard from "../ExperienceCard";
import Head from "../Head";

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
