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

const EditorWrapper = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [zoom, setZoom] = useState(1);
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
    if (window.confirm("Leave this page? Unsaved progress will be lost.")) {
      navigate(-1);
    }
  };

  const handleSignup = () => {
    navigate("/auth");
  };

  return (
    <div className="h-screen editor-wrapper w-full flex flex-col bg-[#fafafa] text-gray-800">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-3 border-b border-gray-200 bg-white shadow-sm">
        <div className="flex items-center gap-4">
          <button
            onClick={handleGoBack}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition"
          >
            ← Back
          </button>
          <h1 className="text-lg font-semibold text-gray-900 tracking-tight">
            Resume Editor
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <EditorButtons
            formData={formData}
            templateId={templateId}
            zoom={zoom}
            setZoom={setZoom}
            previewRef={previewRef}
          />

          <button
            onClick={handleSignup}
            className="flex items-center gap-1 px-3 py-1.5 text-sm border border-red-500 text-red-600 hover:bg-red-50 transition"
          >
            <RiErrorWarningFill size={16} /> Sign Up to Save
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar Form */}
        <div className="editor-sidebar w-[25%] min-w-[280px] h-full bg-white border-r overflow-y-scroll editor-wrapper border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4 tracking-tight">
            Fill Your Details
          </h2>
          <DynamicForm config={config} formData={formData} setFormData={setFormData} />
        </div>

        {/* Right Preview Area */}
        <div className="editor-preview flex-1 relative bg-[#f3f3f3] overflow-auto editor-wrapper flex flex-col items-center justify-start p-6">
          <h2 className="text-lg font-semibold mb-3 w-full max-w-[900px]">
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
