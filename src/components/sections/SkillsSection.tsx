import { get_data } from "@/lib/get_data";
import { AxiosResponse } from "axios";
import { ContentType } from "contentful";
import Carousel from "../Carousel";
import Head from "../Head";

const SkillsSection = async () => {
  const skillsData: AxiosResponse<ContentType[]> = await get_data("/skills");
  return (
    <section className="px-8 py-8 md:px-8 lg:px-28" id="skills">
      <Head title="Skills" />
      <div>
        <Carousel data={skillsData.data} />
      </div>
    </section>
  );
};

export default SkillsSection;
