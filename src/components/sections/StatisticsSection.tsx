import StatisticsCard from "../StatisticsCard";
import Button from "../ui/Button";

const StatisticsSection = () => {
  return (
    <section className="relative px-8 py-8 md:px-8 lg:px-28 b bg-primary-light-blue lg:pt-28 lg:pb-20">
      <div className=" lg:px-28 lg:absolute lg:-top-12 lg:left-0 lg:right-0">
        <div className="grid items-center grid-cols-1 mx-auto gap-y-5 gap-x-5 justify-items-center sm:grid-cols-2 lg:grid-cols-4 ">
          <StatisticsCard />
          <StatisticsCard />
          <StatisticsCard />
          <StatisticsCard />
        </div>
      </div>
      <div className="mt-6 space-y-3 text-center">
        <h2 className="text-3xl font-black">I am available for work</h2>
        <Button>Let&apos;s talk</Button>
      </div>
    </section>
  );
};

export default StatisticsSection;
