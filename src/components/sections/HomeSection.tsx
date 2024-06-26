import Image from "next/image";
import Button from "../ui/Button";

const HomeSection = () => {
  return (
    <section className="h-[calc(100vh_-_100px)] bg-primary-light-blue relative  lg:h-[calc(100vh_-_350px)]  overflow-hidden md:px-8 lg:px-28 xl:h-[calc(100vh_-_150px)]">
      <div className="relative flex flex-col items-center top-20 lg:flex-row lg:top-0 xl:items-start">
        <div className="space-y-5 text-center lg:flex-1 lg:text-left xl:relative xl:top-40 lg:space-y-8 ">
          <h4 className="text-lg font-semibold text-primary-blue xl:text-2xl ">
            Hello!
          </h4>
          <span className="text-3xl text-wrap xl:text-5xl">
            I&apos;m{" "}
            <h1 className="inline font-extrabold text">Levis Nyingi</h1>{" "}
          </span>
          <p className="text-2xl font-medium capitalize xl:text-4xl">
            A software engineer
          </p>

          <div className="inline-flex gap-3">
            <Button type="primary">Hire me</Button>
            <Button type="outlined">My work</Button>
          </div>
        </div>
        <div className="relative bottom-0 h-3/5 lg:flex-1">
          <Image
            src={"./levis_the_software_engineer.png"}
            alt="image of levis"
            width={0}
            height={0}
            className="w-auto h-full mx-auto"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};
export default HomeSection;
