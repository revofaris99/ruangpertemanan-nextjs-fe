"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const SkillsPortofolio = () => {
  return (
    <div className="flex flex-col gap-20 max-w-[80%] text-center items-center z-[20]">
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-semibold text-white text-[50px] border-b-4 border-cyan-400">
          Skills{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-red-500">
            {" "}
            &{" "}
          </span>
          Technologies
        </h1>
        <p className="text-gray-400 text-[20px]">
          Using the latest tech this world has to offer
        </p>
      </div>
      <Swiper
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
        modules={[Autoplay]}
        className="max-w-[80%]"
      >
        {SkillData.map((skill, index) => (
          <SwiperSlide key={index}>
            <Image
              src={skill.Image}
              alt={skill.name}
              width={skill.width}
              height={skill.height}
              className="p-2 shadow-md hover:shadow-[#040c16] hover:scale-110 duration-500 bg-transparant rounded-md overflow-hidden shadow-blue-400"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        speed={5000}
        modules={[Autoplay]}
        className="max-w-[80%]"
      >
        {SkillData.map((skill, index) => (
          <SwiperSlide key={index}>
            <Image
              src={skill.Image}
              alt={skill.name}
              width={skill.width}
              height={skill.height}
              className="p-2 shadow-md hover:shadow-[#040c16] hover:scale-110 duration-500 bg-transparant rounded-md overflow-hidden shadow-blue-400"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SkillsPortofolio;
