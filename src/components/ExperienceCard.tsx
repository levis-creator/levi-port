import { BriefcaseBusiness } from "lucide-react";

const ExperienceCard = () => {
  return (
    <div className="relative px-12 py-5 pl-16 space-y-2 border-l-2 last:border-l-0">
      <div className="absolute top-0 p-4 bg-red-500 rounded-full -left-8 w-fit">
        <BriefcaseBusiness className="h-7 w-7 stroke-[1.5px] text-white" />
      </div>
      <time className="text-sm font-medium text-gray-600">February 2024</time>
      <h2 className="text-xl font-bold">Ecommerce website design</h2>
      <h4 className="text-sm font-medium text-gray-600">New York, USA</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quaerat
        tempora adipisci natus reprehenderit accusamus molestias! Impedit
        blanditiis ab asperiores veniam, repellendus doloribus obcaecati tempore
        aliquid iusto minima, quo adipisci!
      </p>
    </div>
  );
};

export default ExperienceCard;
