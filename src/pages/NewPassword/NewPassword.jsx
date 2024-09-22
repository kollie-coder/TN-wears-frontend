import React, { useState } from 'react'
import { ArrowLeft } from '../../assets/icons';
import { Link } from 'react-router-dom';

const NewPassword = () => {
    const [step, setStep] = useState(1); // Track the current step

    const handleNext = () => {
        if (step < 3) {
            setStep(step + 1);
        }
    }

  return (
     <div className='bg-[#E6EBD5] min-h-screen flex items-center justify-center'>
      <div className='bg-white w-full max-w-[550px] rounded-lg shadow-lg p-[50px]'>
        
        {step ==1 && (
          <>    
            <h2 className='text-center text-4xl font-bold mb-4'>
                Set a new password
            </h2>

            <p className='text-center text-2xl leading-[30px] mb-6'>
               Create a new strong password here
            </p>

            <p className='text-center text-lg leading-[30px] mb-6'>
            Ensure it is at least 8 characters long and a combination
             of capital letters, small letters and special characters.
            </p>

            <div className="w-full p-[15px] border rounded-md mb-4 focus-within:ring-2 focus-within:ring-[#454545]">
            <input 
            type="password" 
            className="w-full focus:outline-none placeholder-gray-500" 
            placeholder="New Password" 
            required 
            />
            </div>

            <button 
              className='w-full bg-[#000] hover:bg-[#747474] text-white text-xl py-[15px] px-4 rounded-lg mb-4'
              onClick={handleNext}
            >
              NEXT
            </button>

            <Link 
              to="/auth"
              className='w-full flex gap-2 justify-center bg-[#ffff] text-black text-base px-4'>
            <img src={ArrowLeft} alt='arrow-left' className='w-6 h-6' />
              Back to Login
            </Link>
       </>
        )}

        {step === 2 && (
            <>
                 <h2 className='text-center text-4xl font-bold mb-4'>
                Set a new password
            </h2>

            <p className='text-center text-2xl leading-[30px] mb-6'>
               Confirm your new password
            </p>

            <div className="w-full p-[15px] border rounded-md mb-4 focus-within:ring-2 focus-within:ring-[#454545]">
            <input 
            type="password" 
            className="w-full focus:outline-none placeholder-gray-500" 
            placeholder="Confirm Password"  
            required 
            />
            </div>

            <button 
              className='w-full bg-[#000] hover:bg-[#747474] text-white text-xl py-[15px] px-4 rounded-lg mb-4'
              onClick={handleNext}
            >
              NEXT
            </button>

            <Link 
              to="/auth"
              className='w-full flex gap-2 justify-center bg-[#ffff] text-black text-base px-4'>
            <img src={ArrowLeft} alt='arrow-left' className='w-6 h-6' />
              Back to Login
            </Link>
        </>
        )}

        {step === 3 && (
            <>
                <h2 className='text-center text-4xl font-bold mb-4'>
                Congratulations!
                </h2>

                <p className='max-w-[445px] text-center text-2xl leading-[30px] mb-6'>
                   You have successfully reset your password, proceed to 
                   login with your new password!
                </p>

                <Link 
                to="/auth"
                className='w-full text-center block bg-[#000] hover:bg-[#747474] text-white text-xl py-[15px] px-4 rounded-lg'>
                LOGIN
                </Link>

            </>
        )}

    </div>
    </div>
  )
}

export default NewPassword