import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa6";

const TemplateCard = ({ id, name, preview, usersCount }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full md:max-w-72 mx-auto sm:mx-4 md:mx-0 mb-8">
      <div
        className="cursor-pointer"
        onClick={() => navigate(`/editor/${id}`)}
      >
        <img
          src={preview}
          alt={name}
          className="h-60 sm:h-80 w-full sm:w-72 mx-auto shadow-lg object-cover transition-transform duration-500 hover:scale-105"
          draggable={false}
        />
      </div>
      <h1
        className="text-base sm:text-lg md:text-xl font-para font-semibold mt-4 sm:mt-6 hover:underline cursor-pointer text-left text-gray-900"
        onClick={() => navigate(`/editor/${id}`)}
      >
        {name}
      </h1>
      <p className="text-xs sm:text-sm items-center gap-2 flex font-medium text-paragraph mt-1">
        <FaUsers />
        Preferred by {usersCount} users
      </p>
    </div>
  );
};

export default TemplateCard;
