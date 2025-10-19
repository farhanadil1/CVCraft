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
                className='w-full h-fit absolute -z-10'
            />
            <div className='mx-20 grid grid-cols-3 gap-4'>
                <div>
                    <ATS />
                    <UserIcons />   
                </div>
                <div>
                    <img 
                        src='./iphone.png'
                        alt='iphone'
                        className='animate-slide-up delay-400'
                    />
                </div>
                 <div className='self-end'><DreamJob /></div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
