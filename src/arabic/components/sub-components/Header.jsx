import CustomButton from "./CustomButton";
import React from "react";

const Header = ({ title }) => {
  return (
    <div
      className="hero absolute top-0 min-h-[50vh] w-full"
      style={{
        backgroundImage: "url(../../assets/images/banner11.jpg)",
      }}
      lang="ar"
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className=" text-neutral-content text-end flex flex-col justify-end items-center md:items-end w-full px-16">
        <div className="max-w-4xl md:max-w-2xl md:justify-end md:text-right md:items-end md:relative px-10 md:px-0">
          <CustomButton text="رجوع إلى الصفحة الرئيسية" link={"/"} />
          <h1 className="mb-5 text-xl md:text-4xl font-bold">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
