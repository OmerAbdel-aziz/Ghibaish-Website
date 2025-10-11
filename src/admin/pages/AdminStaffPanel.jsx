import React from "react";
// import AddStaffForm from "./components/AddStaffForm"; // Assuming this is in your components folder
import StaffTable from "../components/StaffTable";
import NewStaffTable from "../components/NewStaffTable";

const AdminStaffPanel = () => {
  return (
    <div className="relative top-10 flex w-full flex-col gap-16">
      <div className="flex px-10 items-center justify-between">
        <a
          href="/admin/add-staff"
          className="inline-flex flex-row-reverse gap-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1E1E1E] rounded-lg hover:bg-[#637C65] focus:ring-4 focus:outline-none focus:ring-blue-300 md:inline-flex relative bottom-0"
        >
          إضافة عضو جديد
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
        </a>
        <h3 className="font-semibold text-2xl">
          {" "}
          إدارة أعضاء الهيئة الإدارية وهيئة التدريس
        </h3>
      </div>
      <StaffTable />
      <div className="mx-10 my-8">
        <hr className="border-t border-gray-200" />
      </div>
      <div className="px-10">
        <NewStaffTable />
      </div>
    </div>
  );
};

export default AdminStaffPanel;
