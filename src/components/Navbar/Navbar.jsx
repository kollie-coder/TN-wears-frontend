import React, { useState } from 'react'
import { CartIcon, HeartIcon, MainLogo, ProfileIcon, SearchIcon } from '../../assets/icons'

const Navbar = ({ activeLink, setActiveLink }) => {

   // Function to set the active link
   const handleNavLinkClick = (link) => {
     setActiveLink(link);
   };
  return (
    <nav className='bg-white shadow-md px-4  h-[152px]'>
        <div className="mx-auto pl-[105px] pr-[84px] flex items-center justify-between gap-[98px] h-full">
        {/* Left Section: Logo and Navlinks */}
        <div className="flex items-center gap-[32px] h-full">
          {/* Logo */}
          <div className="h-full flex items-center">
            <img src={MainLogo} alt='main-logo' className='w-[104px] h-[130px] object-contain' />
          </div>
          
          {/* Nav Links */}
          <ul className="flex space-x-2 h-full items-center">
            <li className='h-full'>
              <a
                href="#thrifts"
                onClick={() => handleNavLinkClick('thrifts')}
                className={`h-full w-[154px] flex items-center justify-center px-3 py-2 text-black text-2xl ${
                  activeLink === 'thrifts' ? 'bg-[#e6ebd5] text-gray-900' : 'text-gray-600'
                } hover:bg-[#e6ebd5]`}
              >
                THRIFT
              </a>
            </li>
            <li className='h-full'>
              <a
                href="#originals"
                onClick={() => handleNavLinkClick('originals')}
                className={`h-full w-[185px] flex items-center justify-center px-3 py-2 text-black text-2xl ${
                  activeLink === 'originals' ? 'bg-[#fff] text-gray-900' : 'text-gray-600'
                } hover:bg-[#fff]`}
              >
                ORIGINALS
              </a>
            </li>
          </ul>
        </div>

         {/* Right Section: Icons and Donate Button */}
        
        <div className='flex items-center gap-10 pr-[84px]'>
          {/* Search Bar */}
        <div className="flex items-center w-[607px] h-[60px]  border-2 border-neutral-800 rounded-[5px] overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 px-4 focus:outline-none"
          />
          <img src={SearchIcon} alt='profile-icon' className='mr-[41px]'/>
        </div>

       
        <div className="flex items-center space-x-8">

          <div className='flex items-center gap-8'>
           <img src={ProfileIcon} alt='profile-icon' className='w-[30px] h-[30px]' />
          <img src={HeartIcon} alt='heart-icon' className='w-[30px] h-[30px]' />
          <img src={CartIcon} alt='cart-icon' className='w-[30px] h-[30px]' /> 
          </div>
          
         
          {/* Donate Button */}
          <button className="text-2xl bg-neutral-800 text-white px-4 py-[15px] w-[151px] rounded-lg hover:bg-gray-400">
            DONATE
          </button>
        </div>

        </div>
        
      </div>
    </nav>
  )
}

export default Navbar