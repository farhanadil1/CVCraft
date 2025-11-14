import React, { useState } from "react";
import { FiDownload, FiZoomIn, FiZoomOut, FiSave } from "react-icons/fi";
import { RiErrorWarningFill } from "react-icons/ri";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import axios from "axios";
import Cookies from "js-cookie";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { VscPreview } from "react-icons/vsc";
import Editor from "./Editor";
import { getAccessToken } from "../utils/auth";

const API = process.env.REACT_APP_API_URL;

const EditorButtons = ({
  templateId,
  formData,
  zoom,
  setZoom,
  previewRef,
  resumeId,
  setResumeId
}) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);
  const [previewOpen, setPreviewOpen] = useState(false);

  //  Save or Update resume
  const handleSave = async (showToast = true) => {
    const token = Cookies.get("username");
    if (!token) {
      if (showToast) toast.error("Please login to save your resume!");
      return;
    }

    const savePromise = (async () => {
      const payload = { resumeName: "My Resume", templateId, formData };

      if (resumeId) {
        // Update existing resume
        const { data } = await axios.put(
          `${API}/resumes/update/${resumeId}`,
          payload,
          { withCredentials: true,
            headers: {
              Authorization: `Bearer ${getAccessToken()}`
            }
           }
        );
        setResumeId(data.data._id);
        localStorage.removeItem("draftFormData");
      } else {
        // Create new resume
        const { data } = await axios.post(`${API}/resumes/create`, payload, {
          withCredentials: true,
          headers: {
              Authorization: `Bearer ${getAccessToken()}`
            }
        });
        setResumeId(data.data._id);
        localStorage.removeItem("draftFormData");
      }
    })();

    if (showToast) {
      await toast.promise(
        savePromise,
        {
          loading: "Saving resume...",
          success: "Resume saved successfully!",
          error: "Failed to save resume!"
        },
        { duration: 2000 }
      );
    } else {
      await savePromise; // silently save
    }
  };

  // Download PDF
  const handleDownload = async () => {
  const token = Cookies.get("username");
  if (!token) {
    toast.error("Please login to download your resume!");
    return;
  }

  await toast.promise(
    (async () => {
      await handleSave(false); // silent save

      if (!previewRef.current) return;

      const a4El = previewRef.current.querySelector(".a4-container");

      //  Save current inline styles
      const prevTransform = a4El.style.transform;
      const prevWidth = a4El.style.width;
      const prevHeight = a4El.style.height;

      //  Enable true A4, remove scaling
      a4El.classList.add("a4-capture");

      // wait a frame so css applies
      await new Promise((res) => setTimeout(res, 30));

      // 300 DPI CANVAS GENERATION
      const dpi = 300;
      const scaleFactor = dpi / 96; // 96 = default browser dpi

      const canvas = await html2canvas(a4El, {
        scale: scaleFactor,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        logging: false,
      });

      // Restore original preview scaling
      a4El.classList.remove("a4-capture");
      a4El.style.transform = prevTransform;
      a4El.style.width = prevWidth;
      a4El.style.height = prevHeight;

      // Generate PDF at true A4
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        pdf.internal.pageSize.getWidth(),
        pdf.internal.pageSize.getHeight()
      );

      const username = Cookies.get("username");
      pdf.save(`${username || "resume"}_CVCraft.pdf`);
    })(),
    {
      loading: "Generating PDF...",
      success: "PDF downloaded.",
      error: "PDF generation failed!",
    }
  );
};


  const handleSignup = () => {
    navigate("/auth");
  };

  return (
    <div className="min-[1560px]:max-w-7xl min-[1560px]:mx-auto">
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Signup Warning */}
        {!Cookies.get("username") && (
          <button
            onMouseEnter={() => setHovered("signup")}
            onMouseLeave={() => setHovered(null)}
            onClick={handleSignup}
            className={`flex whitespace-nowrap items-center h-12 gap-2 px-4 py-2 rounded-full bg-red-500 text-white shadow-md hover:shadow-lg transition-all duration-300 ${
              hovered === "signup"
                ? "w-52 justify-start pl-4"
                : "w-12 py-3.5 justify-center"
            }`}
          >
            <RiErrorWarningFill size={18} />
            {hovered === "signup" && <span>Signup to save work</span>}
          </button>
        )}
        {/* Save Button */}
        <button
          onMouseEnter={() => setHovered("save")}
          onMouseLeave={() => setHovered(null)}
          onClick={handleSave}
          className={`flex whitespace-nowrap items-center h-12 gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-indigo-400 text-white shadow-lg hover:shadow-xl transition-all duration-300 ${
            hovered === "save"
              ? "w-24 justify-start pl-4"
              : "w-12 py-3.5 justify-center"
          }`}
        >
          <FiSave size={18} />
          {hovered === "save" && <span>Save</span>}
        </button>

        {/* Download Button */}
        <button
          onMouseEnter={() => setHovered("download")}
          onMouseLeave={() => setHovered(null)}
          onClick={handleDownload}
          className={`flex whitespace-nowrap items-center h-12 gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-indigo-400 text-white shadow-lg hover:shadow-xl transition-all duration-300 ${
            hovered === "download"
              ? "w-32 justify-start pl-4"
              : "w-12 py-3.5 justify-center"
          }`}
        >
          <FiDownload size={18} />
          {hovered === "download" && <span>Download</span>}
        </button>

        {/* Preview Button */}
        <button
          onMouseEnter={() => setHovered("preview")}
          onMouseLeave={() => setHovered(null)}
          onClick={() => setPreviewOpen(true)}
          className={`flex whitespace-nowrap items-center h-12 gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-indigo-400 text-white shadow-lg hover:shadow-xl transition-all duration-300 ${
            hovered === "preview"
              ? "w-36 justify-start pl-4"
              : "w-12 py-3.5 justify-center"
          }`}
        >
          <VscPreview size={18} />
          {hovered === "preview" && <span>Full Preview</span>}
        </button>

        {/* Zoom Controls */}
        <button
          onClick={() => setZoom((z) => Math.max(z - 0.1, 0.5))}
          className="p-3.5 bg-white border border-gray-300 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100"
        >
          <FiZoomOut size={16} />
        </button>
        <span className="text-xs font-medium text-gray-900 bg-white border border-gray-300 rounded-full shadow-lg px-4 py-3.5">
          {Math.round(zoom * 100)}%
        </span>
        <button
          onClick={() => setZoom((z) => Math.min(z + 0.1, 2))}
          className="p-3.5 bg-white border border-gray-300 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100"
        >
          <FiZoomIn size={16} />
        </button>

        {previewOpen && (
          <div className="fixed inset-0 z-50 bg-gray-100 flex flex-col">
            <div className="flex justify-between items-center p-4 bg-white border-b border-gray-300">
              <h2 className="text-lg font-semibold text-gray-800">
                Resume Preview
              </h2>
              <button onClick={() => setPreviewOpen(false)}>
                <IoClose size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-6 flex justify-center items-start">
              <Editor templateId={templateId} data={formData} zoom={zoom} />
            </div>
          </div>
        )}

        <Toaster position="top-center" />
      </div>
    </div>
  );
};

export default EditorButtons;
