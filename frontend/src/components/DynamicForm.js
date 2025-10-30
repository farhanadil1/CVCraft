import React, { useState, useRef, useEffect } from "react";
import { Stepper, Step, StepLabel, Button, StepConnector } from "@mui/material";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const DynamicForm = ({ config, formData, setFormData }) => {
  const sections = config.sections;
  const [activeStep, setActiveStep] = useState(0);
  const currentSection = sections[activeStep];

  const stepRefs = useRef([]); // ref for each step
  const stepperContainerRef = useRef(null); // ref for scroll container

  useEffect(() => {
    if (stepRefs.current[activeStep] && stepperContainerRef.current) {
      stepRefs.current[activeStep].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeStep]);

  const handleChange = (section, field, value, index = null) => {
    setFormData((prev) => {
      const updated = { ...prev };
      const sectionConfig = config.sections.find((s) => s.name === section);
      const isArray = sectionConfig?.type === "array";

      if (!field && !isArray) {
        updated[section] = value;
      } else if (isArray) {
        const arr = [...(updated[section] || [])];
        arr[index] = { ...(arr[index] || {}), [field]: value };
        updated[section] = arr;
      } else {
        updated[section] = { ...(updated[section] || {}), [field]: value };
      }
      return updated;
    });
  };

  const getSimpleSectionValue = (sectionName) => {
    const value = formData[sectionName];
    if (typeof value === "string") return value;
    if (typeof value === "object" && value !== null) {
      const stringValue = Object.values(value).find((v) => typeof v === "string");
      return stringValue || "";
    }
    return "";
  };

  const nextStep = () => {
    if (activeStep < sections.length - 1) setActiveStep((prev) => prev + 1);
  };
  const prevStep = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8">
      {/* Scrollable Stepper */}
      <div className="relative mt-2">
        <div className="overflow-x-auto editor-sidebar" ref={stepperContainerRef}>
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            connector={<StepConnector />}
            className="flex-nowrap min-w-max"
            sx={{
              padding: 0,
              '& .MuiStepLabel-label': {
                fontSize: '0.75rem',     // smaller font
                color: '#9ca3af',        // gray-400 for inactive steps
              },
              '& .MuiStepLabel-label.Mui-active': {
                color: '#93B5FF',        
                fontWeight: 600,
              },
              '& .MuiStepLabel-label.Mui-completed': {
                color: '#ABC4FF',        
              },
              '& .MuiStepIcon-root': {
                width: 20,
                height: 20,
              },
              '& .MuiStepIcon-root.Mui-active': {
                color: '#93B5FF',
              },
              '& .MuiStepIcon-root.Mui-completed': {
                color: '#ABC4FF',
              },
              '& .MuiStepConnector-root': {
                top: 10,
                '& .MuiStepConnector-line': {
                  borderTopWidth: 2,
                  borderColor: '#d1d5db', // gray-300 line
                },
              },
            }}
          >
            {sections.map((section, idx) => (
              <Step key={section.name} ref={(el) => (stepRefs.current[idx] = el)}>
                <StepLabel>{section.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>

        {/* Gradient hints */}
        <div className="absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-white pointer-events-none z-10"></div>
        <div className="absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-white pointer-events-none z-10"></div>
      </div>

      {/* Current Section Card */}
      <div className="bg-white px-6 pb-6 transition-all duration-300">
        <h2 className="text-lg font-semibold text-gray-950 mb-4">{currentSection.label}</h2>

        {/* Fields */}
        {currentSection.type === "array"
          ? (formData[currentSection.name] || [{}]).map((_, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-blue-50/50 shadow-sm mb-4"
              >
                {currentSection.fields.map((f) => (
                  <div key={f.name} className="relative w-full mb-4">
                    <input
                      type={f.type}
                      placeholder=" "
                      className="peer w-full border-b border-gray-300 focus:border-blue-500 text-gray-800 p-2 outline-none bg-transparent transition"
                      value={formData[currentSection.name]?.[idx]?.[f.name] || ""}
                      onChange={(e) =>
                        handleChange(currentSection.name, f.name, e.target.value, idx)
                      }
                    />
                    <label className="absolute pointer-events-none left-2 -top-2.5 text-gray-400 text-sm peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-500 transition-all">
                      {f.label}
                    </label>
                  </div>
                ))}
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        [currentSection.name]: (prev[currentSection.name] || []).filter(
                          (_, i) => i !== idx
                        ),
                      }))
                    }
                    className="p-2 rounded-full hover:bg-red-50 text-red-600 transition"
                    title="Remove"
                  >
                    <MinusIcon className="w-5 h-5" />
                  </button>
                  {idx === (formData[currentSection.name]?.length || 1) - 1 && (
                    <button
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          [currentSection.name]: [...(prev[currentSection.name] || []), {}],
                        }))
                      }
                      className="p-2 rounded-full hover:bg-blue-50 text-blue-500 transition"
                      title="Add"
                    >
                      <PlusIcon className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            ))
          : currentSection.fields
          ? currentSection.fields.map((f) => (
              <div key={f.name} className="relative w-full mb-4">
                <input
                  type={f.type}
                  placeholder=" "
                  className="peer w-full border-b border-gray-300 focus:border-blue-500 text-gray-800 p-2 outline-none bg-transparent transition"
                  value={formData[currentSection.name]?.[f.name] || ""}
                  onChange={(e) => handleChange(currentSection.name, f.name, e.target.value)}
                />
                <label className="absolute pointer-events-none left-2 -top-2.5 text-gray-400 text-sm peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-500 transition-all">
                  {f.label}
                </label>
              </div>
            ))
          : currentSection.isLarge
          ? (
            <div className="relative w-full">
              <textarea
                rows={5}
                placeholder=" "
                className="peer w-full border-b border-gray-300 focus:border-blue-500 text-gray-800 p-3 outline-none bg-transparent transition resize-none"
                value={getSimpleSectionValue(currentSection.name)}
                onChange={(e) => handleChange(currentSection.name, null, e.target.value)}
              />
              <label className="absolute pointer-events-none left-2 -top-2.5 text-gray-400 text-sm peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-blue-500 transition-all">
                {currentSection.label}
              </label>
            </div>
          )
          : (
            <div className="relative w-full">
              <input
                type="text"
                placeholder=" "
                className="peer w-full border-b border-gray-300 focus:border-blue-500 text-gray-800 p-2 outline-none bg-transparent transition"
                value={getSimpleSectionValue(currentSection.name)}
                onChange={(e) => handleChange(currentSection.name, null, e.target.value)}
              />
              <label className="absolute pointer-events-none left-2 -top-2.5 text-gray-400 text-sm peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-500 transition-all">
                {currentSection.label}
              </label>
            </div>
          )}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-6">
          <Button onClick={prevStep} disabled={activeStep === 0} variant="outlined" className="!capitalize">
            Back
          </Button>
          <Button
            onClick={nextStep}
            disabled={activeStep === sections.length - 1}
            variant="contained"
            className="!bg-blue-500 hover:!bg-blue-600 !capitalize"
          >
            {activeStep === sections.length - 1 ? "Done" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DynamicForm;
