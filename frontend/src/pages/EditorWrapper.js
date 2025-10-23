import React, { useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { template1Config } from "../components/templates/template1Config";
import { template2Config } from "../components/templates/template2Config";
import { template3Config } from "../components/templates/template3Config"; 
import { template4Config } from "../components/templates/template4Config";
import { template5Config } from "../components/templates/template5Config";
import DynamicForm from "../components/DynamicForm";
import Editor from "../components/Editor";
import EditorButtons from "../components/EditorButtons";
import { RiErrorWarningFill } from "react-icons/ri";
import { IoMdArrowRoundBack } from "react-icons/io";
import ConfirmModal from "../components/ConfirmModal";

const EditorWrapper = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [zoom, setZoom] = useState(1);
  const [showConfirm, setShowConfirm] = useState(false);
  const previewRef = useRef(null);

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

  const handleGoBack = () => {
    setShowConfirm(true); 
  };

  const handleConfirm = () => {
    setShowConfirm(false);
    navigate(-1);
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  const handleSignup = () => {
    navigate("/auth");
  };

  return (
    <div className="h-screen editor-wrapper w-full flex flex-col bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-3 border-b border-gray-200 bg-white shadow-md gap-2 sm:gap-0">
        <div className="flex items-center gap-4">
          <button
            onClick={handleGoBack}
            className="text-sm flex items-center font-medium text-gray-500 hover:text-gray-900 transition"
          >
            <IoMdArrowRoundBack /> Back
          </button>
          <ConfirmModal
            open={showConfirm}
            title="Leave Page?"
            message="Unsaved progress will be lost."
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
          <h1 className="text-lg font-semibold text-gray-900 tracking-tight">
            Resume Editor
          </h1>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 mt-2 sm:mt-0">
          <EditorButtons
            formData={formData}
            templateId={templateId}
            zoom={zoom}
            setZoom={setZoom}
            previewRef={previewRef}
          />

          <button
            onClick={handleSignup}
            className="flex items-center gap-1 px-3 py-1.5 text-sm border border-red-500 text-red-600 hover:bg-red-50 rounded-lg transition"
          >
            <RiErrorWarningFill size={16} /> Sign Up to Save
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        {/* Left Sidebar Form */}
        <div className="editor-sidebar w-full md:w-[28%] min-w-[280px] h-[50%] md:h-full bg-white border-b md:border-b-0 md:border-r border-gray-200 p-4 md:p-6 overflow-y-auto shadow-sm">
          <h2 className="text-lg font-semibold mb-4 tracking-tight text-gray-900">
            Fill Your Details
          </h2>
          <DynamicForm config={config} formData={formData} setFormData={setFormData} />
        </div>

        {/* Right Preview Area */}
        <div className="editor-preview flex-1 relative bg-gray-100 overflow-auto flex flex-col items-center justify-start p-4 md:p-6">
          <h2 className="text-lg font-semibold mb-3 w-full max-w-[900px] text-gray-900">
            Live Preview
          </h2>

          <div className="flex-1 w-full flex justify-center items-start">
            <Editor
              templateId={templateId}
              data={formData}
              zoom={zoom}
              previewRef={previewRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorWrapper;
