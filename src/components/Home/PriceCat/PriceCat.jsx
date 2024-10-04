import React from 'react'
import { TrendingImg1, TrendingImg2, TrendingImg3, TrendingImg4 } from '../../../assets/images';

const PriceCat = () => {
    const cards = [
        {
          id: 1,
          title: "Summer Wears",
          priceButtons: ["Under 2000", "Under 5000"],
          image: TrendingImg1,
          bgColor: "bg-neutral-800",
          textColor: "text-white",
          borderColor: "border-white"
        },
        {
          id: 2,
          title: "Denim",
          priceButtons: ["Under 2000", "Under 5000"],
          image: TrendingImg2,
          bgColor: "bg-[#1b998b]",
          textColor: "text-black",
          borderColor: "border-black",
        },
        {
          id: 3,
          title: "Tee & tanks",
          priceButtons: ["Under 2000", "Under 5000"],
          image: TrendingImg3,
          bgColor: "bg-[#1b998b]",
          textColor: "text-black",
          borderColor: "border-black"
        },
        {
          id: 4,
          title: "Cargos",
          priceButtons: ["Under 2000", "Under 5000"],
          image: TrendingImg4,
          bgColor: "bg-neutral-800",
          textColor: "text-white",
          borderColor: "border-white",
        },
      ];
  return (
    <section className="w-full py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`flex flex-col md:flex-row items-center justify-between h-auto md:h-[300px] rounded-lg shadow-lg ${card.bgColor}`}
          >
            {/* Left Container */}
            <div className={`w-full md:w-3/5 h-auto md:h-[300px] p-6 md:pl-[20px] lg:pl-[40px] md:pt-[26px] lg:pt-[46px] md:pr-[45px] xl:pr-[79px]`}>
              <h2 className={`text-[24px] md:text-[28px] xl:text-[32px] font-normal mb-6 md:mb-[24px] xl:mb-[28px] ${card.textColor}`}>
                {card.title}
              </h2>
              <div className="flex flex-col space-y-[15px] md:space-y-[20px] xl:space-y-[25px]">
                <button className={`${card.textColor} text-base md:text-lg lg:text-2xl px-[20px] md:px-[10px] lg:px-[30px] py-[10px] md:py-[10px] lg:py-[15px] rounded-[5px] border ${card.borderColor}`}>
                  {card.priceButtons[0]}
                </button>
                <button className={`${card.textColor} text-base md:text-lg lg:text-2xl px-[20px] md:px-[10px] lg:px-[30px] py-[10px] md:py-[10px] lg:py-[15px] rounded-[5px] border ${card.borderColor}`}>
                  {card.priceButtons[1]}
                </button>
              </div>
            </div>

            {/* Right Container with Image */}
            <div className="w-full md:w-2/5 flex justify-center">
              <img
                src={card.image}
                alt={card.title}
                className="w-full md:w-[300px] md:h-[300px] object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PriceCat