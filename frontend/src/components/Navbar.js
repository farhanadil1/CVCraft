import React from 'react'
import { BsArrowUpRightCircle } from "react-icons/bs"
import { useNavigate, NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const navs = [
    {name: 'Home', link: '/'},
    {name: 'About', link: '/about'},
    {name: 'Templates', link: '/templates'}, 
    {name: 'Contact', link: '/contact'}
  ]

  const handleNavigate = () => {
    navigate('/auth')
  }
  return (
    <div className='flex justify-between mx-20 py-6 items-center'>
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
        <div className='flex justify-center text-xs items-center gap-x-6'>
          {navs.map((item, index) => (
            <NavLink

              key={index}
              to={item.link}
              end={item.link === '/'}
              className={({ isActive }) =>
                `font-para font-semibold px-2 py-1 rounded-xl cursor-pointer transition-all duration-300 border-b-2 
                ${isActive 
                  ? 'bg-primary text-white border-primary' 
                  : 'text-black hover:text-primary border-transparent hover:border-primary'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => {handleNavigate()}} 
            className="group flex border-[1.5px] border-primary rounded-3xl text-xs font-para font-semibold py-1 px-1.5 items-center overflow-hidden relative cursor-pointer
                      transition-colors duration-300 hover:bg-primary hover:text-white"
          >
            <p className="transition-colors duration-300 group-hover:text-white">Get Started</p>
            <BsArrowUpRightCircle
              size={20}
              className="ml-1 mb-0.5 text-primary group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1"
            />
          </button>
        </div>  
    </div>
  )
}

export default Navbar
