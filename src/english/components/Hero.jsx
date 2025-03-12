import banner11 from "../../../public/assets/images/banner11.jpg";
import banner2 from "../../../public/assets/images/banner2.jpg";
import banner3 from "../../../public/assets/images/banner3.jpg";
import Header from "../../../public/assets/images/header2.jpg";
import GhTown from "../../../public/assets/images/ghTown.jpg";
import Exams from "../../../public/assets/images/exams2.jpg";
import React, { useEffect, useState } from "react";

const Hero = () => {
  return (
    <>
      <div className="carousel w-full absolute top-0">
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${Header})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="text-neutral-content text-center md:text-left md:justify-start md:items-start">
              <div className="max-w-md md:max-w-4xl md:justify-start md:text-left md:items-start md:right-[15%] md:relative px-10 md:px-0">
                <h1 className="mb-5 text-5xl font-bold">
                  Welcome to Ghibaish College of Science and Technology
                </h1>
                <p className="mb-5">
                  Shaping the future, one mind at a time. <br /> Discover a
                  world of knowledge, innovation, and opportunity at our vibrant
                  campus.
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
              backgroundImage: `url(${GhTown})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md md:max-w-4xl md:justify-start md:text-left md:items-start md:right-[15%] md:relative px-10 md:px-0">
                <h1 className="mb-5 text-5xl font-bold">
                  Ghibaish City: Heart of Economy and Education
                </h1>
                <p className="mb-5">
                  Empowering students with education, skills, and values for a
                  brighter tomorrow. <br />
                  Explore our diverse programs and state-of-the-art facilities
                  designed to help you succeed.
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
              backgroundImage: `url(${Exams})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md md:max-w-2xl md:justify-start md:text-left md:items-start md:right-[30%] md:relative px-10 md:px-0">
                <h1 className="mb-5 text-5xl font-bold">
                  A Home for Learning, Growth, and Success
                </h1>
                <p className="mb-5">
                  Where passion meets purpose.
                  <br /> Join our community of scholars and achievers to unlock
                  your full potential.
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
