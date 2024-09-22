import React from 'react'
import { Logo } from '../../assets/images'

const AccountVerify = () => {
  return (
    <div className='bg-[#E6EBD5] min-h-screen flex items-center justify-center'>
    <div className='bg-white w-full max-w-[550px] rounde-lg shadow-lg p-[50px]'>
        {/* Logo */}
        <div className='flex justify-center mb-6'>
            <img src= {Logo} alt='logo' className='w-25 h-25 rounded-full'/>
        </div> 

         {/* Heading */}
    <h2 className='text-center text-2xl font-bold mb-4'> 
            Kindly verify you account by inserting the code sent to your email.
         </h2>

    {/* Verification code Input */}
    <div className="w-full p-[15px] border rounded-md mb-4 focus-within:ring-2 focus-within:ring-[#454545]">
      <input 
        type="text" 
        id="verifyCode" 
        className="w-full focus:outline-none placeholder-gray-500" 
        placeholder="Input code" 
        required 
      />
    </div>

    <button className='w-full bg-[#000] hover:bg-[#747474] text-white text-xl py-[15px] px-4 rounded-lg mb-4'>
        CONTINUE
    </button>


    <p className='text-xl leading-[33px]'>
       By registering, you accept the {""}
        <span className='text-[#1b998b] underline'>Terms of Service</span>
        {" "}and{" "} 
        <span className='text-[#1b998b] underline'>Privacy Policy</span>
      </p>

         </div>
    </div>
  )
}

export default AccountVerify