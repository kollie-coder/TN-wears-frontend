import React from 'react'
import { Logo } from '../../assets/images';

const AuthPage = () => {
  return (
    <div className='bg-[#E6EBD5] min-h-screen flex items-center justify-center'>
        <div className='bg-white w-full max-w-[550px] rounde-lg shadow-lg p-[50px]'>
            {/* Logo */}
            <div className='flex justify-center mb-6'>
                <img src= {Logo} alt='logo' className='w-25 h-25 rounded-full'/>
            </div>

            {/* Heading */}
            <h2 className='text-center text-2xl font-bold mb-4'> 
                Welcome to TN Thrift! Add a password and start shopping
             </h2>

        {/* Email Input */}
        <div className="w-full px-4 py-2 border rounded-md mb-4 focus-within:ring-2 focus-within:ring-blue-500">
          <input 
            type="email" 
            id="email" 
            className="w-full focus:outline-none placeholder-gray-500" 
            placeholder="Email" 
            required 
          />
        </div>

        {/* Password Input */}
        <div className="w-full px-4 py-2 border rounded-md mb-4 focus-within:ring-2 focus-within:ring-blue-500">
          <input 
            type="password" 
            id="password" 
            className="w-full focus:outline-none placeholder-gray-500" 
            placeholder="Password" 
            required 
          />
        </div>

             </div>
        </div>
    
    
  )
}

export default AuthPage