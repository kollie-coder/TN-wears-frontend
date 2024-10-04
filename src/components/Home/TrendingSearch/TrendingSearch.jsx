import React, { useRef, useState } from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TrendingImg1, TrendingImg2, TrendingImg3, TrendingImg4, TrendingImg5, TrendingImg6 } from '../../../assets/images';

const TrendingSearch = () => {
    const products = [
        {
          id: 1,
          name: "Ladies jeans in blue color",
          price: "₦2000",
          shipping: "+₦1200 for shipping",
          image: TrendingImg1,
        },
        {
          id: 2,
          name: "Ladies Nike top in black color",
          price: "₦2500",
          shipping: "+₦1200 for shipping",
          image: TrendingImg2,
        },
        {
          id: 3,
          name: "Ladies crop top in white color",
          price: "₦6000",
          shipping: "+₦1000 for shipping",
          image: TrendingImg3,
        },
        {
          id: 4,
          name: "Ladies denim shirt in blue color",
          price: "₦2500",
          shipping: "+₦1850 for shipping",
          image: TrendingImg4,
        },
        {
          id: 5,
          name: "Men suit in black color",
          price: "₦4000",
          shipping: "+₦2200 for shipping",
          image: TrendingImg5,
        },
        {
          id: 6,
          name: "Men suit",
          price: "₦4500",
          shipping: "+₦1200 for shipping",
          image: TrendingImg6,
        },
      ];
      const [showArrows, setShowArrows] = useState({ left: false, right: true });
      const sliderRef = useRef(null);
      const [likedItems, setLikedItems] = useState({}); // Tracks liked products by id
    
      const handleScroll = (direction) => {
        const scrollAmount = sliderRef.current.clientWidth;
        const slider = sliderRef.current;
    
        if (direction === "left") {
          slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
          slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    
        // Check the scroll position and show/hide arrows accordingly
        setTimeout(() => {
          const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
          if (slider.scrollLeft <= 0) {
            setShowArrows({ left: false, right: true });
          } else if (slider.scrollLeft >= maxScrollLeft) {
            setShowArrows({ left: true, right: false });
          } else {
            setShowArrows({ left: true, right: true });
          }
        }, 300);
      };

      const toggleLike = (id) => {
        setLikedItems((prev) => ({
          ...prev,
          [id]: !prev[id], // Toggle like status
        }));
      };

  return (
   <section className='w-full h-[584px] bg-[#1b998b]'>
        <div className="relative w-full">
          <div className="pl-[104px] mt-[70px] mb-[61px]">
            <h2 className="text-black text-[32px] font-normal">Trending Searches</h2>
          </div>

          <div className="relative">
            {/* Left Arrow */}
            {showArrows.left && (
              <button
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
                onClick={() => handleScroll("left")}
              >
                <IoIosArrowBack size={24} />
              </button>
            )}

            {/* Cards Wrapper */}
            <div
              ref={sliderRef}
              className="flex overflow-x-scroll space-x-4 custom-scrollbar-hide pl-[104px]"
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="min-w-60 p-4 relative"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[237.94px] object-cover"
                    />

                    {/* Love Icon */}
                    <button
                      onClick={() => toggleLike(product.id)}
                      className={`absolute bottom-4 right-4 p-2 rounded-full ${
                        likedItems[product.id]
                          ? "bg-red-500 text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      <AiOutlineHeart size={24} />
                    </button>
                  </div>

                  <div className="mt-[12px]">
                    <h3 className="text-black text-lg font-normal max-w-60 overflow-hidden text-ellipsis whitespace-nowrap">{product.name}</h3>
                    <p className="text-black text-xl font-bold pt-[8px]">{product.price}</p>
                    <p className="text-black text-lg font-normal">{product.shipping}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            {showArrows.right && (
              <button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
                onClick={() => handleScroll("right")}
              >
                <IoIosArrowForward size={24} />
              </button>
            )}
          </div>
        </div>
      </section>
  )
}

export default TrendingSearch