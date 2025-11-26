import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { template1Config } from "../components/templates/template1Config";
import { template2Config } from "../components/templates/template2Config";
import { template3Config } from "../components/templates/template3Config";
import { template4Config } from "../components/templates/template4Config";
import { template5Config } from "../components/templates/template5Config";
import DynamicForm from "../components/DynamicForm";
import Editor from "../components/Editor";
import EditorButtons from "../components/EditorButtons";
import ConfirmModal from "../components/ConfirmModal";
import { TiArrowBack } from "react-icons/ti";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { getAccessToken } from "../utils/auth";

const API = process.env.REACT_APP_API_URL;

const EditorWrapper = () => {
  const { templateId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [zoom, setZoom] = useState(1);
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [resumeId, setResumeId] = useState(null);
  const [loading, setLoading] = useState(false);
  const previewRef = useRef(null);

  const username = Cookies.get("username");

  const config =
    templateId === "template1"
      ? template1Config
      : templateId === "template2"
        ? template2Config
        : templateId === "template3"
          ? template3Config
          : templateId === "template4"
            ? template4Config
            : templateId === "template5"
              ? template5Config
              : null;

  const passedResumeId = location.state?.resumeId || null;

  // fetch resume
  useEffect(() => {
    const savedDraft = localStorage.getItem("draftFormData");
    if (savedDraft && !passedResumeId) {
      setFormData(JSON.parse(savedDraft));
    }

    const fetchResume = async () => {
      if (!passedResumeId) return;
      setLoading(true);
      try {
        const { data } = await axios.get(
          `${API}/resumes/my/${passedResumeId}`,
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${getAccessToken()}`
            }
          }
        );
        if (data?.data?.formData) {
          setFormData(data.data.formData);
          setResumeId(passedResumeId);
        }
      } catch (err) {
        console.error("Fetch failed:", err.response || err);
        toast.error("Failed to fetch resume.");
      } finally {
        setLoading(false);
      }
    };

    fetchResume();
  }, [passedResumeId]);

  // Auto-save form data to localStorage
  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      localStorage.setItem("draftFormData", JSON.stringify(formData));
    }
  }, [formData]);

  // Confirm modal logic
  const handleGoBack = () => {
    navigate(-1);
  };

  const handleHome = () => {
    setConfirmAction(() => () => navigate("/"));
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    localStorage.removeItem("draftFormData");
    setShowConfirm(false);
    if (confirmAction) confirmAction();
  };

  const handleCancel = () => setShowConfirm(false);

  const handleAuth = () => navigate("/auth");

  return (
    <div className="min-[1560px]:max-w-7xl min-[1560px]:mx-auto">
      <div className="h-screen w-full flex flex-col">
        {/* Top Banner */}
        <div className="flex justify-between px-10 items-center bg-gradient-to-r from-indigo-400 via-primary to-indigo-400 text-white font-para">
          <button
            onClick={handleHome}
            className="hidden md:block border font-medium px-2 py-1.5 text-xs rounded-xl border-white hover:bg-white hover:text-black"
          >
            Go Home
          </button>

          <p className="text-center text-xs sm:text-sm ml-9 sm:ml-0 py-3 px-4 flex gap-2">
            Sign in to save your progress{" "}
            <span className="font-semibold">CVCraft</span>
          </p>

          {/*Username or Sign Up */}
          {username ? (
            <div className="hidden md:flex items-center space-x-2 cursor-pointer">
              <BsPersonCircle size={24} className="text-white" />
              <span className="font-medium text-xs text-white">
                Hello, {username}
              </span>
            </div>
          ) : (
            <button
              onClick={handleAuth}
              className="hidden md:block border font-medium px-2 py-1.5 text-xs rounded-xl border-white hover:bg-white hover:text-black"
            >
              Sign Up
            </button>
          )}
        </div>

        {/* Main Layout */}
        <div className="flex flex-1 h-full overflow-hidden relative">
          {/* Mobile toggle button */}
          <button
            className="md:hidden absolute top-4 left-4 z-20 bg-white p-2 rounded shadow"
            onClick={() => setSidebarOpen(true)}
          >
            <HiOutlineMenu size={24} />
          </button>

          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 bottom-0 w-[85%] editor-sidebar overflow-hidden max-w-xs bg-white shadow z-30 transform transition-transform duration-300
                     md:relative md:translate-x-0 md:w-[35%] md:max-w-none md:shadow-none md:border-r md:border-gray-300
                     ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <button
                onClick={handleGoBack}
                className="flex items-center text-gray-900 hover:text-blue-500"
              >
                <TiArrowBack /> Back
              </button>
              <h2 className="text-lg font-semibold">Fill Details</h2>
              <button
                className="md:hidden text-gray-900"
                onClick={() => setSidebarOpen(false)}
              >
                <IoClose size={24} />
              </button>
            </div>
            <div className="flex flex-col h-full">
              <div className="flex-1 overflow-auto pb-14 editor-sidebar p-2">
                <DynamicForm
                  config={config}
                  formData={formData}
                  setFormData={setFormData}
                />
              </div>
            </div>
          </div>

          {/* Overlay */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black/30 z-20 md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Editor Section */}
          <div className="flex-1 relative editor-sidebar overflow-auto flex flex-col items-center justify-start p-4">
            <div className="w-full max-w-[900px] text-center mb-4 md:mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Live Preview
              </h2>
              <div className="h-1 w-12 mx-auto bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-1"></div>
            </div>
            <div className="flex-1 w-full flex justify-center items-start">
              <Editor
                templateId={templateId}
                data={formData}
                zoom={zoom}
                previewRef={previewRef}
              />
            </div>
            <div className="mt-4 md:mt-6 w-full flex justify-center">
              <EditorButtons
                templateId={templateId}
                formData={formData}
                zoom={zoom}
                setZoom={setZoom}
                previewRef={previewRef}
                resumeId={resumeId}
                setResumeId={setResumeId}
              />
            </div>
          </div>
        </div>

        {/* Confirm Modal */}
        <ConfirmModal
          open={showConfirm}
          title="Leave?"
          message="Unsaved progress will be lost. Do you wish to continue?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />

        {/* Loading Spinner */}
        {loading && (
          <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditorWrapper;
