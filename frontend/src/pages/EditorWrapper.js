import React, { useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { template1Config } from "../components/templates/template1Config";
import { template2Config } from "../components/templates/template2Config";
import { template3Config } from "../components/templates/template3Config";
import DynamicForm from "../components/DynamicForm";
import Editor from "../components/Editor";
import EditorButtons from "../components/EditorButtons";
import { RiErrorWarningFill } from "react-icons/ri";
import { template4Config } from "../components/templates/template4Config";
import { template5Config } from "../components/templates/template5Config";

const EditorWrapper = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [zoom, setZoom] = useState(1);
  const previewRef = useRef(null);

  const config = templateId === "template1"
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
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row p-6 gap-8">
      {/* Left Form Panel */}
      <div className="w-full md:w-1/3 bg-white shadow-lg rounded-xl p-6 overflow-y-auto max-h-screen border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          Fill Your Details
        </h2>
        <DynamicForm config={config} formData={formData} setFormData={setFormData} />
      </div>

      {/* Right Preview Panel */}
      <div className="flex flex-col w-full md:w-2/3 gap-4">
        {/* Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleGoBack}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition font-medium"
          >
            ← Go Back
          </button>

          <EditorButtons
            formData={formData}
            templateId={templateId}
            zoom={zoom}
            setZoom={setZoom}
            previewRef={previewRef}
          />

          <button
            onClick={handleSignup}
            className="flex items-center gap-2 px-4 py-2 border border-red-500 text-red-600 rounded-lg font-medium hover:bg-red-50 transition"
          >
            <RiErrorWarningFill size={20} />
            Sign Up to Save Work
          </button>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
          Live Preview
        </h2>

        <Editor
          templateId={templateId}
          data={formData}
          zoom={zoom}
          previewRef={previewRef}
        />
      </div>
    </div>
  );
};

export default EditorWrapper;
