import React from "react";
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
        return null;
    }
  };

  return (
    <div className="flex-1 bg-gray-100 p-6 rounded-xl border border-gray-200 shadow-inner overflow-auto">
      <div
        ref={previewRef}
        className="bg-white mx-auto w-[850px] min-h-[1100px] shadow-lg rounded-lg p-8 border border-gray-300 transition-transform duration-300 ease-in-out"
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
