import React, { useState } from "react";
import { FiDownload, FiPrinter, FiZoomIn, FiZoomOut, FiSave } from "react-icons/fi";
import { RiErrorWarningFill } from "react-icons/ri";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import axios from "axios";
import Cookies from "js-cookie";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EditorButtons = ({ templateId, formData, zoom, setZoom, previewRef, resumeId, setResumeId }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);
  const API_BASE = "https://cvcraft-vxk1.onrender.com/api/resumes";

  //  Save or Update resume
  const handleSave = async () => {
    const token = Cookies.get("username");
    if (!token) {
      toast.error("Please login to save your resume!");
      return;
    }

    await toast.promise(
      (async () => {
        const payload = { resumeName: "My Resume", templateId, formData };

        if (resumeId) {
          // Update existing resume
          const { data } = await axios.put(`${API_BASE}/update/${resumeId}`, payload, { withCredentials: true });
          setResumeId(data.data._id); 
          console.log("update")
        } else {
          // Create new resume
          const { data } = await axios.post(`${API_BASE}/create`, payload, { withCredentials: true });
          setResumeId(data.data._id); 
          console.log("create")
        }
      })(),
      {
        loading: 'Saving resume...',
        success: 'Resume saved successfully!',
        error: 'Failed to save resume!',
      },
      { duration: 2000 }
    );
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
        await handleSave(); // first save in DB

        if (!previewRef.current) return;
        const canvas = await html2canvas(previewRef.current, { 
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff'
         });
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const width = pdf.internal.pageSize.getWidth();
        const height = (canvas.height * width) / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, width, height);
        pdf.save("resume.pdf");
      })(),
      {
        loading: 'Generating PDF...',
        success: 'PDF downloaded successfully!',
        error: 'Failed to download PDF!',
      },
      { duration: 2000 }
    );
  };

  // Print resume
  const handlePrint = async () => {
    await toast.promise(
      (async () => {
        if (!previewRef.current) return;
        const printWindow = window.open("", "_blank");
        printWindow.document.write(`
          <html>
            <head><title>Resume</title></head>
            <body style="margin:0">${previewRef.current.innerHTML}</body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      })(),
      {
        loading: 'Preparing resume for print...',
        success: 'Print dialog opened!',
        error: 'Failed to print resume!',
      },
      { duration: 2000 }
    );
  };

  const handleSignup = () => {
    navigate("/auth");
  };


  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Signup Warning */}
      {!Cookies.get("username") && (
        <button
          onMouseEnter={() => setHovered("signup")}
          onMouseLeave={() => setHovered(null)}
          onClick={handleSignup}
          className={`flex whitespace-nowrap items-center h-12 gap-2 px-4 py-2 rounded-full bg-red-500 text-white shadow-md hover:shadow-lg transition-all duration-300 ${
            hovered === "signup" ? "w-52 justify-start pl-4" : "w-12 py-3.5 justify-center"
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
          hovered === "save" ? "w-24 justify-start pl-4" : "w-12 py-3.5 justify-center"
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
          hovered === "download" ? "w-32 justify-start pl-4" : "w-12 py-3.5 justify-center"
        }`}
      >
        <FiDownload size={18} />
        {hovered === "download" && <span>Download</span>}
      </button>

      {/* Print Button */}
      <button
        onMouseEnter={() => setHovered("print")}
        onMouseLeave={() => setHovered(null)}
        onClick={handlePrint}
        className={`flex whitespace-nowrap items-center h-12 gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-indigo-400 text-white shadow-lg hover:shadow-xl transition-all duration-300 ${
          hovered === "print" ? "w-24 justify-start pl-4" : "w-12 py-3.5 justify-center"
        }`}
      >
        <FiPrinter size={18} />
        {hovered === "print" && <span>Print</span>}
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
      <Toaster position="top-center" />
    </div>
  );
};

export default EditorButtons;
