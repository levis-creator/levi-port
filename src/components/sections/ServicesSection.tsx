import { get_data } from "@/lib/get_data";
import Head from "../Head";
import ServiceCard from "../ServiceCard";
import { ContentType } from "contentful";

const ServicesSection = async () => {
  const data: ContentType[] = await get_data("services");
  return (
    <section id="services" className="px-8 py-8 md:px-8 lg:px-28 lg:pb-36 ">
      <Head title="My Services" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((service) => (
          <ServiceCard key={service.sys.id} data={service.fields as any} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
