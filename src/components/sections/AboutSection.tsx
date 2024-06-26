import Image from "next/image";
import Button from "../ui/Button";
import Head from "../Head";

const AboutSection = () => {
  return (
    <section id="about" className="px-8 py-8 md:px-8 lg:px-28 ">
      <Head title="About me" />
      <div className="flex flex-col gap-5 lg:flex-row-reverse">
        <div className="flex-1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim unde
            sit, tenetur quia officiis at soluta vitae pariatur praesentium
            nemo! Minus commodi maxime iusto corporis eligendi sequi, optio
            quaerat et. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Dolorem voluptate odio animi eos repudiandae cum neque nemo
            sed. Veniam necessitatibus cupiditate atque sint corporis eum culpa
            enim iusto non alias.
          </p>
          <div className="mt-8">
            <Button>Download Cv</Button>
          </div>
        </div>
        <div className="lg:relative lg:flex-1">
          <div className="mx-auto overflow-hidden shadow-2xl lg:-rotate-90 lg:h-[22em] lg:w-[25em] rounded-2xl sm:w-3/5 ">
            <Image
              src="/IMG-20221011-WA0011 (2).jpg"
              alt="image of levis nyingi"
              width={0}
              height={0}
              className="object-cover w-full h-full"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
