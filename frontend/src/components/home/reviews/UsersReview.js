import React from 'react'

export default function UsersReview() {
  return (
    <div className='cursor-pointer mx-4'>
        <div className='mt-16  flex border-b-[1px] pb-6'>
            <img 
                src='./user1.png'
                alt='user-avatar'
                className='rounded-full w-16 h-16 mr-4'
            />
            <div className='items-center text-left mt-2.5 mr-20'>
            <h1 className='font-para font-semibold text-lg'>Adil Farhan</h1>
            <p className='font-para font-semibold text-paragraph text-sm'>Software Engineer</p>
            </div>
            <p className='font-para text-paragraph text-left text-base font-medium mt-2.5'>
                "CVcraft helped me land my dream job by creating an ATS-friendly resume<br/> 
                that stood out. The templates were easy to use and tailored for success."
            </p>
        </div>
        <div className='mt-10 flex border-b-[1px] pb-6'>
            <img 
                src='./user2.png'
                alt='user-avatar'
                className='rounded-full w-16 h-16 mr-4'
            />
            <div className='items-center text-left mt-2.5 mr-24'>
            <h1 className='font-para font-semibold text-lg'>Ashish Roy</h1>
            <p className='font-para font-semibold text-paragraph text-sm'>Quality Analyst</p>
            </div>
            <p className='font-para text-paragraph text-left text-base font-medium mt-2.5'>
                "CVcraft completely transformed the way I approached resume writing. I had <br/>
                been applying to jobs for months with little response, and I realized my <br/>
                resume wasn’t optimized for ATS systems. CVcraft’s builder made it incredibly <br/>
                easy to create a clean, professional layout that was tailored to my industry.”
            </p>
        </div>
        <div className='mt-10 flex'>
            <img 
                src='./user3.png'
                alt='user-avatar'
                className='rounded-full w-16 h-16 mr-4'
            />
            <div className='items-center text-left mt-2.5 mr-20'>
            <h1 className='font-para font-semibold text-lg'>Soophie Rayen</h1>
            <p className='font-para font-semibold text-paragraph text-sm'>Data Analyst</p>
            </div>
            <p className='font-para text-paragraph text-base text-left font-medium mt-2.5'>
                "I was struggling to get interview calls until I revamped my resume with <br/>
                CVcraft. The layout and keyword suggestions made all the difference."
            </p>
        </div>
        <button
          className="px-3 py-3 mt-16 font-semibold font-para text-xs text-white bg-primary rounded-3xl
                     shadow-[0_8px_15px_rgba(40,88,193,0.3)] hover:bg-accent2 transition-colors duration-300"
        >
          See More Reviews
        </button>
    </div>
  )
}
