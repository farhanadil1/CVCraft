import React, { useState, useEffect, useRef } from 'react';
import { BsArrowUpRightCircle, BsPersonCircle } from "react-icons/bs";
import { useNavigate, NavLink, Link } from 'react-router-dom';
import { HiMenu, HiX } from "react-icons/hi";
import Cookies from 'js-cookie';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { getAccessToken } from '../utils/auth';


const API = process.env.REACT_APP_API_URL;
const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("")
  const dropdownRef = useRef(null);

  const navs = [
    { name: 'Home', link: '/' },
    { name: 'Templates', link: '/templates' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' }
  ];

  useEffect(() => {
    const userFromCookie = Cookies.get("username");
    if (userFromCookie) {
      setUsername(userFromCookie);
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigate = () => navigate('/auth');

  const handleLogout = async () => {
    try {
      await toast.promise(
        axios.post(`${API}/users/logout` , {}, { 
          withCredentials: true,
          headers: {
          Authorization: `Bearer ${getAccessToken()}`
          }
        }),
        {
          loading: 'Logging out...',
          success: 'Logged out successfully!',
          error: 'Logout failed!',
        },
        {
          duration: 2000,
        }
      );
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      Cookies.remove('username');
      Cookies.remove('accessToken');
      Cookies.remove('refreshToken');
      localStorage.removeItem("draftFormData");
      setIsLoggedIn(false);
      setDropdownOpen(false);
      window.location.reload();
    
    } catch (err) {
      console.error(err);
      toast.error('Logout failed! Check console.', {
        duration: 2000,
      });
    }
  };

  const renderDesktopMenu = () => (
    <div className='hidden md:flex justify-center text-xs items-center gap-x-6'>
      {navs.map((item, index) => (
        <NavLink
          key={index}
          to={item.link}
          end={item.link === '/'}
          className={({ isActive }) =>
            `font-para font-semibold px-2 py-1 rounded-xl cursor-pointer transition-all duration-300 border-b-2 
            ${isActive
              ? 'bg-indigo-400 text-white border-indigo-400'
              : 'text-black hover:text-indigo-400 border-transparent hover:border-indigo-400'}`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );

  const renderUserButton = () => {
    if (!isLoggedIn) {
      return (
        <button
          onClick={handleNavigate}
          className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-400 text-indigo-400 font-para font-semibold text-sm transition-all duration-300 overflow-hidden shadow-[0_4px_10px_rgba(40,88,193,0.15)] hover:shadow-[0_6px_20px_rgba(40,88,193,0.25)]"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
          <span className="relative z-10 transition-all duration-300 group-hover:text-white">Get Started</span>
          <BsArrowUpRightCircle
            size={18}
            className="relative z-10 text-indigo-400 group-hover:text-white transform transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
          />
        </button>
      );
    }

    return (
      <div ref={dropdownRef} className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="inline-flex items-center text-indigo-400 hover:text-indigo-600 focus:outline-none"
        >
          <BsPersonCircle size={28} />
          <span className='ml-1 flex items-center font-para mt-1 font-semibold text-gray-950 text-xs'>
            <p className='text-paragraph font-medium font-para text-xs m-1'>Hello,</p>
            {username}</span>
        </button>
        
        {dropdownOpen && (
          <div className="absolute rounded right-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg z-50">
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    );
  };

  const renderMobileMenu = () => (
    <div className="md:hidden text-center bg-white w-full px-4 py-4 flex flex-col gap-4 shadow-md">
      {navs.map((item, index) => (
        <NavLink
          key={index}
          to={item.link}
          end={item.link === '/'}
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            `font-para font-semibold px-3 py-2 rounded-xl cursor-pointer transition-all duration-300
            ${isActive ? 'text-primary font-bold' : 'text-gray-800  hover:text-accent'}`
          }
        >
          {item.name}
        </NavLink>
      ))}
      <div className='flex justify-center'>
      <button
        onClick={() => {
          isLoggedIn ? handleLogout() : handleNavigate();
          setMenuOpen(false);
        }}
        className="flex items-center w-fit px-2 text-center justify-center font-para font-semibold py-2 rounded-xl hover:text-primary transition-all duration-300"
      >
        {isLoggedIn ? 'Logout' : 'Get Started'} {isLoggedIn ? null : <BsArrowUpRightCircle className="ml-1" />}
      </button>
      </div>
    </div>
  );

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <nav className="bg-page w-full relative border-b">
        <div className='flex justify-between mx-4 md:mx-20 py-4 items-center'>
          <Link to={`/`}>
            <div className='flex justify-start items-center gap-2'>
              <img src='./logo.png' alt='CVCraft' className='h-10 w-16 cursor-pointer' draggable={false} />
              <h1 className='text-xl -ml-1 pt-2.5 font-bold font-head text-gradient cursor-pointer'>CVCraft</h1>
            </div>
          </Link>

          {renderDesktopMenu()}
          <div className="hidden md:flex justify-end relative">{renderUserButton()}</div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>

        {menuOpen && renderMobileMenu()}
      </nav>
    </>
  );
};

export default Navbar;
