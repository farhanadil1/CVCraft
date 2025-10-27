import React from 'react'
import { PiReadCvLogoFill } from 'react-icons/pi'
import { BiSolidUserDetail } from 'react-icons/bi'
import { AiFillThunderbolt } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

const ResumeSection = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/templates')
  };

  const cv = [
    {
      id:1, name:"Professional Minimalist", desc: "Clean, modern layout emphasizing clarity and readability. Perfect for corporate or office roles.", img:"./template2.png"
    },
    {
      id:2, name:"Creative Portfolio", desc: "Bold, colorful design showcasing your projects and skills. Ideal for designers, artists, and creatives.", img:"./cv4.png"
    },
    {
      id:3, name:"ATS-Friendly Optimized", desc: "Simple, keyword-focused format designed to pass applicant tracking systems. Perfect for HR-compliant.", img:"./cv3.png"
    }
  ]

  return (
    <div className='mt-16 md:mt-10 relative text-center flex flex-col items-center'>
      <h1 className='font-para text-primary text-sm font-semibold'>
        PERFORMANCE DRIVEN DESIGNS
      </h1>
      <h2 className='font-head font-bold text-3xl md:text-[46px] leading-tight head-gradient mt-5'>
        Build Your Resume with<br />
        Proven Professional Templates
      </h2>
      <p className='text-paragraph font-para text-sm mt-5'>
        Make a lasting impression with resume<br />
        designs that recruiters recognize, trust, and prefer.
      </p>

      <div className='flex justify-center gap-10 md:gap-20 mt-10 cursor-pointer mx-8'>
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

      <div className='absolute -z-10 w-full flex justify-center mt-12'>
        <img
          src='./gradient2.png'
          alt='gradient-bg'
          className='md:-mt-[110px] mt-20 object-cover -z-10'
          draggable={false}
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-12 my-12 items-center'>
        {cv.map((c, index) => (
          <div
            key={index}
            className={`md:max-w-72 mx-8 md:mx-0 ${
              index > 0 ? "hidden md:block" : ""
            }`}
          >
            <Link to={`/templates`}>
              <img
                src={c.img}
                alt='CV-Images'
                className='h-96 w-72 mx-auto md:mx-0 shadow-lg justify-center hover:scale-105 transition-transform duration-500 cursor-pointer'
                draggable={false}
              />
            </Link>
            <h1 className='text-lg hover:underline cursor-pointer text-left md:text-xl font-para font-semibold mt-8'>
              {c.name}
            </h1>
            <p className='text-paragraph font-para text-medium text-left mt-2'>
              {c.desc}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={handleNavigate}
        className="px-6 py-3 md:my-6 font-semibold font-para text-sm text-white 
                     bg-gradient-to-r from-indigo-400 to-primary rounded-full shadow-xl 
                     hover:shadow-[0_6px_20px_rgba(40,88,193,0.4)] hover:scale-105 
                     transition-all duration-300"
        >
          See More Templates
        </button>
    </div>
  )
}
export default ResumeSection;
