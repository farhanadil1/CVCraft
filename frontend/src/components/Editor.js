import React from "react";
import Template1 from "./templates/Template1";
import Template2 from "./templates/Template2";
import Template3 from "./templates/Template3";
import Template4 from "./templates/Template4";
import Template5 from "./templates/Template5";

const Editor = ({ templateId, data, zoom, previewRef }) => {
  const renderTemplate = () => {
    switch (templateId) {
      case "template1": return <Template1 data={data} />;
      case "template2": return <Template2 data={data} />;
      case "template3": return <Template3 data={data} />;
      case "template4": return <Template4 data={data} />;
      case "template5": return <Template5 data={data} />;
      default:
        return <p className="text-gray-500 text-center mt-20">Select a template to begin editing.</p>;
    }
  };

  return (
    <div
      ref={previewRef}
      className="bg-white w-[850px] min-h-[1100px] border border-gray-300 shadow-[0_0_25px_rgba(0,0,0,0.1)]"
      style={{
        transform: `scale(${zoom})`,
        transformOrigin: "top center",
      }}
    >
      {renderTemplate()}
    </div>
  );
};

export default Editor;
