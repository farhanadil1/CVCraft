import React from "react";
import Accordion from "./Accordion";

export default function FAQ() {
  return (
    <div className="mt-16 md:mt-20 px-4 md:px-20">
      <h1 className="font-para text-primary text-center text-sm font-semibold mb-4">
        FAQ
      </h1>
      <h2 className="font-head text-center font-bold text-3xl md:text-[46px] leading-snug md:leading-tight head-gradient mb-8">
        Frequently Asked Questions
      </h2>
      <Accordion />
      <p className="font-para text-paragraph text-center text-xs font-semibold mt-4">
        More questions? visit our
        <span className="text-primary cursor-pointer ml-1">FAQ library</span>
      </p>
    </div>
  );
}
