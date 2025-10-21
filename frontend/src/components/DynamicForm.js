import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const DynamicForm = ({ config, formData, setFormData }) => {
  const [openSection, setOpenSection] = useState(config.sections[0]?.name || "");

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
      if (typeof value === 'string') {
          return value;
      }
      if (typeof value === 'object' && value !== null) {
          // Attempt to find a string value within the object
          const stringValue = Object.values(value).find(v => typeof v === 'string');
          return stringValue || '';
      }
      return '';
  };

  return (
    <div className="space-y-4 text-gray-800">
      {config.sections.map((section) => {
        const isOpen = openSection === section.name;       
        const isTextArea = section.isLarge || (section.type !== 'array' && section.type !== 'object' && section.label.toLowerCase().includes('summary'));

        return (
          <Disclosure key={section.name} as="div">
            <>
              <Disclosure.Button
                onClick={() => setOpenSection(isOpen ? "" : section.name)}
                className="flex justify-between items-center w-full px-2 py-1 text-left font-medium text-gray-700 border-b border-gray-300"
              >
                {section.label}
                <ChevronDownIcon
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </Disclosure.Button>

              <Disclosure.Panel className="mt-2 space-y-2">
                {section.type === "array"
                  ? (formData[section.name] || [{}]).map((_, idx) => (
                      <div key={idx} className="space-y-1 p-2 border border-gray-200 rounded-md">
                        {section.fields.map((f) => (
                          <input
                            key={f.name}
                            type={f.type}
                            placeholder={f.label}
                            className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-gray-600 bg-transparent text-gray-900 text-sm"
                            value={formData[section.name]?.[idx]?.[f.name] || ""}
                            onChange={(e) =>
                              handleChange(section.name, f.name, e.target.value, idx)
                            }
                          />
                        ))}
                        <div className="flex justify-end gap-2 text-sm pt-1">
                          {/* Remove Button */}
                          <button
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                [section.name]: (prev[section.name] || []).filter((_, i) => i !== idx),
                              }))
                            }
                            className="text-red-600 hover:text-red-800"
                          >
                            <MinusIcon className="w-4 h-4 inline" /> Remove
                          </button>
                          {/* Add Button */}
                          {idx === (formData[section.name]?.length || 1) - 1 && (
                            <button
                              type="button"
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  [section.name]: [...(prev[section.name] || []), {}],
                                }))
                              }
                              className="text-blue-600 hover:text-blue-800"
                            >
                              <PlusIcon className="w-4 h-4 inline" /> Add
                            </button>
                          )}
                        </div>
                      </div>
                    ))
                  : section.fields
                  ? section.fields.map((f) => (
                      <input
                        key={f.name}
                        type={f.type}
                        placeholder={f.label}
                        className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-gray-600 bg-transparent text-gray-900 text-sm"
                        value={formData[section.name]?.[f.name] || ""}
                        onChange={(e) =>
                          handleChange(section.name, f.name, e.target.value)
                        }
                      />
                    ))
                  : isTextArea ? ( 
                      <textarea
                        rows={6}
                        placeholder={section.label}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600 bg-transparent text-gray-900 text-sm"
                        value={getSimpleSectionValue(section.name)}
                        onChange={(e) => handleChange(section.name, null, e.target.value)}
                      />
                  ) : (
                      <input
                        type="text"
                        placeholder={section.label}
                        className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-gray-600 bg-transparent text-gray-900 text-sm"
                        value={getSimpleSectionValue(section.name)}
                        onChange={(e) => handleChange(section.name, null, e.target.value)}
                      />
                  )}
              </Disclosure.Panel>
            </>
          </Disclosure>
        );
      })}
    </div>
  );
};

export default DynamicForm;
