import { get_data } from "@/lib/get_data";
import { SocialLink } from "@/lib/types";
import { ContentType } from "contentful";
import Image from "next/image";
import Link from "next/link";

const SocialSection = async () => {
  const data: ContentType[] = await get_data("socials");

  return (
    <section id="contact" className="px-8 md:px-8 py-28 bg-slate-100 ">
      <div className="flex flex-col text-center gap-14">
        <h2 className="text-3xl font-black">
          Do you have any projects? Let&apos;s talk
        </h2>
        <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 ">
          {data.map((link) => (
            <SocialIcon key={link.sys.id} data={link.fields as any} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SocialSection;
const SocialIcon = ({ data }: { data?: SocialLink }) => {
  const image = "https://" + data?.icons.fields.file.url;

  return (
    <li>
      <Link
        target="_blank"
        href={data?.link || ""}
        className="flex flex-col items-center justify-center gap-2 sm:flex-row"
      >
        <h2 className="text-xl font-black hover:underline hover:underline-offset-4 ">
          {data?.title}
        </h2>
        <div className="p-5 text-xl text-white rounded-full bg-primary-blue w-fit">
          <Image
            src={image}
            alt={data?.title || ""}
            height={0}
            width={0}
            className="w-10 h-10"
          />
        </div>
      </Link>
    </li>
  );
};
