import React, { useState } from 'react'
import { GoggleLogo, AppleLogo } from '../../assets/images';
import Login from './Login';
import Signup from './Signup';
import { Link } from 'react-router-dom';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
 
  return (
   <>

    {isLogin ? <Login/> : <Signup/>}

    <p className='text-xl flex gap-[8px]'>
      {isLogin ? "Don't have an account?" : "Already have an account?"}   
            <Link onClick={() => setIsLogin(!isLogin)}
              className='text-[#1b998b] text-xl'>
                {isLogin? "Sign Up" : "Log In"}
              </Link>
        </p>
     
        <div className='flex items-center justify-center pt-[27px] pb-[24px] gap-[21px] w-full'>
            <div className='flex flex-1 h-[1px] border border-[#747474]'/>

                <p className='text-xl'> OR </p>

            <div className='flex flex-1 h-[1px] border border-[#747474]'/>
        </div>

        <div className='flex items-center justify-center gap-5 pb-6'>
            <button>
                 <img src={AppleLogo} alt='apple-logo' />
            </button>
           <button>
                <img src={GoggleLogo} alt='goggle-logo' />
           </button>
           
        </div>

        <p className='text-xl leading-[33px]'>
           By registering, you accept the {""}
            <span className='text-[#1b998b] underline'>Terms of Service</span>
            {" "}and{" "} 
            <span className='text-[#1b998b] underline'>Privacy Policy</span>
        </p>
   </>
  )
}

export default AuthForm