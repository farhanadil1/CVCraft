import React from "react";
import { FiDownload, FiPrinter, FiZoomIn, FiZoomOut } from "react-icons/fi";
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
        <head><title>Resume</title></head>
        <body style="margin:0">${previewRef.current.innerHTML}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleDownload}
        className="flex items-center gap-1 px-3 py-1.5 text-sm bg-black text-white hover:bg-gray-800 transition"
      >
        <FiDownload size={14} /> Download
      </button>

      <button
        onClick={handlePrint}
        className="flex items-center gap-1 px-3 py-1.5 text-sm bg-gray-200 text-gray-900 hover:bg-gray-300 transition"
      >
        <FiPrinter size={14} /> Print
      </button>

      {/* Zoom Controls */}
      <div className="flex items-center border border-gray-300 px-2 py-1.5 text-sm bg-white">
        <button
          onClick={() => setZoom((z) => Math.max(z - 0.1, 0.5))}
          className="px-1 hover:text-black transition"
        >
          <FiZoomOut size={14} />
        </button>
        <span className="px-2 font-medium">{Math.round(zoom * 100)}%</span>
        <button
          onClick={() => setZoom((z) => Math.min(z + 0.1, 2))}
          className="px-1 hover:text-black transition"
        >
          <FiZoomIn size={14} />
        </button>
      </div>
    </div>
  );
};

export default EditorButtons;
