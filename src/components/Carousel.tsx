"use client";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ContentType } from "contentful";
import { FC } from "react";
import "swiper/css";
import "swiper/css/pagination";
import SkillCard from "./SkillCard";

interface CarouselProp {
  data: ContentType[];
}
const Carousel: FC<CarouselProp> = ({ data }) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 5000,
      }}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
    >
      {data.map((skill) => (
        <SwiperSlide key={skill.sys.id}>
          <SkillCard data={skill.fields as any} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
