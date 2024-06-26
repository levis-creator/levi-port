import Head from "../Head";
import PortfolioCard from "../ui/PortfolioCard";

const WorksSection = () => {
  return (
    <section id="work" className="px-8 py-8 md:px-8 lg:px-28 ">
      {" "}
      <Head title="Works" />
      <div
        className="grid sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-4 gap-4 lg:grid-flow-col
      "
      >
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </section>
  );
};

export default WorksSection;
