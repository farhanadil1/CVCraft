import React from 'react'
import UsersReview from './UsersReview'

export default function Review() {
  return (
    <div className='mt-16 relative text-center flex flex-col items-center'>
      <h1 className='font-para text-primary text-sm font-semibold'>
        REFRENCES
      </h1>
      <h2 className='font-head font-bold text-3xl md:text-[46px] mx-4 leading-tight head-gradient mt-5'>
        Success Stories From Professionals <br/>
        Excelling in Top Organizations
      </h2>
      <UsersReview />
    </div>
  )
}
