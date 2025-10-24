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
import ConfirmModal from "../components/ConfirmModal";
import { TiArrowBack } from "react-icons/ti";

const EditorWrapper = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [zoom, setZoom] = useState(1);
  const [showConfirm, setShowConfirm] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true); // For mobile toggle
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

  const handleGoBack = () => setShowConfirm(true);
  const handleConfirm = () => {
    setShowConfirm(false);
    navigate(-1);
  };
  const handleCancel = () => setShowConfirm(false);

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-gray-50 text-gray-800 overflow-hidden">
      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden flex justify-end p-2">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="px-3 py-1 text-sm bg-primary text-white rounded-xl shadow"
        >
          {sidebarOpen ? "See Live Preview" : "Fill Form"}
        </button>
      </div>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="editor-sidebar w-full md:w-[28%] min-w-[280px] md:min-w-[280px] h-auto md:h-full bg-white border-b md:border-b-0 md:border-r border-gray-200 p-4 md:p-6 overflow-y-auto shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <button
              onClick={handleGoBack}
              className="flex text-sm font-medium items-center text-gray-500 hover:text-gray-900 transition"
            >
              <TiArrowBack /> Back
            </button>
            <ConfirmModal
              open={showConfirm}
              title="Leave Page?"
              message="Unsaved progress will be lost."
              onConfirm={handleConfirm}
              onCancel={handleCancel}
            />
            <h1 className="hidden md:block text-lg font-semibold head-gradient tracking-tight">
              Resume Editor
            </h1>
          </div>

          <h2 className="text-lg font-semibold mb-4 tracking-tight text-gray-900">
            Fill Your Details
          </h2>
          <DynamicForm config={config} formData={formData} setFormData={setFormData} />
        </div>
      )}

      {/* Right Preview Area */}
      <div className="flex-1 relative bg-gray-100 overflow-auto editor-sidebar flex flex-col items-center justify-start p-4 md:p-10">
        {/* Live Preview Header */}
        <div className="w-full max-w-[900px] text-center mb-4 md:mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Live Preview</h2>
          <div className="h-1 w-12 mx-auto bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-1"></div>
        </div>

        {/* Preview Editor */}
        <div className="flex-1 w-full flex justify-center items-start">
          <Editor
            templateId={templateId}
            data={formData}
            zoom={zoom}
            previewRef={previewRef}
          />
        </div>

        {/* Floating Editor Buttons */}
        <div className="mt-4 md:mt-6 w-full flex justify-center">
          <EditorButtons
            formData={formData}
            templateId={templateId}
            zoom={zoom}
            setZoom={setZoom}
            previewRef={previewRef}
          />
        </div>
      </div>
    </div>
  );
};

export default EditorWrapper;
