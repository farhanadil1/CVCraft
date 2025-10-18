import React from 'react'
import { AiFillTwitterCircle } from "react-icons/ai";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='mt-20 mx-20'>
      <div className='flex justify-between pb-6 border-b border-gray-300 '>
        <div className='flex justify-start'>
            <img 
                src='./logo.png'
                alt='CVCraft'
                className='h-10 w-16 cursor-pointer'
            />
            <Link to={`/`}>
            <h1 className='text-xl -ml-1 pt-2.5 font-bold font-head text-gradient cursor-pointer'>CVCraft</h1>
            </Link>
        </div>
        <div className='gap-3 rounded-full flex text-primary items-center'>
          <a href='https://x.com/?lang=en-in' target='blank'><AiFillTwitterCircle size={40} /></a>
          <a href='https://www.linkedin.com/' target='blank'><TbBrandLinkedinFilled size={40} /></a>
          <a href='https://www.facebook.com/' target='blank'><FaFacebook size={36} /></a>
          <a href='https://www.instagram.com/' target='blank'><RiInstagramFill size={39} /></a> 
          </div>
      </div>  
      <div className='mt-12'>
        <div className='grid grid-cols-5 pb-16 border-b border-gray-300'>
          <div className='col-span-2 ml-4'>
            <h1 className='font-para font-bold text-2xl'>Stay Updated</h1>
            <p className='font-para text-paragraph mt-6 text-sm font-medium'>
              Join our Newslater to stay upto date on <br/> features and releases.
            </p>
            <div className='flex flex-row'>
              <input 
                type='email'
                placeholder='Enter your email'
                className='mt-6 rounded-3xl border border-gray-300 py-2.5 px-4
                focus:outline-none focus:ring-1 focus:ring-primary'
              />
              <button
                className="px-3 py-3 mt-6 ml-4 font-semibold font-para text-xs text-white bg-primary rounded-3xl
                          shadow-[0_8px_15px_rgba(40,88,193,0.3)] hover:bg-accent2 transition-colors duration-300"
              >
                Subscribe
              </button>
            </div>
            <p className='font-para text-paragraph mt-7 text-sm font-medium'>
              By Subscribing you agree with our Privacy Policy and <br/>
              provide consent to recieve updates from our company</p>
          </div>
          <div className='col-span-3 mr-4'>
            <div className='flex justify-between gap-6'>
              <div className='ml-6'>
                <h1 className='text-sm font-para font-semibold'>Resume</h1>
                <p className='font-para text-paragraph font-normal text-xs mt-4'>Create Resume</p>
                <p className='font-para text-paragraph font-normal text-xs mt-3'>Resume Examples</p>
                <p className='font-para text-paragraph font-normal text-xs mt-4'>Resume Templates</p>
              </div>
              <div className='ml-6'>
                <h1 className='text-sm font-para font-semibold'>Resources</h1>
                <p className='font-para text-paragraph font-normal text-xs mt-4'>Resume Help</p>
                <p className='font-para text-paragraph font-normal text-xs mt-3'>Job interview</p>
                <p className='font-para text-paragraph font-normal text-xs mt-4'>Career</p>
              </div>
              <div className='ml-6'>
                <h1 className='text-sm font-para font-semibold'>Our Company</h1>
                <p className='font-para text-paragraph font-normal text-xs mt-4'>About Us</p>
                <p className='font-para text-paragraph font-normal text-xs mt-3'>Pricing</p>
                <p className='font-para text-paragraph font-normal text-xs mt-4'>Site Map</p>
              </div>
              <div className='ml-6'>
                <h1 className='text-sm font-para font-semibold'>Support</h1>
                <p className='font-para text-paragraph font-normal text-xs mt-4'>Help Section</p>
                <p className='font-para text-paragraph font-normal text-xs mt-3'>FAQ</p>
                <p className='font-para text-paragraph font-normal text-xs mt-4'>Contact Us</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-between pb-6 mt-4'>
          <p className='font-para text-paragraph font-medium text-xs'>Copyright 2025 - CVCraft</p>
          <div className='flex justify-between gap-2'>
            <p className='font-para text-paragraph font-medium text-xs ml-4'>Privacy Policy</p>
            <p className='font-para text-paragraph font-medium text-xs ml-4'>Terms of Service</p>
            <p className='font-para text-paragraph font-medium text-xs ml-4'>Cookies Setting</p>
          </div>
        </div> 
      </div>    
    </div>
  )
}

export default Footer
