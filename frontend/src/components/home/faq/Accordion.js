// src/components/faq/Accordion.js
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const faqData = [
  {
    title: "What is CVCraft?",
    content: [
      "CVCraft is an online platform that helps users create professional, ATS-friendly resumes quickly and efficiently.",
      "It provides a variety of pre-designed templates and tools to customize your CV according to your career goals.",
    ],
  },
  {
    title: "Is CVCraft fully free?",
    content: [
      "Yes! CVCraft offers a fully free plan that allows users to create, customize, and download resumes without any cost.",
      "Some advanced features or premium templates may require an upgrade in the future, but the basic resume creation is completely free.",
    ],
  },
  {
    title: "Should I only use available templates or can I create my own?",
    content: [
      "You can use the available templates provided by CVCraft for convenience and professional design.",
      "Currently, custom templates are limited, but you can customize existing templates extensively to suit your personal style.",
    ],
  },
  {
    title: "Will my details be made public?",
    content: [
      "No, all your personal details are kept private.",
      "CVCraft does not share your information with other users or third parties without your consent.",
    ],
  },
  {
    title: "Can we get ratings for our premade CV?",
    content: [
      "Currently, CVCraft does not provide a CV rating system.",
      "However, it ensures that all templates are ATS-friendly and optimized for recruiters, increasing your chances of being noticed.",
    ],
  },
];


export default function Accordion() {
  return (
    <div className="w-full max-w-2xl font-para mt-8 mx-auto divide-y divide-gray-300">
      {faqData.map((item, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <div>
              <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left text-lg font-medium text-gray-800">
                <span>{item.title}</span>
                <ChevronUpIcon
                  className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-6 pb-4 pt-2 text-gray-600 space-y-2">
                {item.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
