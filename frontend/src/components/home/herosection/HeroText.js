import React from 'react';
import AnimatedText from '../../animation/AnimatedText';
import { useNavigate } from 'react-router-dom';

export default function HeroText() {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/templates')
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mx-4 sm:mx-8 md:mx-20 pt-10 gap-6 md:gap-8">
      {/* Animated Text */}
      <AnimatedText
        text="Create a Job Ready Resume in Minutes"
        delay={150}
        animateBy="words"
        direction="top"
        className="font-head font-bold text-3xl sm:text-4xl md:text-[46px] text-center md:text-left"
      />
      {/* Subtext and Button */}
      <div className="text-left">
        <p className="text-paragraph font-para text-sm sm:text-base">
          Effortlessly craft your resume using CVcraft’s free builder
          and expertly designed professional templates.
        </p>
        <button
          onClick={handleNavigate}
          className="px-6 py-3 mt-6 md:mt-3 font-semibold font-para text-sm text-white 
                     bg-gradient-to-r from-indigo-400 to-primary rounded-full shadow-xl 
                     hover:shadow-[0_6px_20px_rgba(40,88,193,0.4)] hover:scale-105 
                     transition-all duration-300"
        >
          Build My Resume
        </button>
      </div>
    </div>
  );
}
