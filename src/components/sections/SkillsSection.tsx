import Carousel from "../Carousel";
import Head from "../Head";

const SkillsSection = () => {
  return (
    <section className="px-8 py-8 md:px-8 lg:px-28" id="skills">
      <Head title="Skills" />
      <div>
        <Carousel />
      </div>
    </section>
  );
};

export default SkillsSection;
