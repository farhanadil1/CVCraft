import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa6";


const TemplateCard = ({ id, name, preview, usersCount }) => {
  const navigate = useNavigate();

  return (
    <div className="md:max-w-72 mx-8 md:mx-0">
      <div
        className="cursor-pointer"
        onClick={() => navigate(`/editor/${id}`)}
      >
        <img
          src={preview}
          alt={name}
          className="h-80 w-72 mx-auto md:mx-0 shadow-lg object-cover transition-transform duration-500 hover:scale-105"
          draggable={false}
        />
      </div>
      <h1
        className="text-lg md:text-xl font-para font-semibold mt-6 hover:underline cursor-pointer text-left text-gray-900"
        onClick={() => navigate(`/editor/${id}`)}
      >
        {name}
      </h1>
      <p className="text-sm items-center gap-2 flex font-medium text-paragraph">
        <FaUsers />
        Preferred by {usersCount} users
      </p>

    </div>
  );
};

export default TemplateCard;
