import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
  return (
   <>
      {/* Heading */}
     <h2 className='text-center text-2xl font-bold mb-4'> 
                Welcome Back!
             </h2>

        {/* Email Input */}
        <div className="w-full p-[15px] border rounded-md mb-4 focus-within:ring-2 focus-within:ring-[#454545]">
          <input 
            type="email" 
            id="email" 
            className="w-full focus:outline-none placeholder-gray-500" 
            placeholder="Email" 
            required 
          />
        </div>

        {/* Password Input */}
        <div className="w-full relative p-[15px] border rounded-md mb-4 focus-within:ring-2 focus-within:ring-[#454545]">
          <input 
            type={passwordVisible ? "text" : "password"} 
            id="password" 
            className="w-full focus:outline-none placeholder-gray-500" 
            placeholder="Password" 
            required 
          />

            <span 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
            onClick={togglePasswordVisibility}  // Toggle visibility on click
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

       {/* Stay signed in and Forget Password */}
        <div className="flex items-center justify-between mb-6">
        {/* Checkbox and Stay signed in */}
        <div className="flex items-center">
            <input type="checkbox" id="staySignedIn" className="mr-2 w-5 h-5 rounded-md" />
            <label htmlFor="staySignedIn" className="text-lg">Stay signed in</label>
        </div>

        {/* Forget Password Link */}
        <Link to="/forgot-password" className="text-lg text-[#1b998b]">
            Forgot password?
        </Link>
        </div>

        <button className='w-full bg-[#000] hover:bg-[#747474] text-white text-xl py-[15px] px-4 rounded-lg mb-4'>
            CONTINUE
        </button>


   </>
  )
}

export default Login