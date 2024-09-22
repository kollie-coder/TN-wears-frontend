import React from 'react'
import { Logo } from '../../assets/images';
import { AuthForm } from '../../components';


const AuthPage = () => {
    
  
  return (
    <div className='bg-[#E6EBD5] min-h-screen flex items-center justify-center'>
        <div className='bg-white w-full max-w-[550px] rounde-lg shadow-lg p-[50px]'>
            {/* Logo */}
            <div className='flex justify-center mb-6'>
                <img src= {Logo} alt='logo' className='w-25 h-25 rounded-full'/>
            </div> 

            <AuthForm />

             </div>
        </div>
    
    
  )
}

export default AuthPage