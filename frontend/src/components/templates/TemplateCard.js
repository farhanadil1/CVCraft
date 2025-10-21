import React from "react";
import { useNavigate } from "react-router-dom";

const TemplateCard = ({ id, name, preview, usersCount }) => {
  const navigate = useNavigate();

  return (
    <div className="relative w-52 group">
      {/* Card Container */}
      <div
        onClick={() => navigate(`/editor/${id}`)}
        className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-3d-light hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col"
      >
        {/* Preview Image */}
        <img
          src={preview}
          alt={name}
          className="w-full h-48 object-cover"
        />

        {/* Template Name & User Info */}
        <div className="p-3 flex flex-col gap-2 flex-grow">
          <h2 className="font-para font-semibold text-sm text-gray-800 line-clamp-1">
            {name}
          </h2>

          <div className="flex items-center gap-2 mt-auto">
            <img
              src="./usericons.png"
              alt="user"
              className="w-18 h-7 rounded-full border-2 border-white shadow-sm"
            />
            <p className="text-gray-500 text-[10px]">
              Chosen by <span className="font-medium text-gray-700">{usersCount}</span> users
            </p>
          </div>
        </div>

        {/* Enhanced Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center px-2">
          <p className="text-white font-medium text-xs mb-2 animate-slide-up">
            Preview & Use Template
          </p>
          <button
            className="bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg shadow-lg hover:bg-accent2 hover:scale-110 transition-all duration-300 flex items-center gap-1"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/editor/${id}`);
            }}
          >
            Use Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
