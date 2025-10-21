import React from "react";
import { FiDownload, FiPrinter, FiShare2, FiZoomIn, FiZoomOut } from "react-icons/fi";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const EditorButtons = ({ templateId, formData, zoom, setZoom, previewRef }) => {
  const handleDownload = async () => {
    if (!previewRef.current) return;
    const canvas = await html2canvas(previewRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save("resume.pdf");
  };

  const handlePrint = () => {
    if (!previewRef.current) return;
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>Resume</title>
          <style>body{margin:0;font-family:sans-serif;}</style>
        </head>
        <body>${previewRef.current.innerHTML}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        onClick={handleDownload}
        className="flex items-center gap-1 px-4 py-2 bg-primary text-white text-sm font-medium rounded hover:accent transition"
      >
        <FiDownload /> PDF
      </button>
      <button
        onClick={handlePrint}
        className="flex items-center gap-1 px-4 py-2 bg-gray-200 text-gray-800 text-sm font-medium rounded hover:bg-accent2 transition"
      >
        <FiPrinter /> Print
      </button>
      <button
        className="flex items-center gap-1 px-4 py-2 bg-gray-200 text-gray-800 text-sm font-medium rounded hover:bg-accent2 transition"
      >
        <FiShare2 /> Share
      </button>

      {/* Zoom Control */}
      <div className="flex items-center bg-white border border-gray-300 px-2 py-2 rounded gap-1 text-sm">
        <button
          onClick={() => setZoom((prev) => Math.max(prev - 0.1, 0.1))}
          className="hover:text-gray-900 transition"
        >
          <FiZoomOut />
        </button>
        <span className="px-1 font-medium">{Math.round(zoom * 100)}%</span>
        <button
          onClick={() => setZoom((prev) => Math.min(prev + 0.1, 1.5))}
          className="hover:text-gray-900 transition"
        >
          <FiZoomIn />
        </button>
      </div>
    </div>
  );
};

export default EditorButtons;
