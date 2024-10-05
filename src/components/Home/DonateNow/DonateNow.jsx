import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { ImageCat1, ImageCat2, ImageCat3 } from '../../../assets/images';

const DonateNow = () => {
  const slides = [
    {
      backgroundImage: ImageCat1,
      text2: 'Have clothes you no longer use',
      text3: 'Transform Lives, Renew Wardrobes: Share the Love by Donating Your Preloved Clothes Today!',
      buttonText: 'DONATE NOW',
      gap: 'gap-[65px]'
    },
    {
      backgroundImage: ImageCat2,
      text1: 'New Users', 
      text2: 'get 15% Off',
      text3: 'Discover Your Style Journey: Shop Now and Enjoy 15% Off Your First Purchase! Embrace Fashion, Embrace Savings',
      buttonText: 'BUY NOW',
      gap: 'gap-[35px]'
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <section className="w-full h-[800px] flex justify-center items-center px-6 md:px-[66px] pt-8 md:pt-[76px] pb-8 md:pb-[75px] bg-[#9b7e46]">
      <div className="relative w-full h-full flex rounded-[10px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{
              background: `url(${slide.backgroundImage}) center/cover no-repeat`,
            }}
          >
            <div className={`flex flex-col ${slide.gap} px-16 md:px-[120px] xl:px-[297px] justify-center items-center h-full`}>
              <p className="text-center text-white text-[16px] md:text-[20px] lg:text-[25px] xl:text-[32px] font-normal">
                {slide.text1}
              </p>

              <h2 className="text-white text-[18px] md:text-[24px] lg:text-[32px] xl:text-[40px] font-bold">
                {slide.text2}
              </h2>

              <p className="text-center text-white text-[16px] md:text-[20px] lg:text-[26px] xl:text-[32px] font-normal">
                {slide.text3}
              </p>

              <button className="text-white text-sm md:text-xl w-[180px] md:w-[276px] px-[20px] py-[10px] md:px-[30px] md:py-[15px] bg-neutral-800 rounded-[5px]">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-4 lg:left-16 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full border-2 border-white z-20"
        >
          <BsArrowLeft size={25} />
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute right-4 lg:right-16 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full border-2 border-white z-20"
        >
          <BsArrowRight size={25} />
        </button>

        {/* Slide Indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center z-20">
          <div className="w-[300px] md:w-[450px] h-[3px] bg-white relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-[#9b7e46] transition-all duration-700"
              style={{ width: `${(currentSlide + 1) * (100 / slides.length)}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>

    
  )
}

export default DonateNow