import React from 'react';
import AnimatedText from '../../animation/AnimatedText';

export default function HeroText() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mx-4 sm:mx-8 md:mx-20 pt-10 gap-6 md:gap-8">
      {/* Animated Text */}
      <AnimatedText
        text="Create a Job Ready Resume in Minutes"
        delay={150}
        animateBy="words"
        direction="top"
        className="font-head font-bold text-3xl sm:text-4xl md:text-[46px] leading-tight text-center md:text-left"
      />
      {/* Subtext and Button */}
      <div className="text-left">
        <p className="text-paragraph font-para text-sm sm:text-base">
          Effortlessly craft your resume using CVcraft’s free builder<br />
          and expertly designed professional templates.
        </p>
        <button
          className="px-3 py-3 mt-4 font-semibold font-para text-xs sm:text-sm text-white bg-primary rounded-3xl
                     shadow-[0_8px_15px_rgba(40,88,193,0.3)] hover:bg-accent2 transition-colors duration-300"
        >
          Build My Resume
        </button>
      </div>
    </div>
  );
}
