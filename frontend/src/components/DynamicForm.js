import React, { useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
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
    if (typeof value === "string") return value;
    if (typeof value === "object" && value !== null) {
      const stringValue = Object.values(value).find((v) => typeof v === "string");
      return stringValue || "";
    }
    return "";
  };

  return (
    <div className="space-y-6">
      {config.sections.map((section) => {
        const isOpen = openSection === section.name;
        const isTextArea =
          section.isLarge ||
          (section.type !== "array" &&
            section.type !== "object" &&
            section.label.toLowerCase().includes("summary"));

        return (
          <Disclosure key={section.name} as="div">
            <>
              <Disclosure.Button
                onClick={() => setOpenSection(isOpen ? "" : section.name)}
                className={`flex justify-between items-center w-full px-5 py-3 font-semibold rounded-xl transition-all duration-300 shadow-sm ${
                  isOpen ? "bg-blue-50 shadow-md" : "bg-white hover:shadow-md"
                }`}
              >
                <span className="text-gray-800">{section.label}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-primary" : ""
                  }`}
                />
              </Disclosure.Button>

              <Transition
                show={isOpen}
                enter="transition duration-300 ease-out"
                enterFrom="opacity-0 max-h-0"
                enterTo="opacity-100 max-h-screen"
                leave="transition duration-200 ease-in"
                leaveFrom="opacity-100 max-h-screen"
                leaveTo="opacity-0 max-h-0"
              >
                <Disclosure.Panel className="mt-4 space-y-4 px-2">
                  {section.type === "array"
                    ? (formData[section.name] || [{}]).map((_, idx) => (
                        <div
                          key={idx}
                          className="p-4 border-l-4 border-gradient-to-b from-blue-400 to-blue-200 rounded-xl bg-white shadow-sm space-y-3"
                        >
                          {section.fields.map((f) => (
                            <div key={f.name} className="relative w-full">
                              <input
                                type={f.type}
                                placeholder=" "
                                className="peer w-full border-b-2 border-gray-300 focus:border-primary text-gray-800 p-2 outline-none bg-transparent transition"
                                value={formData[section.name]?.[idx]?.[f.name] || ""}
                                onChange={(e) =>
                                  handleChange(section.name, f.name, e.target.value, idx)
                                }
                              />
                              <label className="pointer-events-none absolute left-2 -top-2.5 text-gray-400 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-primary transition-all">
                                {f.label}
                              </label>
                            </div>
                          ))}
                          <div className="flex justify-end gap-2 mt-2">
                            <button
                              type="button"
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  [section.name]: (prev[section.name] || []).filter(
                                    (_, i) => i !== idx
                                  ),
                                }))
                              }
                              className="p-2 rounded-full hover:bg-red-50 text-red-600 transition shadow-sm"
                              title="Remove"
                            >
                              <MinusIcon className="w-5 h-5" />
                            </button>
                            {idx === (formData[section.name]?.length || 1) - 1 && (
                              <button
                                type="button"
                                onClick={() =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    [section.name]: [...(prev[section.name] || []), {}],
                                  }))
                                }
                                className="p-2 rounded-full hover:bg-blue-50 text-primary transition shadow-sm"
                                title="Add"
                              >
                                <PlusIcon className="w-5 h-5" />
                              </button>
                            )}
                          </div>
                        </div>
                      ))
                    : section.fields
                    ? section.fields.map((f) => (
                        <div key={f.name} className="relative w-full">
                          <input
                            type={f.type}
                            placeholder=" "
                            className="peer w-full border-b-2 border-gray-300 focus:border-primary text-gray-800 p-2 outline-none bg-transparent transition"
                            value={formData[section.name]?.[f.name] || ""}
                            onChange={(e) => handleChange(section.name, f.name, e.target.value)}
                          />
                          <label className="pointer-events-none absolute left-2 -top-2.5 text-gray-400 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-blue-400 transition-all">
                            {f.label}
                          </label>
                        </div>
                      ))
                    : isTextArea ? (
                        <div className="relative w-full">
                          <textarea
                            rows={5}
                            placeholder=" "
                            className="peer w-full border-b-2 border-gray-300 focus:border-primary text-gray-800 p-3 outline-none bg-transparent transition resize-none"
                            value={getSimpleSectionValue(section.name)}
                            onChange={(e) => handleChange(section.name, null, e.target.value)}
                          />
                          <label className="pointer-events-none absolute left-2 -top-2.5 text-gray-400 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-blue-400 transition-all">
                            {section.label}
                          </label>
                        </div>
                      ) : (
                        <div className="relative w-full">
                          <input
                            type="text"
                            placeholder=" "
                            className="peer w-full border-b-2 border-gray-300 focus:border-primary text-gray-800 p-2 outline-none bg-transparent transition"
                            value={getSimpleSectionValue(section.name)}
                            onChange={(e) => handleChange(section.name, null, e.target.value)}
                          />
                          <label className="pointer-events-none absolute left-2 -top-2.5 text-gray-400 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-blue-400 transition-all">
                            {section.label}
                          </label>
                        </div>
                      )}
                </Disclosure.Panel>
              </Transition>
            </>
          </Disclosure>
        );
      })}
    </div>
  );
};

export default DynamicForm;
