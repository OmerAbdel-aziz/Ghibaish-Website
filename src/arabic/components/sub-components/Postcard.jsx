import React from "react";
import banner2 from "../../../../public/assets/images/banner2.jpg";
const Postcard = ({ id, title, content, imageUrl }) => {
  return (
    <div
      className="flex flex-col h-full bg-white border border-gray-200 rounded-lg shadow-md"
      lang="ar"
    >
      <img
        className="rounded-t-lg w-full h-48 object-cover"
        src={
          // imageUrl
          //   ? `${imageUrl}?cache=${Date.now()}`
          //   :
          "../../../../public/assets/images/banner2.jpg"
        }
        alt={title}
        // onError={(e) => {
        //   e.target.src = "../../../../public/assets/images/banner2.jpg";
        //   console.error("Failed to load image:", imageUrl);
        // }}
      />
      <div className="p-5 flex-1 flex flex-col">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-end">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 text-end flex-1">
          {content.length > 150 ? content.substring(0, 150) + "..." : content}
        </p>
        <div className="mt-4 flex justify-end">
          <a
            href={`/post/${id}`}
            className="inline-flex gap-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1E1E1E] rounded-lg hover:bg-[#637C65] focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <svg
              className="rotate-180 w-3.5 h-3.5 ms-2"
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
            اكتشف المزيد
          </a>
        </div>
      </div>
    </div>
  );
};

export default Postcard;
