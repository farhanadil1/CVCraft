import React from 'react'

export default function WorkingText() {
  return (
    <div className='overflow-hidden'>
    <div className='grid grid-cols-2 mx-20'>
        <div>
            <h1 className='font-para text-primary text-sm font-semibold'>HOW IT WORKS</h1>
            <h2 className='font-head font-bold text-[46px] leading-tight head-gradient mt-5'>
                Just 3 simple steps<br/>
                in under 5 minutes.
            </h2>
            <p className='text-paragraph font-para text-sm mt-5'>
                Landing your dream job might feel <br/>
                out of reach but we’re here to make <br/>
                it possible. Gain a true edge with the <br/>
                top online resume builder expertly <br/>
                crafted, data-driven, and trusted by <br/>
                millions of professionals worldwide.
            </p>
            <button
                className="px-3 py-3 mt-8 mb-5 font-semibold font-para text-xs text-white bg-primary rounded-3xl
                            shadow-[0_8px_15px_rgba(40,88,193,0.3)] hover:bg-accent2 transition-colors duration-300"
                >
                Build My Resume
            </button>
        </div>

        <div>
            <img
                src='./workicon.png'
                alt='scrible-resume'
                className='-mt-16 h-[560px] ml-28'
            />
        </div>
      
    </div>
    </div>
  )
}
