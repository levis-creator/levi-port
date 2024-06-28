import { get_data } from "@/lib/get_data";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Link from "next/link";
import Head from "../Head";
import Button from "../ui/Button";
interface AboutData {
  about: string;
  description: any;
  cv: string;
}
const AboutSection = async () => {
  const about: AboutData = await get_data("/about");
  return (
    <section id="about" className="px-8 py-8 md:px-8 lg:px-28 ">
      <Head title="About me" />
      <div className="flex flex-col gap-5 lg:flex-row-reverse">
        <div className="flex-1 leading-relaxed">
          {documentToReactComponents(about.description)}
          <div className="mt-8">
            <Link target="_blank" href={about.cv}>
              <Button>Download Cv</Button>
            </Link>
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
