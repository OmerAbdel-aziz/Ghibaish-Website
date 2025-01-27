import React from "react";
import banner11 from "../../../public/assets/images/banner11.jpg";
import banner2 from "../../../public/assets/images/banner2.jpg";
import banner3 from "../../../public/assets/images/banner3.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  return (
    <>
      <div className="carousel w-full absolute top-0">
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${banner11})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="text-neutral-content text-center md:text-left md:justify-start md:items-start">
              <div className="max-w-md md:max-w-2xl md:justify-start md:text-right md:items-end md:left-[30%] md:relative px-10 md:px-0">
                <h1 className="mb-5 text-5xl font-bold leading-normal">
                  مرحبا بكم في كلية غبيش التقنية
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
              <span className="text-transparent md:text-black"> ❯</span>
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div
            id="second-hero"
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${banner3})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md md:max-w-2xl md:justify-start md:text-right md:items-end md:left-[30%] md:relative px-10 md:px-0">
                <h1 className="mb-5 text-5xl font-bold leading-normal">
                  اكتشف عالمًا من الفرص
                </h1>
                <p className="mb-5">
                  انضم إلى مجتمعنا الأكاديمي الحيوي واستفد من برامجنا المتنوعة
                  التي تلبي طموحاتك العلمية والمهنية.
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
              <span className="text-transparent md:text-black"> ❯</span>
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${banner2})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md md:max-w-2xl md:justify-start md:text-right md:items-end md:left-[30%] md:relative px-10 md:px-0">
                <h1 className="mb-5 text-5xl font-bold leading-normal">
                  نحو تميزٍ بلا حدود
                </h1>
                <p className="mb-5">
                  نلتزم بتوفير تجربة تعليمية شاملة تُنمّي المهارات وتُطلق
                  الإبداع لبناء مستقبل مشرق
                </p>
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
              <span className="text-transparent md:text-black"> ❯</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
