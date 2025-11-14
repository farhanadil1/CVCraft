import React, { useState, useEffect } from "react";
import Template1 from "./templates/Template1";
import Template2 from "./templates/Template2";
import Template3 from "./templates/Template3";
import Template4 from "./templates/Template4";
import Template5 from "./templates/Template5";

const A4_WIDTH = 850;
const A4_HEIGHT = 1100;

const Editor = ({ templateId, data, zoom, previewRef }) => {
  const [scale, setScale] = useState(1);

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
          <p className="text-gray-500 text-center mt-20">
            Select a template to begin editing.
          </p>
        );
    }
  };

  useEffect(() => {
    const handleScale = () => {
      const screenWidth = window.innerWidth;
      const maxWidth = A4_WIDTH;

      // scale proportionally for mobile screens
      const newScale = screenWidth < maxWidth ? screenWidth / maxWidth : 1;

      setScale(newScale);
    };

    handleScale();
    window.addEventListener("resize", handleScale);
    return () => window.removeEventListener("resize", handleScale);
  }, []);

 return (
  <div className="w-full flex justify-center overflow-hidden">
    <div
      className="relative"
      style={{
        width: "100%",
        maxWidth: `${A4_WIDTH}px`, // allow shrink
        aspectRatio: `${A4_WIDTH} / ${A4_HEIGHT}`, // maintain A4 ratio ALWAYS
      }}
    >
      <div
        ref={previewRef}
        style={{
          width: "100%",
          height: "100%",
          transform: `scale(${zoom})`,
          transformOrigin: "top center",
        }}
        className="absolute top-0 left-0 bg-white shadow-lg"
      >
        <div
          className="a4-container"
          style={{
            width: `${A4_WIDTH}px`,
            height: `${A4_HEIGHT}px`,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          {renderTemplate()}
        </div>
      </div>
    </div>
  </div>
);

};
export default Editor;
