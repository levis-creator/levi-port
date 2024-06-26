"use client";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import SkillCard from "./SkillCard";
const Carousel = () => {
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
      <SwiperSlide>
        <SkillCard />
      </SwiperSlide>
      <SwiperSlide>
        <SkillCard />
      </SwiperSlide>
      <SwiperSlide>
        <SkillCard />
      </SwiperSlide>
      <SwiperSlide>
        <SkillCard />
      </SwiperSlide>
      <SwiperSlide>
        <SkillCard />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
