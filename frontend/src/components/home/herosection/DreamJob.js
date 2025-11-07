import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";

export default function DreamJob() {
  const roles = ["Full-time", "Remote", "Product"];

  return (
    <div
      className="h-[250px] w-[200px] font-para ml-0 sm:ml-20 bg-white shadow-xl hover:shadow-2xl
    transition duration-300 rounded-lg relative -mb-10 flex-shrink-0"
    >
      <IoCheckmarkCircle
        className="absolute -top-2 -right-2"
        size={28}
        color="green"
      />
      <h1 className="font-semibold text-lg text-center pt-2">Dream Job</h1>
      <p className="text-paragraph text-[10px] font-medium text-center -mt-1">
        Company Name
      </p>
      <div className="flex justify-around text-[10px] mx-3 mt-3">
        {roles.map((role) => (
          <div
            key={role}
            className="border border-gray-300 p-1 rounded-xl font-medium "
          >
            {role}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center ">
        <div className="h-2.5 bg-gray-300 text-center w-[80%] rounded-lg mt-6"></div>
        <div className="h-2.5 bg-gray-200 text-center w-[60%] rounded-lg mt-2"></div>
        <div className="h-2.5 bg-gray-100 text-center w-[40%] rounded-lg mt-2"></div>
      </div>
      <div className="mt-8 border-t border-gray-300 mx-4">
        <p className="mt-4 font-bold text-center">$4400</p>
      </div>
    </div>
  );
}
