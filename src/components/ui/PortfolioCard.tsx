"use client";
import { ProjectData } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
interface PortfolioCardProps {
  data?: ProjectData;
}

const PortfolioCard: FC<PortfolioCardProps> = ({ data }) => {
  const image = "https://" + data?.projectImage.fields.file.url;
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(true);
  };
  const handleOut = () => {
    setIsHovered(false);
  };
  return (
    <div
      className="w-3/4 h-60 mx-auto rounded-xl sm:w-full
      md:first:row-span-2 md:first:h-full lg:first:col-span-2
      relative overflow-hidden
 "
      onMouseOver={handleHover}
      onMouseOut={handleOut}
    >
      {isHovered && (
        <div className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-black hover:flex justify-center items-center opacity-85">
          <Link
            className="text-white hover:underline hover:underline-offset-8 opacity-100"
            href={data.link}
          >
            {data.title}
          </Link>
        </div>
      )}
      <Image
        src={image}
        alt={data?.title || ""}
        width={0}
        height={0}
        className="w-full h-full object-cover"
        unoptimized
      />
    </div>
  );
};

export default PortfolioCard;
