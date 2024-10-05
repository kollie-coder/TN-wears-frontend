import React from 'react'
import { HeroImage } from '../../../assets/images'

const Header = () => {
  return (
    
    <section className='w-full h-auto md:h-[570px] bg-[#1b998b] px-4 md:px-[84px] py-8 md:py-[60px] flex flex-col md:flex-row items-center justify-center'>
      {/* Left section */}
      <div className="bg-white w-full md:w-[791px] h-auto md:h-full px-6 md:px-[76px] py-8 md:py-[70px] rounded-tl-[10px] rounded-bl-[10px] flex flex-col justify-center">
        
        <div className='relative'>
          <div className="absolute left-[-45px] md:left-[-70px] top-[40%] transform -translate-y-1/2 -rotate-90 text-2xl md:text-[40px] font-bold">
            UP TO
          </div>

          {/* 10% Off and Description */}
          <div className="pl-4 md:pl-[15px] mt-[-10px] md:mt-[-40px]">
            <h1 className="text-2xl md:text-4xl font-bold">10% Off</h1>
            <p className="pt-3 md:pt-[12px] text-lg md:text-[32px] leading-7 md:leading-9 w-full md:w-[577px]">
              First purchase from the website gets you 10% off any product you pick.
            </p>
          </div>
        </div>
        
        {/* Shop Now Button */}
        <div>
          <p className='text-lg md:text-[32px] py-6 md:py-[40px]'>
            Use code: 5veej3
          </p>
          <button className='text-white text-base md:text-[32px] bg-[#9b7e46] px-6 py-3 md:px-4 md:py-[15px] rounded-lg'>
            Shop Now
          </button>
        </div>
      </div>
      
      {/* Right section: Hero Image */}
      <div className='w-full md:w-[770px] h-[300px] md:h-[450px] mt-6 md:mt-0'>
        <img 
          src={HeroImage}
          alt='hero-image'
          className='object-cover h-full w-full md:h-[450px] rounded-tl-[10px] rounded-bl-[10px] md:rounded-none -rotate-180'
        />
      </div> 
    </section>

   
  )
}

export default Header