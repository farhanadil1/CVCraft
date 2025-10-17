import React from 'react'

export default function HeroText() {
  return (
    <div className='grid grid-cols-2 mx-20 pt-10'>
        <div className='font-head head-gradient font-bold text-[46px] leading-tight'>
            Create a Job Ready <br /> Resume in Minutes
        </div>
        <div>
            <p className='text-paragraph'>Effortlessly craft your resume using CVcraft’s free builder<br /> 
                and expertly designed professional templates.
            </p>
            <button className='px-3 py-3 mt-4 font-semibold font-para text-xs text-white bg-primary rounded-3xl
                shadow-[0_8px_15px_rgba(40,88,193,0.3)] hover:bg-accent2 transition-colors duration-300 shadow-primary/50'>
                Build My Resume
            </button>
        </div>
    </div>
  )
}
