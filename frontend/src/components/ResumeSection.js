import React from 'react'
import { PiReadCvLogoFill } from 'react-icons/pi'
import { BiSolidUserDetail } from 'react-icons/bi'
import { AiFillThunderbolt } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const ResumeSection = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/templates')
  };

  return (
    <div className='mt-36 relative text-center flex flex-col items-center'>
      <h1 className='font-para text-primary text-sm font-semibold'>
        PERFORMANCE DRIVEN DESIGNS
      </h1>
      <h2 className='font-head font-bold text-[46px] leading-tight head-gradient mt-5'>
        Build Your Resume with<br />
        Proven Professional Templates
      </h2>
      <p className='text-paragraph font-para text-sm mt-5'>
        Make a lasting impression with resume<br />
        designs that recruiters recognize, trust, and prefer.
      </p>

      <div className='flex justify-center gap-20 mt-10 cursor-pointer'>
        <div className='flex gap-1 items-center'>
          <PiReadCvLogoFill size={28} className='text-primary' />
          <p className='font-para font-medium text-paragraph text-sm'>ATS Friendly</p>
        </div>
        <div className='flex gap-1 items-center'>
          <BiSolidUserDetail size={28} className='text-primary' />
          <p className='font-para font-medium text-paragraph text-sm'>Skilled</p>
        </div>
        <div className='flex gap-1 items-center'>
          <AiFillThunderbolt size={28} className='text-primary' />
          <p className='font-para font-medium text-paragraph text-sm'>Trendy</p>
        </div>
      </div>

      <div className='relative w-full flex justify-center mt-10'>
        <img
          src='./resumes.png'
          alt='gradient-bg'
          className='-mt-24 -z-10'
          style={{
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent 0%, black 15%, black 96%, transparent 100%)',
            maskImage:
              'linear-gradient(to bottom, transparent 0%, black 15%, black 96%, transparent 100%)',
            WebkitMaskSize: '100% 100%',
            maskSize: '100% 100%',
          }}
        />
      </div>
      <button
        onClick={handleNavigate}
        className='group mt-6 border-[1.5px] border-primary rounded-3xl text-xs font-para font-semibold 
                   py-3 px-6 items-center overflow-hidden cursor-pointer transition-colors duration-300 
                   hover:bg-primary hover:text-white text-primary'
      >
        See More Templates
      </button>
    </div>
  )
}
export default ResumeSection;
