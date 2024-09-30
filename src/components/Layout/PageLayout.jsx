import React, { useState } from 'react'
import Banner from '../Banner/Banner'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


const PageLayout = ({ children }) => {
    const [activeLink, setActiveLink] = useState('thrifts');

  return (
    <section className='min-h-screen flex flex-col'>
       <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
       {activeLink === 'thrifts' && <Banner />}
        <div className='bg-white w-full h-full flex-1 flex flex-col large-screen'>
            {children}
        </div>

        <Footer />
    </section>
  )
}

export default PageLayout