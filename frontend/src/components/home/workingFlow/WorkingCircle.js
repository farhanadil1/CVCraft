import React from 'react';

export default function WorkingCircle() {
  const steps = [
    { stepno: '1', name: "Choose a Free Resume Template", text: "Keep the sections that you like and can remove the rest", icon: "./template.svg" },
    { stepno: '2', name: "Fill your Latest Information in fields", text: "Make your own Resume quickly by filling the details in sections", icon: "./fill.svg" },
    { stepno: '3', name: "Share as PDF and Download", text: "After filling the details in the sections, download or share it", icon: "./download.svg" },
  ];

  return (
    <div className="mx-4 md:mx-20 -mt-2 md:h-[500px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((s, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4 md:space-y-4 px-4 group"
          >
            <div className="group-hover:animate-bounce transition-transform duration-700 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary text-white text-2xl md:text-3xl font-head font-semibold shadow-md">
              {s.stepno}
            </div>
            <h2 className="text-xl md:text-2xl font-head font-semibold head-gradient">
              {s.name}
            </h2>
            <p className="text-paragraph font-para text-sm md:text-base">
              {s.text}
            </p>
            <div className="w-full flex justify-center">
              <img
                src={s.icon}
                alt={s.name}
                className="h-48 md:h-60 w-auto object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
