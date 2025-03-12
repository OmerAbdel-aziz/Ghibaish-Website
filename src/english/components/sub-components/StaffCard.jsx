import React from "react";

const StaffCard = ({ member }) => {
  const safeMember = member || { name: "Unknown", role: "N/A", image: Avatar };
  return (
    <div class=" bg-base-100 items-center justify-between  rounded-lg shadow flex flex-col md:flex-row-reverse w-auto">
      <div class="p-5">
        <h3 class="text-normal font-bold tracking-tight text-start">
          <p>{safeMember.name}</p>
        </h3>
        <p class="text-sm text-start">{safeMember.role}</p>
        {/* <p class="mt-3 mb-4 font-light text-end ">
      Bonnie drives the technical strategy of the flowbite
      platform and brand.
    </p> */}
      </div>
      <img
        className="rounded-lg sm:rounded-none sm:rounded-l-lg w-36 h-36 my-5 sm:my-0"
        src={safeMember.image}
        alt={`${safeMember.name} Avatar`}
      />
    </div>
  );
};

export default StaffCard;
