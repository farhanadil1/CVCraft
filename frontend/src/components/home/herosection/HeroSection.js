import React from 'react'
import ATS from './ATS'
import DreamJob from './DreamJob'
import HeroText from './HeroText'
import UserIcons from './UserIcons'

const HeroSection = () => {
  return (
    <div className='animate-slide-up duration-500'>
      <HeroText />
      <div className='relative pt-20'>
        <img 
          src='./gradient.png'
          alt='bg-gradient'
          className='w-full h-auto absolute -z-10 object-cover'
        />
        <div className='px-4 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div>
            <span className='hidden md:block'>
              <ATS />
            </span>
            <div className='hidden md:block'>
              <UserIcons />
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <img 
              src='./iphone.png'
              alt='iphone'
              className='w-full max-w-xs md:max-w-sm lg:max-w-md -mt-10 sm:-mt-0 h-auto animate-slide-up delay-400'
            />
            <div className='block md:hidden mt-6'>
              <UserIcons />
            </div>
          </div>
          <div className='hidden md:block self-end'>
            <DreamJob />
          </div>
        </div>
      </div>
    </div>
  )
}
export default HeroSection
