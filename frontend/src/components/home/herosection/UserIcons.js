import React from 'react'

export default function UserIcons() {
  return (
    <div className='mt-10 md:mt-36 flex flex-col items-center md:items-start text-center md:text-left'>
      <img
        src='./usericons.png'
        alt='user-icons'
        className='h-9 w-24 md:h-12 md:w-32 object-contain'
        draggable={false}
      />
      <p className='text-[10px] md:text-xs font-para text-paragraph mt-2 font-medium leading-tight'>
        Farhan, Zen along with hundreds of others,<br />
        has succeeded in landing jobs and advancing<br />
        their careers with the help of CVcraft.
      </p>
    </div>
  )
}
