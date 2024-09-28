import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ArrowLeft, EmailDown } from '../../assets/icons';

const ForgetPassword = () => {
    const [isLinkSent, setIsLinkSent] = useState(false);

    const handleSendResetLink = () => {

        setIsLinkSent(true);
    }

  return (
     <div className='bg-[#E6EBD5] min-h-screen flex items-center justify-center'>
      <div className='bg-white w-full max-w-[550px] rounded-lg shadow-lg p-[50px]'>

          {/* Conditional Rendering based on link sent status */}
          {!isLinkSent ? (
            <>
                {/* Forget Password View */}
            <h2 className='text-center text-4xl font-bold mb-6'>
              Forget Password
            </h2>
            
            <p className='text-center text-lg leading-[30px] mb-6'>
                Don't worry. We have got you covered
            </p>

            <p className='text-center text-lg leading-[30px] mb-6'>
            Kindly input the email associated with your account and we will send you
             the instructions to reset your password
            </p>

            {/* Email Input */}
            <div className="w-full p-[15px] border rounded-md mb-6 focus-within:ring-2 focus-within:ring-[#454545]">
              <input 
                type="email" 
                className="w-full focus:outline-none placeholder-gray-500" 
                placeholder="Email" 
                required 
              />
            </div>

            {/* Send Reset Link Button */}
            <button 
              className='w-full bg-[#000] hover:bg-[#747474] text-white text-xl py-[15px] px-4 rounded-lg mb-6'
              onClick={handleSendResetLink}
            >
              Send Reset Link
            </button>

            {/* Back to Login Button */}
            <Link 
              to="/auth"
              className='w-full flex gap-2 justify-center bg-[#ffff] text-black text-base px-4'>
            <img src={ArrowLeft} alt='arrow-left' className='w-6 h-6' />
              Back to Login
            </Link>
            </>
          ) : (
            <>
             {/* Check Your Email View */}
             <div className='flex justify-center mb-6'>
                  <img src={EmailDown} alt='mail-icon'/>
             </div>
           
            <h2 className='text-center text-4xl font-bold mb-4'>
              Check Your Email
            </h2>

            <p className='text-center text-lg leading-[30px] mb-6'>
            We have sent you an email with instructions to reset your password. Please check your inbox
            </p>

            <p className='text-center text-lg leading-[30px] mb-6'>
            You will recieve an email with your password reset function shortly. If you don't receive the mail after 
            3 mins, Click the button below to request for a new link
            </p>

            {/* Re-send Reset Link Button */}
            <button 
              className='w-full bg-[#000] hover:bg-[#747474] text-white text-xl py-[15px] px-4 rounded-lg mb-6'
              onClick={handleSendResetLink}  // Re-sends reset link
            >
              RE-SEND RESET LINK
            </button>

            {/* Back to Login Button */}
            <Link 
              to="/auth"
              className='w-full flex gap-2 justify-center bg-[#ffff] text-black text-base px-4'>
            <img src={ArrowLeft} alt='arrow-left' className='w-6 h-6' />
              Back to Login
            </Link>
            </>
          )}
        </div>
        </div>
  )
}

export default ForgetPassword