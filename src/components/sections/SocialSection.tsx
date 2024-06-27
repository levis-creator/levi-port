import { Linkedin } from "lucide-react";

const SocialSection = () => {
  return (
    <section className="px-8 md:px-8 py-28 bg-slate-100 ">
      <div className="flex flex-col text-center gap-14">
        <h2 className="text-3xl font-black">
          Do you have any projects? Let&apos;s talk
        </h2>
        <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 ">
          <SocialIcon />
          <SocialIcon />
          <SocialIcon />
        </ul>
      </div>
    </section>
  );
};

export default SocialSection;
const SocialIcon = () => {
  return (
    <li className="flex flex-col items-center justify-center gap-2 sm:flex-row">
      <h2 className="text-xl font-black ">LinkedIn</h2>
      <div className="p-5 text-xl text-white rounded-full bg-primary-blue w-fit">
        <Linkedin size={30} />
      </div>
    </li>
  );
};
