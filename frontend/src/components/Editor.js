import React from "react";
// Assuming these Template components are available in the local file structure as provided
import Template1 from "./templates/Template1";
import Template2 from "./templates/Template2";
import Template3 from "./templates/Template3";
import Template4 from "./templates/Template4";
import Template5 from "./templates/Template5";

const Editor = ({ templateId, data, zoom, previewRef }) => {
  const renderTemplate = () => {
    switch (templateId) {
      case "template1":
        return <Template1 data={data} />;
      case "template2":
        return <Template2 data={data} />;
      case "template3":
        return <Template3 data={data} />;
      case "template4":
        return <Template4 data={data} />;
      case "template5":
        return <Template5 data={data} />;
      default:
        return (
            <div className="p-10 text-center text-gray-500">
                <p>Select a template to begin editing.</p>
            </div>
        );
    }
  };

  return (
    <div className="flex-1 bg-gray-100 p-2 sm:p-4 rounded-xl shadow-inner overflow-auto h-full">
      <div
        ref={previewRef}
        // Updated classes for paper-like look, rounded corners, and shadow
        className="bg-white mx-auto w-full max-w-[850px] min-h-[1100px] shadow-2xl rounded-lg border border-gray-300 transition-transform duration-300 ease-in-out"
        style={{
          transform: `scale(${zoom})`,
          transformOrigin: "top center",
        }}
      >
        {renderTemplate()}
      </div>
    </div>
  );
};

export default Editor;
