import React, { useEffect, useState } from "react";
import TemplateCard from "../components/templates/TemplateCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import axios from "axios";

const TemplatePage = () => {
  const navigate = useNavigate();
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_BASE = "http://localhost:8000/api/resumes";

  const templates = [
    { id: "template1", name: "Professional Spectrum", preview: "./cv1.png", usersCount: 200 },
    { id: "template2", name: "Professional Minimalist", preview: "./template2.png", usersCount: 190 },
    { id: "template3", name: "ATS-Friendly Optimized", preview: "./cv3.png", usersCount: 250 },
    { id: "template4", name: "Creative Portfolio", preview: "./cv4.png", usersCount: 180 },
    { id: "template5", name: "Modern Professional", preview: "./cv5.png", usersCount: 220 },
  ];

  // Fetch saved resumes
  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const { data } = await axios.get(`${API_BASE}/my`, {
          withCredentials: true, // important
        });
        setResumes(data.data || []);
      } catch (error) {
        console.error("Error fetching resumes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResumes();
  }, []);


  return (
    <div className="bg-gradient-to-b from-[#f9fafb] to-[#eef2ff] min-h-screen flex flex-col font-para">
      <Navbar />
      {/* Banner */}
      <div className="bg-gradient-to-r font-para from-primary to-indigo-500 text-white text-center text-sm font-medium py-2 px-4 flex justify-center items-center space-x-2 shadow-sm">
        <p>
          Boost your Resume with <span className="font-semibold">CVCraft</span>.
        </p>
        <Link to="/auth" className="hover:underline font-semibold">Register Now</Link>
      </div>

      {/* Header */}
      <div className="px-6 md:px-20 pt-10 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-primary mb-2">
            Resume Builder
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-md">
            Create a polished, ATS-friendly resume to land your dream job in minutes.
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate(`/editor/template1`)}
          className="bg-indigo-400 text-white flex items-center gap-2 py-2.5 px-5 rounded-xl font-medium shadow-md hover:shadow-lg hover:bg-primary transition-all duration-300"
        >
          <FiPlus size={18} /> New Resume
        </motion.button>
      </div>

      {/* Featured Templates */}
      <div className="px-6 md:px-20 flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg md:text-xl text-gray-800">Featured Resume Templates</h2>
        <Link to="#" className="flex items-center gap-1 text-blue-600 text-sm hover:underline font-medium">
          See All <FaArrowRight size={12} />
        </Link>
      </div>
      <motion.div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-20 py-6"
        initial="hidden" animate="visible"
        variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } } }}>
        {templates.map((t) => (
          <motion.div key={t.id} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <TemplateCard id={t.id} preview={t.preview} name={t.name} usersCount={t.usersCount} />
          </motion.div>
        ))}
      </motion.div>

      {/* My Resumes */}
      <div className="px-6 md:px-20 mt-12 mb-10">
        <h2 className="font-semibold text-lg md:text-xl mb-6 text-gray-800">My Resumes</h2>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1,2,3,4].map(i => (
              <div key={i} className="animate-pulse bg-white border border-gray-200 rounded-xl p-3 shadow-inner">
                <div className="bg-gray-300 rounded-md w-full h-40 mb-3" />
                <div className="bg-gray-300 h-4 w-3/4 mb-2 rounded" />
                <div className="bg-gray-300 h-3 w-1/2 rounded" />
              </div>
            ))}
          </div>
        ) : resumes.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-2xl shadow-inner p-8 flex flex-col justify-center items-center text-center hover:shadow-md transition-all duration-300">
            <img src="./save.svg" alt="saved resume" className="h-20 mb-3 opacity-90" />
            <h1 className="text-gray-600 font-medium">Your saved resumes will appear here once you start creating.</h1>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {resumes.map((resume) => (
              <div key={resume._id} 
                   className="bg-white border border-gray-200 p-3 shadow hover:shadow-lg cursor-pointer transition-all"
                   onClick={() => navigate(`/editor/${resume.templateId}`, { state: { resumeId: resume._id } })}>
                <img src={`./${resume.templateId}.png`} alt={resume.resumeName} className="rounded-md w-full"/>
                <h3 className="mt-2 font-semibold text-gray-700 truncate">{resume.resumeName}</h3>
                <p className="text-xs text-gray-500">Updated: {new Date(resume.updatedAt).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default TemplatePage;
