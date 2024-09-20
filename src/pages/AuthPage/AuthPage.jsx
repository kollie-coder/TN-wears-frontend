import React from 'react'
import { Logo } from '../../assets/images';

const AuthPage = () => {
  return (
    <div className='bg-[#E6EBD5] min-h-screen flex items-center justify-center'>
        <div className='bg-white w-full max-w-md rounde-lg shadow-lg p-6'>
            {/* Logo */}
            <div className='flex justify-center mb-6'>
                <img src= {Logo} alt='logo'/>
            </div>
        </div>
    
    </div>
  )
}

export default AuthPage