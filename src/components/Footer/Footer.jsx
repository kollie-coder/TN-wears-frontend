import React from 'react'
import { FacebookLogo, InstagramLogo, YoutubeLogo } from '../../assets/icons'

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white py-12 md:py-[127px]">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-14 sm:gap-12 xl:gap-8 px-4 md:px-6 items-center">
        
        {/* First Grid: TN Wears with Social Logos */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h2 className="text-xl md:text-2xl mb-4 md:mb-6">TN Wears</h2>
          <div className="flex space-x-4">
            <img src={YoutubeLogo} alt='youtube-logo' className="w-6 md:w-8" />
            <img src={InstagramLogo} alt='instagram-logo' className="w-6 md:w-8" />
            <img src={FacebookLogo} alt='facebook-logo' className="w-6 md:w-8" />
          </div>
        </div>
        
        {/* Second Grid: Help & Information */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h2 className="text-xl md:text-2xl mb-4 md:mb-6">HELP & INFORMATION</h2>
          <ul className="space-y-4 md:space-y-6 text-base md:text-xl">
            <li><a href="#" className="hover:underline">Help</a></li>
            <li><a href="#" className="hover:underline">Track Order</a></li>
            <li><a href="#" className="hover:underline">Delivery and returns</a></li>
          </ul>
        </div>

        {/* Third Grid: More From TN Thrift */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h2 className="text-xl md:text-2xl mb-4 md:mb-6">MORE FROM TN THRIFT</h2>
          <ul className="space-y-4 md:space-y-6 text-base md:text-xl">
            <li><a href="#" className="hover:underline">Mobile and web apps</a></li>
            <li><a href="#" className="hover:underline">Gift Vouchers</a></li>
            <li><a href="#" className="hover:underline">Black Friday</a></li>
          </ul>
        </div>

        {/* Fourth Grid: Newsletter */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h2 className="text-xl md:text-2xl mb-4 md:mb-6">NEWSLETTER</h2>
          <p className='text-base md:text-xl mb-4 md:mb-6'>Sign up for our newsletter</p>
          <form className="flex flex-col space-y-4 md:space-y-6 w-full max-w-xs">
            <label htmlFor="email" className="text-sm md:text-lg text-[#888787]">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="p-3 md:p-[15px] rounded border border-[#efe9e7] text-[#272d30] text-base md:text-lg"
            />
            <button
              type="submit"
              className="bg-[#9b7e46] text-[#efe9e7] text-base md:text-lg p-3 md:p-[15px] rounded-tl-sm rounded-tr-3xl rounded-bl-3xl rounded-br-sm hover:bg-gray-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer