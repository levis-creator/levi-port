"use client";
import { SkillData } from "@/lib/types";
import { FC } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface SkillProp {
  data: SkillData;
}
const SkillCard: FC<SkillProp> = ({ data }) => {
  const percentage = 76;
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-8 py-8 mx-auto shadow-lg w-fit md:w-full rounded-xl">
      <div className="h-[12em] w-[12em]">
        <CircularProgressbar
          value={data.percentage}
          text={`${data.percentage}%`}
          styles={buildStyles({
            pathColor: `${data.color}`,
            textColor: `${data.color}`,
          })}
        />
      </div>
      <div className="inline-block py-3 mx-auto border-b-4 border-b-gray-300">
        <h4 className="text-xl font-bold">{data.skill}</h4>
      </div>
    </div>
  );
};

export default SkillCard;
