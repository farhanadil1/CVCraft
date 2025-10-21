import React from 'react'

export default function ATS() {
  return (
    <div className='h-[250px] w-[200px] font-para ml-0 sm:ml-20 bg-white -mt-4 shadow-xl hover:shadow-2xl
    transition duration-300 rounded-lg flex-shrink-0'>
        <h1 className='font-semibold text-lg text-center pt-2'>Free Templates</h1>
        <p className='text-paragraph text-[10px] font-medium text-center -mt-1'>ATS Friendly Resume</p>
        <div className='flex items-center justify-between w-full mt-2 gap-1'>
            <div className='bg-gray-200 h-32 w-4 rounded-r-md'></div>
            <div className='flex justify-center bg-gray-200 rounded-lg h-44 flex-1 mx-1'>
                <img 
                    src='./ats.png'
                    alt='ats-img'
                    className='object-contain p-2'
                />   
            </div>
            <div className='bg-gray-200 h-32 w-4 rounded-l-md'></div>
        </div>
    </div>
  )
}
