import React from "react";

const EnglishHeader = ({ title }) => {
  return (
    <div
      className="hero absolute top-0 min-h-[50vh] w-full "
      style={{
        backgroundImage: "url(../../assets/images/header2.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className=" text-neutral-content text-start flex flex-col justify-start items-center md:items-start w-full px-16">
        <div className="max-w-md md:max-w-2xl md:justify-start md:text-left md:items-start   md:relative px-10 md:px-0">
          <div className="py-8">
            <a
              href="/english"
              class="hidden md:inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1E1E1E] rounded-lg hover:bg-[#637C65] focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              <svg
                class="rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
              <span className="ml-2"> Back to Home Page </span>
            </a>
          </div>
          <h1 className="mb-5 text-5xl font-bold ">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default EnglishHeader;
