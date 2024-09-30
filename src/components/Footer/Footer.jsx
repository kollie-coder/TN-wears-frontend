import React from 'react'
import { FacebookLogo, InstagramLogo, YoutubeLogo } from '../../assets/icons'

const Footer = () => {
  return (
    <footer className="bg-neutral-800 h-[520px] text-white py-[127px]">
      <div className="container mx-auto  grid grid-cols-1 md:grid-cols-4 gap-[150px]">
        
        {/* First Grid: TN Wears with Social Logos */}
        <div>
          <h2 className="text-2xl mb-6">TN Wears</h2>
          <div className="flex space-x-4">
            <img src={YoutubeLogo} alt='youtube-logo'/>
            <img src={InstagramLogo} alt='youtube-logo'/>
            <img src={FacebookLogo} alt='youtube-logo'/>
          </div>
        </div>
        
        {/* Second Grid: Help & Information */}
        <div>
          <h2 className="text-2xl mb-6">HELP & INFORMATION</h2>
          <ul className="space-y-6 text-xl">
            <li><a href="#" className="hover:underline">Help</a></li>
            <li><a href="#" className="hover:underline">Track Order</a></li>
            <li><a href="#" className="hover:underline">Delivery and returns</a></li>
          </ul>
        </div>

        {/* Third Grid: More From TN Thrift */}
        <div>
          <h2 className="text-2xl mb-6">MORE FROM TN THRIFT</h2>
          <ul className="space-y-6 text-xl">
            <li><a href="#" className="hover:underline">Mobile and web apps</a></li>
            <li><a href="#" className="hover:underline">Gift Vouchers</a></li>
            <li><a href="#" className="hover:underline">Black Friday</a></li>
          </ul>
        </div>

        {/* Fourth Grid: Newsletter */}
        <div>
          <h2 className="text-2xl mb-6">NEWSLETTER</h2>
          <p className='text-xl mb-6'>Sign up for our newsletter</p>
          <form className="flex flex-col w-[328px] space-y-6">
            <label htmlFor="email" className="text-[#888787] text-lg">Email Address</label>
             <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="p-[15px] rounded border border-[#efe9e7]  text-[#272d30] text-lg"
              />
                  <button
                    type="submit"
                    className="bg-[#9b7e46] text-[#efe9e7] text-lg p-[15px] rounded-tl-sm rounded-tr-3xl rounded-bl-3xl rounded-br-sm hover:bg-gray-700 transition-colors"
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