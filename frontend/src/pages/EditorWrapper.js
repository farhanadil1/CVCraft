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
import axios from "axios";

const API_BASE = "http://localhost:8000/api/resumes";

const EditorWrapper = () => {
  const { templateId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [zoom, setZoom] = useState(1);
  const [showConfirm, setShowConfirm] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // drawer for mobile
  const [resumeId, setResumeId] = useState(null);
  const previewRef = useRef(null);

  const config = templateId === "template1" ? template1Config
               : templateId === "template2" ? template2Config
               : templateId === "template3" ? template3Config
               : templateId === "template4" ? template4Config
               : templateId === "template5" ? template5Config : null;

  const passedResumeId = location.state?.resumeId || null;

  // fetch resume
  useEffect(() => {
    const fetchResume = async () => {
      if (!passedResumeId) return;
      try {
        const { data } = await axios.get(`${API_BASE}/my/${passedResumeId}`, {
          withCredentials: true
        });
        if (data?.data?.formData) {
          setFormData(data.data.formData);
          setResumeId(passedResumeId);
        }
      } catch (err) {
        console.error("Fetch failed:", err.response || err);
      }
    };
    fetchResume();
  }, [passedResumeId]);

  // leave confirm
  const handleGoBack = () => setShowConfirm(true);
  const handleConfirm = () => { setShowConfirm(false); navigate(-1); }
  const handleCancel = () => setShowConfirm(false);

  return (
    <div className="h-screen w-full flex flex-col">
      {/* top banner */}
      <div className="bg-gradient-to-r from-primary to-indigo-500 text-white text-center text-sm py-2 px-4 flex justify-center items-center gap-2">
        <p>Sign in to save your progress <span className="font-semibold">CVCraft</span></p>
      </div>

      <div className="flex flex-1 h-full overflow-hidden relative">
        {/* Mobile toggle button */}
        <button
          className="md:hidden absolute top-4 left-4 z-20 bg-white p-2 rounded shadow"
          onClick={() => setSidebarOpen(true)}
        >
          <HiOutlineMenu size={24} />
        </button>

        {/* Sidebar / drawer */}
        <div
          className={`fixed top-0 left-0 h-full w-[85%] editor-sidebar overflow-auto max-w-xs bg-white shadow-lg z-30 transform transition-transform duration-300
                     md:relative md:translate-x-0 md:w-[28%] md:max-w-none md:shadow-none
                     ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <button onClick={handleGoBack} className="flex items-center text-gray-500 hover:text-gray-900">
              <TiArrowBack /> Back
            </button>
            <h2 className="text-lg font-semibold">Fill Details</h2>
            {/* close for mobile */}
            <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
              <IoClose size={24} />
            </button>
          </div>
          <div className="p-2">
            <DynamicForm config={config} formData={formData} setFormData={setFormData} />
          </div>
        </div>

        {/* Overlay when sidebar open on mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-20 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Editor */}
        <div className="flex-1 relative bg-gray-100 editor-sidebar overflow-auto flex flex-col items-center justify-start p-4 md:p-10">
          <div className="w-full max-w-[900px] text-center mb-4 md:mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Live Preview</h2>
            <div className="h-1 w-12 mx-auto bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-1"></div>
          </div>
          <div className="flex-1 w-full flex justify-center items-start">
            <Editor templateId={templateId} data={formData} zoom={zoom} previewRef={previewRef} />
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
      <ConfirmModal open={showConfirm} title="Leave?" message="Unsaved progress will be lost." onConfirm={handleConfirm} onCancel={handleCancel} />
    </div>
  );
};

export default EditorWrapper;
