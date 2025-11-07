import React from "react";
import ATS from "./ATS";
import DreamJob from "./DreamJob";
import HeroText from "./HeroText";
import UserIcons from "./UserIcons";

const HeroSection = () => {
  return (
    <div className="animate-slide-up duration-500 relative w-full">
      {/* Full-width background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="./gradient.png"
          alt="bg-gradient"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Centered content */}
      <div className="relative min-[1280px]:max-w-6xl min-[1280px]:mx-auto min-[1920px]:pb-20 animate-slide-up">
        <HeroText />

        <div className="relative pt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="hidden md:flex ml-10 flex-col gap-6">
            <ATS />
            <div className="ml-20">
              <UserIcons />
            </div>
          </div>

          {/* Center Column */}
          <div className="flex flex-col items-center">
            <img
              src="./iphone.png"
              alt="iphone"
              className="w-full max-w-[220px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] -mt-10 sm:-mt-6 h-auto animate-slide-up delay-400"
              draggable={false}
            />
            {/* Mobile UserIcons */}
            <div className="block md:hidden mt-6">
              <UserIcons />
            </div>
          </div>

          {/* Right Column */}
          <div className="hidden md:flex self-end">
            <DreamJob />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
