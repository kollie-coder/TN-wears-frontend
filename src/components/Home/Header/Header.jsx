import React from 'react'
import { HeroImage } from '../../../assets/images'

const Header = () => {
  return (
    
    <section className='w-full h-[570px] bg-[#1b998b] px-[84px] py-[60px] flex items-center justify-center'>
    {/* Left section */}
    <div className="bg-white w-[791px] h-full px-[76px] py-[70px] rounded-tl-[10px] rounded-bl-[10px] flex flex-col justify-center">
        
        <div className='px-8 pt-8 relative'>
          <div className="absolute left-[-45px] top-[50%] transform -translate-y-1/2 -rotate-90 text-[40px] font-bold">
          UP TO
        </div>

        {/* 10% Off and Description */}
        <div className="pl-[15px] mt-[-40px] ">
          <h1 className="text-4xl font-bold">10% Off</h1>
          <p className="pt-[12px] text-[32px] leading-9 w-[577px]">
            First purchase from the website gets you 10% off any product you pick.
          </p>
        </div>
        </div>
        
        
        {/* Shop Now Button */}
      <div>
        <p className='text-[32px] py-[40px]'>
          Use code: 5veej3
          </p>
        <button className='text-white text-[32px]
         bg-[#9b7e46] px-4 py-[15px] rounded-lg'>
          Shop Now
        </button>
      </div>
        </div>
        
        <div className='w-[770px] h-[450px]'>
          <img 
          src={HeroImage}
           alt='hero-image'
           className='-rotate-180 h-[450px] rounded-tl-[10px] rounded-bl-[10px]'
           />
        </div> 
   </section>

   
  )
}

export default Header