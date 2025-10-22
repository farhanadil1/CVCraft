import React from "react";
import TemplateCard from "../components/templates/TemplateCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";

const TemplatePage = () => {
  const navigate = useNavigate();
  const templates = [
    { id: "template1", name: "Modern Blue", preview: "./template1.png", usersCount: 200 },
    { id: "template2", name: "Elegant Minimal", preview: "./template2.png", usersCount: 190 },
    { id: "template3", name: "Creative Modern", preview: "./template3.png", usersCount: 250 },
    { id: "template4", name: "Professional Classic", preview: "./template4.png", usersCount: 180 },
    { id: "template5", name: "Tech Minimal", preview: "./template5.png", usersCount: 220 },
  ];

  return (
    <div className="bg-page min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />
      {/* Announcement Banner */}
      <div className="bg-primary text-white text-center text-sm font-medium py-2 px-4 flex justify-center items-center space-x-2">
        <p>Boost your Resume with CVCraft.</p>
        <Link to="/auth" className="hover:underline font-semibold">
          Register Now
        </Link>
      </div>

      {/* Header Section */}
      <div className="px-6 md:px-20 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold font-para mb-1">Resume Builder</h1>
          <p className="text-gray-600 text-sm md:text-base">Create your own resume to apply for jobs</p>
        </div>
        <button 
          onClick={() => navigate(`/editor/template1`)}
          className="bg-primary text-white flex items-center gap-2 py-2.5 px-4 rounded-xl font-medium shadow-md hover:scale-105 hover:bg-accent2 transition-all duration-300">
          <FiPlus size={18} />
          New Resume
        </button>
      </div>

      {/* Sample Resumes Section */}
      <div className="px-6 md:px-20 mt-8 flex justify-between items-center">
        <h2 className="font-semibold text-lg md:text-xl">Sample Resumes</h2>
        <Link
          to="#"
          className="flex items-center gap-1 text-blue-500 text-sm hover:underline font-medium"
        >
          See All <FaArrowRight size={12} />
        </Link>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6 md:px-20 py-6">
        {templates.map((t) => (
          <TemplateCard
            key={t.id}
            id={t.id}
            preview={t.preview}
            name={t.name}
            userImage={t.preview}     
            usersCount={t.usersCount}    
          />
        ))}
      </div>

      {/* My Resumes Section */}
      <div className="px-6 md:px-20 mt-12 mb-4">
        <h2 className="font-semibold text-lg md:text-xl mb-4">My Resumes</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {templates.map((t) => (
            <TemplateCard
              key={`my-${t.id}`}
              id={t.id}
              preview={t.preview}
              name={t.name}
              userImage={t.preview}     
              usersCount={t.usersCount}    
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TemplatePage;
