import { StatisticData } from "@/lib/types";
import { FC } from "react";

interface StatisticsCardProps {
  data: StatisticData;
}
const StatisticsCard: FC<StatisticsCardProps> = ({ data }) => {
  return (
    <div className="p-10 text-center bg-white border-2 shadow-lg text-primary-blue w-52 border-primary-blue">
      <h3 className="text-2xl font-bold">
        {data.data}
        {data.percentage ? "%" : "+"}
      </h3>
      <p className="text-lg">{data.title}</p>
    </div>
  );
};

export default StatisticsCard;
