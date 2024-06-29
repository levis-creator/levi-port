import { ServiceData } from "@/lib/types";
import Blob from "./ui/Blob";
import { FC } from "react";
import Image from "next/image";

interface ServiceCardProps {
  data: ServiceData;
}
const ServiceCard: FC<ServiceCardProps> = ({ data }) => {
  const image = "https://" + data?.icon.fields.file.url;
  return (
    <div className="shadow-md flex flex-col items-center rounded-lg pb-10">
      <div className="w-44 relative">
        <Blob />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center ">
          <Image
            src={image}
            alt={data.serviceName}
            height={0}
            width={0}
            className="w-14 h-14 text-primary-blue"
          />
        </div>
      </div>
      <h3 className="font-bold text-lg">{data.serviceName}</h3>
    </div>
  );
};

export default ServiceCard;
