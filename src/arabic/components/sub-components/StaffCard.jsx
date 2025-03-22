import React from "react";
import Avatar from "../../../../public/assets/images/Avatar.webp";

const StaffCard = ({ member }) => {
  // If member is undefined, provide a fallback object
  const safeMember = member || { name: "Unknown", role: "N/A", image: Avatar };

  return (
    <div className="bg-base-100 items-center justify-between rounded-lg shadow flex flex-col md:flex-row w-auto">
      <div className="p-5">
        <h3 className="text-normal font-bold tracking-tight text-end">
          <p>{safeMember.name}</p>
        </h3>
        <p className="text-sm text-end">{safeMember.role}</p>
      </div>
      <img
        className="rounded-lg  w-36 h-36 my-5 sm:my-0"
        src={safeMember.image}
        alt={`${safeMember.name} Avatar`}
      />
    </div>
  );
};

export default StaffCard;
