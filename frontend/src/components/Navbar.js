import React, { useState } from 'react';
import { BsArrowUpRightCircle } from "react-icons/bs";
import { useNavigate, NavLink, Link } from 'react-router-dom';
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navs = [
    {name: 'Home', link: '/'},
    {name: 'Templates', link: '/templates'},
    {name: 'About', link: '/about'}, 
    {name: 'Contact', link: '/contact'}
  ];

  const handleNavigate = () => navigate('/auth');

  return (
    <nav className="bg-page w-full relative border-b">
      <div className='flex justify-between mx-4 md:mx-20 py-4 items-center'>
        {/* Logo */}
        <div className='flex justify-start items-center gap-2'>
          <img 
            src='./logo.png'
            alt='CVCraft'
            className='h-10 w-16 cursor-pointer'
          />
          <Link to={`/`}>
            <h1 className='text-xl -ml-1 pt-2.5 font-bold font-head text-gradient cursor-pointer'>CVCraft</h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex justify-center text-xs items-center gap-x-6'>
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

        {/* Desktop Button */}
        <div className="hidden md:flex justify-end">
          <button
            onClick={handleNavigate} 
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

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white w-full px-4 py-4 flex flex-col gap-4 shadow-md">
          {navs.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              end={item.link === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `font-para font-semibold px-3 py-2 rounded-xl cursor-pointer transition-all duration-300
                ${isActive ? 'bg-primary text-white' : 'text-gray-800 hover:bg-primary hover:text-white'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <button
            onClick={() => {
              handleNavigate();
              setMenuOpen(false);
            }}
            className="flex items-center justify-center border-[1.5px] border-primary text-primary font-para font-semibold py-2 rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
          >
            Get Started <BsArrowUpRightCircle className="ml-1" />
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
