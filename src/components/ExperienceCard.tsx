import { ExperienceData } from "@/lib/types";
import { BriefcaseBusiness } from "lucide-react";
import randomColor from "randomcolor";
import { FC } from "react";

interface ExperienceCardProps {
  data: ExperienceData;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ data }) => {
  const color = randomColor({
    luminosity: "bright",
  });

  return (
    <div className="relative px-12 py-5 pl-16 space-y-2 border-l-2 last:border-l-0">
      <div
        style={{
          backgroundColor: `${color}`,
        }}
        className={`absolute top-0 p-4 rounded-full -left-8 w-fit`}
      >
        <BriefcaseBusiness className="h-7 w-7 stroke-[1.5px] text-white" />
      </div>
      <time className="text-sm font-medium text-gray-600">{data.period}</time>
      <h2 className="text-xl font-bold">{data.companyName}</h2>
      <h4 className="text-sm font-medium text-gray-600">{data.city}</h4>
      <p>{data.description}</p>
    </div>
  );
};

export default ExperienceCard;
