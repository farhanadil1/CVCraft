import React, { useEffect, useState } from "react";
import TemplateCard from "../components/templates/TemplateCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";
import Cookies from "js-cookie";
import { getAccessToken } from "../utils/auth";

const API = process.env.REACT_APP_API_URL;

const TemplatePage = () => {
  const navigate = useNavigate();
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  const templates = [
    {
      id: "template2",
      name: "Professional Minimalist",
      preview: "./template2.png",
      usersCount: 190
    },
    {
      id: "template3",
      name: "ATS-Friendly Optimized",
      preview: "./template3.png",
      usersCount: 250
    },
    {
      id: "template4",
      name: "Creative Portfolio",
      preview: "./template4.png",
      usersCount: 180
    },
    {
      id: "template5",
      name: "Modern Professional",
      preview: "./template5.png",
      usersCount: 220
    }
  ];

  const fetchResumes = async () => {
    try {
      const user = Cookies.get("username");
      if (!user) return;
      const { data } = await axios.get(`${API}/resumes/my`, {
        withCredentials: true, // important
        headers: {
          Authorization: `Bearer ${getAccessToken()}`
        }
      });
      setResumes(data.data || []);
    } catch (error) {
      console.error("Error fetching resumes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResumes();
  }, []);

  // Delete resume
  const handleDelete = async (id) => {
    if (window.confirm("Delete this resume?")) {
      try {
        setDeletingId(id);
        await axios.delete(`${API}/resumes/delete/${id}`, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${getAccessToken()}`
          }
        });
        fetchResumes(); // refresh the list
      } catch (err) {
        console.error("Error deleting:", err);
        alert("Failed to delete!");
      } finally {
        setDeletingId(null);
      }
    }
  };

  return (
    <div>
      <div className="bg-gradient-to-b from-[#f9fafb] to-[#eef2ff] min-h-screen flex flex-col font-para">
        <Navbar />

        {/* Banner */}
        <div className="bg-gradient-to-r pt-20 font-para from-primary to-indigo-500 text-white text-center text-sm font-medium py-2 px-4 flex justify-center items-center space-x-2 shadow-sm">
          <p>
            Boost your Resume with{" "}
            <span className="font-semibold">CVCraft</span>.
          </p>
          <Link to="/auth" className="hover:underline font-semibold">
            Register Now
          </Link>
        </div>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="px-6 md:px-20 pt-10 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-primary mb-2">
                Resume Builder
              </h1>
              <p className="text-gray-600 text-sm md:text-base max-w-md">
                Create a polished, ATS-friendly resume to land your dream job in
                minutes.
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
            <h2 className="font-semibold text-lg md:text-xl text-gray-800">
              Featured Resume Templates
            </h2>
            <Link
              to="#"
              className="flex items-center gap-1 text-blue-600 text-sm hover:underline font-medium"
            >
              See All <FaArrowRight size={12} />
            </Link>
          </div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-20 py-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, staggerChildren: 0.1 }
              }
            }}
          >
            {templates.map((t) => (
              <motion.div
                key={t.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <TemplateCard
                  id={t.id}
                  preview={t.preview}
                  name={t.name}
                  usersCount={t.usersCount}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* My Resumes */}
          <div className="px-6 md:px-20 mt-12 mb-10">
            <h2 className="font-semibold text-lg md:text-xl mb-6 text-gray-800">
              My Resumes
            </h2>

            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="animate-pulse bg-white border border-gray-200 rounded-xl p-3 shadow-inner"
                  >
                    <div className="bg-gray-300 rounded-md w-full h-40 mb-3" />
                    <div className="bg-gray-300 h-4 w-3/4 mb-2 rounded" />
                    <div className="bg-gray-300 h-3 w-1/2 rounded" />
                  </div>
                ))}
              </div>
            ) : resumes.length === 0 ? (
              <div className="bg-white border border-gray-200 rounded-2xl shadow-inner p-8 flex flex-col justify-center items-center text-center hover:shadow-md transition-all duration-300">
                <img
                  src="./save.svg"
                  alt="saved resume"
                  className="h-20 mb-3 opacity-90"
                  draggable="false"
                />
                <h1 className="text-gray-600 font-medium">
                  Your saved resumes will appear here once you start creating.
                </h1>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {resumes.map((r) => (
                  <div
                    key={r._id}
                    className="
                      relative rounded-md bg-white shadow-sm hover:shadow-lg transition-all 
                      duration-300 group overflow-hidden
                    "
                  >
                    {/* Resume Thumbnail */}
                    <div className="w-full bg-gray-50 flex items-center justify-center p-2">
                      <img
                        src={`./${r.templateId}.png`}
                        alt={r.resumeName}
                        className="w-full h-44 sm:h-56 md:h-64 object-contain transition-all duration-300 group-hover:scale-[1.03]"
                      />
                    </div>

                    {/* Hover Buttons */}
                    <div className={`
                      absolute top-2 right-2 flex gap-2 
                      transition-opacity duration-300 z-20
                      ${
                        deletingId === r._id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }
                    `}
                    >
                      {/* EDIT BUTTON */}
                      <button
                        onClick={() =>
                          navigate(`/editor/${r.templateId}`, {
                            state: { resumeId: r._id }
                          })
                        }
                        title="Edit"
                        disabled={deletingId === r._id}
                        className="
                          flex items-center gap-1.5
                          bg-white/90 backdrop-blur-md 
                          px-3 py-1.5
                          rounded-lg shadow-md
                          border border-gray-200
                          hover:shadow-xl hover:scale-[1.06]
                          disabled:opacity-60 disabled:cursor-not-allowed
                          transition-all duration-300
                        "
                      >
                        <FaEdit size={15} className="text-blue-600" />
                        <span className="text-[11px] font-semibold text-gray-700">
                          Edit
                        </span>
                      </button>

                      {/* DELETE BUTTON */}
                      <button
                        onClick={() => handleDelete(r._id)}
                        title="Delete"
                        disabled={deletingId === r._id}
                        className={`
                          bg-red-500/90 text-white 
                          p-2 
                          rounded-lg shadow-md
                          transition-all duration-300
                          ${
                            deletingId === r._id
                              ? "opacity-100 cursor-wait"
                              : "hover:bg-red-600 hover:shadow-xl hover:scale-[1.08] active:scale-[0.95]"
                          }
                        `}
                      >
                        {deletingId === r._id ? (
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <FaTrashAlt size={14} />
                        )}
                      </button>
                    </div>

                    {/* Resume Info */}
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 text-sm sm:text-base truncate">
                        {r.resumeName}
                      </h3>

                      <p className="text-xs text-gray-500 mt-1">
                        Last Updated:{" "}
                        {new Date(r.updatedAt).toLocaleString("en-IN", {
                          dateStyle: "medium",
                          timeStyle: "short"
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default TemplatePage;
