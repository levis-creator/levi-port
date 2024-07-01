import { get_data } from "@/lib/get_data";
import { ContentType } from "contentful";
import Head from "../Head";
import PortfolioCard from "../ui/PortfolioCard";

const WorksSection = async () => {
  const works: ContentType[] = await get_data("projects");
  return (
    <section id="projects" className="px-8 py-8 md:px-8 lg:px-28 ">
      {" "}
      <Head title="Works" />
      <div
        className="grid sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-4 gap-4 lg:grid-flow-col
      "
      >
        {works.map((data) => (
          <PortfolioCard key={data.sys.id} data={data.fields as any} />
        ))}
      </div>
    </section>
  );
};

export default WorksSection;
