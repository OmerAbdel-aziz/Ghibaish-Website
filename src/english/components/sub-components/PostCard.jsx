import React from "react";
import banner2 from "../../../../public/assets/images/banner2.jpg";

const Postcard = ({ id, title, content, imageUrl }) => {
  return (
    <div class="flex flex-col h-full bg-white border border-gray-200 rounded-lg shadow-md ">
      <a href="#">
        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src={
            // imageUrl
            //   ? `${imageUrl}?cache=${Date.now()}`
            "../../../../public/assets/images/banner2.jpg"
          }
          alt={title}
          // onError={(e) => {
          //   e.target.src = "../../../../public/assets/images/banner2.jpg";
          //   console.error("Failed to load image:", imageUrl);
          // }}
        />
      </a>
      <div class=" p-5 flex-1 flex flex-col">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-start">
            {title}
          </h5>
        </a>
        <div class="flex items-center justify-between mt-2 overflow-hidden">
          <p class="mb-3 font-normal text-gray-700   flex-1 text-start">
            {content}
          </p>
        </div>
        <div className="mt-4">
          {" "}
          {/* Container for the button */}
          <a
            href={`/english/post/${id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1E1E1E] rounded-lg hover:bg-[#637C65] focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Learn More
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Postcard;
