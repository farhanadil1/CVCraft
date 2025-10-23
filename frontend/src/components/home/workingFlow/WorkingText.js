import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function WorkingText() {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/templates')
  }
  return (
    <div className='overflow-hidden'>
      <div className='grid grid-cols-1 md:grid-cols-2 px-4 md:px-20 gap-10 items-center'>
        {/* Text Section */}
        <div className='text-center sm:text-left'>
          <h1 className='font-para text-primary text-sm font-semibold mt-10'>HOW IT WORKS</h1>
          <h2 className='font-head font-bold text-3xl md:text-[46px] leading-tight head-gradient mt-5'>
            Just 3 simple steps<br />
            in under 5 minutes.
          </h2>
          <p className='text-paragraph font-para text-sm mt-5'>
            Landing your dream job might feel 
            out of reach but we’re here to make 
            it possible. Gain a true edge with the 
            top online resume builder expertly 
            crafted, data-driven, and trusted by 
            millions of professionals worldwide.
          </p>
          <button
            onClick={handleNavigate}
            className="px-6 py-3 mt-8 mb-5 font-semibold font-para text-sm text-white 
                     bg-gradient-to-r from-primary to-accent2 rounded-full shadow-lg 
                     hover:shadow-[0_6px_20px_rgba(40,88,193,0.4)] hover:scale-105 
                     transition-all duration-300"
        >
          Create Resume Now
        </button>
        </div>

        {/* Image Section */}
        <div className='flex justify-center md:justify-end'>
          <img
            src='./flow.svg'
            alt='scrible-resume'
            className='h-64 md:h-[560px] -mt-10 md:mt-4 object-contain'
            draggable={false}
          />
        </div>
      </div>
    </div>
  )
}
