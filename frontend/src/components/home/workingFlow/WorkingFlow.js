import React from 'react'
import WorkingText from './WorkingText'
import WorkingCircle from './WorkingCircle'

const WorkingFlow = () => {
  return (
    <div className='md:mt-28 min-[1280px]:max-w-6xl min-[1280px]:mx-auto min-[1920px]:mt-20'>
        <WorkingText />
        <WorkingCircle />
    </div>
  )
}

export default WorkingFlow
