import React from "react";
import banner11 from "../../../public/assets/images/banner11.jpg";
import banner2 from "../../../public/assets/images/banner2.jpg";
import banner3 from "../../../public/assets/images/banner3.jpg";
import Header from "../../../public/assets/images/header2.jpg";
import GhTown from "../../../public/assets/images/ghTown.jpg";
import Exams from "../../../public/assets/images/exams2.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  return (
    <div className="relative  min-h-screen">
      <div className="carousel w-full h-full ">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full h-full">
          <div
            className="hero min-h-screen"
            style={{ backgroundImage: `url(${Header})` }}
          >
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="text-neutral-content text-center md:text-right px-10 md:px-0">
              <div className="max-w-md md:max-w-2xl md:justify-start md:text-right md:items-end md:left-[30%] md:relative px-10 md:px-0">
                <h1 className="mb-5 text-5xl font-bold leading-normal">
                  مرحبا بكم في كلية غبيش للعلوم و التكنولوجيا
                </h1>
                <p className="mb-5">
                  نقدم لكم بيئة تعليمية ملهمة تُعِدُّ قادة الغد من خلال برامج
                  أكاديمية متميزة وفرص بحثية مبتكرة
                </p>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide3"
              className="btn btn-circle bg-transparent md:btn md:btn-circle border-0 shadow-none"
            >
              <span className="text-transparent md:text-black"> ❮ </span>
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-transparent md:btn md:btn-circle border-0 shadow-none"
            >
              <span className="text-transparent md:text-black"> ❯ </span>
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full h-full">
          <div
            id="second-hero"
            className="hero min-h-screen"
            style={{ backgroundImage: `url(${GhTown})` }}
          >
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md md:max-w-2xl md:justify-start md:text-right md:items-end md:left-[30%] md:relative px-10 md:px-0">
                <h1 className="mb-5 text-5xl font-bold leading-normal">
                  مدينة غبيش: قلب الاقتصاد والتعليم
                </h1>
                <p className="mb-5">
                  مدينة تزدهر بالثورة الزراعية و الحيوانية و الثورة في التعليم
                  العالي
                </p>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide1"
              className="btn btn-circle bg-transparent md:btn md:btn-circle border-0 shadow-none"
            >
              <span className="text-transparent md:text-black"> ❮ </span>
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-transparent md:btn md:btn-circle border-0 shadow-none"
            >
              <span className="text-transparent md:text-black"> ❯ </span>
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full h-full">
          <div
            className="hero min-h-screen"
            style={{ backgroundImage: `url(${Exams})` }}
          >
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-base-100 text-center mx-8">
              <div className="max-w-md md:max-w-2xl md:justify-start md:text-right md:items-end md:left-[50%] md:relative px-10 md:px-0">
                <h1 className="mb-5 text-5xl font-bold leading-normal px-8">
                  نحو تميزٍ بلا حدود
                </h1>
                <div>
                  <p className="mb-5 px-8">
                    نلتزم بتوفير تجربة تعليمية شاملة تُنمّي المهارات وتُطلق
                    الإبداع لبناء مستقبل مشرق
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide2"
              className="btn btn-circle bg-transparent md:btn md:btn-circle border-0 shadow-none"
            >
              <span className="text-transparent md:text-black"> ❮ </span>
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-transparent md:btn md:btn-circle border-0 shadow-none"
            >
              <span className="text-transparent md:text-black"> ❯ </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
