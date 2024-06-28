import Head from "../Head";
import ServiceCard from "../ServiceCard";

const ServicesSection = () => {
  return (
    <section id="services" className="px-8 py-8 md:px-8 lg:px-28">
      <Head title="My Services" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </section>
  );
};

export default ServicesSection;
