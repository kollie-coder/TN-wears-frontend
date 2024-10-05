import React from 'react'

const NewArrivals = () => {
  return (
    <section className='h-auto md:min-h-[410px] px-6 md:px-20 lg:px-40 xl:px-72 py-16 bg-[#1b998b] flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center text-center'>
        <h1 className='text-black text-xl sm:text-2xl lg:text-3xl font-normal mb-10 sm:mb-12'>
          There are already enough awesome clothes on the planet. Let's wear them.
        </h1>

        <button className='px-6 py-3 bg-neutral-800 rounded-lg text-white text-base sm:text-lg lg:text-2xl'>
          SHOP NEW ARRIVALS
        </button>
      </div>
    </section>
   
  )
}

export default NewArrivals