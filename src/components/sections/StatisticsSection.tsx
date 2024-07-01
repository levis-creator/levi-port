import { statistics } from "@/lib/static_data";
import StatisticsCard from "../StatisticsCard";
import Button from "../ui/Button";

const StatisticsSection = () => {
  return (
    <section className="relative px-8 py-8 md:px-8 lg:px-28 b bg-primary-light-blue lg:pt-28 lg:pb-20">
      <div className=" lg:px-28 lg:absolute lg:-top-12 lg:left-0 lg:right-0">
        <div className="flex flex-col items-center mx-auto gap-y-5 gap-x-5 sm:justify-evenly lg:flex-row lg:items-center ">
          {statistics.map((data, i) => (
            <StatisticsCard key={i} data={data} />
          ))}
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
