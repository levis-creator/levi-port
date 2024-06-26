"use client";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const SkillCard = () => {
  const percentage = 76;
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-8 py-8 mx-auto shadow-lg w-fit md:w-full rounded-xl">
      <div className="h-[12em] w-[12em]">
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
      <div className="inline-block py-3 mx-auto border-b-4 border-b-gray-300">
        <h4 className="text-xl font-bold">Figma</h4>
      </div>
    </div>
  );
};

export default SkillCard;
