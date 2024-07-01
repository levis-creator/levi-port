import { ContentType } from "contentful";
import ExperienceCard from "../ExperienceCard";
import Head from "../Head";
import { get_data } from "@/lib/get_data";

const ExperienceSection = async () => {
  const data: ContentType[] = await get_data("experience");
  return (
    <section id="experience" className="px-8 py-8 md:px-8 lg:px-28 lg:pb-28">
      <Head title="Work Experience" />
      <div>
        {data.map((exp) => (
          <ExperienceCard key={exp.sys.id} data={exp.fields as any} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
