import { useRef, useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const faqData = [
  {
    title: "What is CVCraft?",
    content: [
      "CVCraft is an online platform that helps users create professional, ATS-friendly resumes quickly and efficiently.",
      "It provides a variety of pre-designed templates and tools to customize your CV according to your career goals."
    ]
  },
  {
    title: "Is CVCraft fully free?",
    content: [
      "Yes! CVCraft offers a fully free plan that allows users to create, customize, and download resumes without any cost.",
      "Some advanced features or premium templates may require an upgrade in the future, but the basic resume creation is completely free."
    ]
  },
  {
    title: "Should I only use available templates or can I create my own?",
    content: [
      "You can use the available templates provided by CVCraft for convenience and professional design.",
      "Currently, custom templates are limited, but you can customize existing templates extensively to suit your personal style."
    ]
  },
  {
    title: "Will my details be made public?",
    content: [
      "No, all your personal details are kept private.",
      "CVCraft does not share your information with other users or third parties without your consent."
    ]
  },
  {
    title: "Can we get ratings for our premade CV?",
    content: [
      "Currently, CVCraft does not provide a CV rating system.",
      "However, it ensures that all templates are ATS-friendly and optimized for recruiters, increasing your chances of being noticed."
    ]
  }
];

function SmoothPanel({ open, children }) {
  const ref = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");
  const [isVisible, setIsVisible] = useState(open);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (open) {
      setIsVisible(true);
      requestAnimationFrame(() => {
        setMaxHeight(`${el.scrollHeight}px`);
      });
    } else {
      setMaxHeight(`${el.scrollHeight}px`);
      requestAnimationFrame(() => {
        setMaxHeight("0px");
      });
      const timer = setTimeout(() => setIsVisible(false), 500);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <div
      style={{
        maxHeight,
        overflow: "hidden",
        opacity: open ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        transition: "max-height 0.5s ease, opacity 0.4s ease"
      }}
    >
      <div ref={ref}>{children}</div>
    </div>
  );
}

export default function Accordion() {
  return (
    <div className="w-full max-w-3xl mx-auto font-para mt-8 divide-y divide-gray-300">
      {faqData.map((item, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <div className="px-2 md:px-6 py-2 md:py-3">
              <Disclosure.Button className="flex justify-between w-full text-left text-base font-medium text-gray-800 hover:bg-gray-50 px-4 py-2 md:px-6 md:py-2 rounded-lg transition">
                <span>{item.title}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 md:w-6 md:h-6 text-gray-500 transform transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </Disclosure.Button>

              <SmoothPanel open={open}>
                <div className="px-4 md:px-6 pb-4 pt-2 text-gray-600 space-y-2 md:space-y-3 text-xs md:text-sm">
                  {item.content.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </SmoothPanel>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
