import React from 'react'
import { ImageCat1, ImageCat2, ImageCat3, ImageCat4, ImageCat5, TrendingImg1, TrendingImg2, TrendingImg3, TrendingImg4, TrendingImg5, TrendingImg6 } from '../../../assets/images';

const PopularCat = () => {
    const categories = [
        { id: 1, name: 'Denim', image: TrendingImg1 },
        { id: 2, name: 'Cargoes', image: TrendingImg2},
        { id: 3, name: 'Jackets', image: TrendingImg3},
        { id: 4, name: 'Hoodies', image: TrendingImg4 },
        { id: 5, name: 'Sportwears', image: TrendingImg5 },
        { id: 6, name: 'Tees & tanks', image: TrendingImg6 },
        { id: 7, name: 'Trousers', image: ImageCat1 },
        { id: 8, name: 'Polo', image: ImageCat2 },
        { id: 9, name: 'T-shirts', image: ImageCat3 },
        { id: 10, name: 'Jeans', image: ImageCat4 },
        { id: 11, name: 'Skirts', image: ImageCat5 },
        { id: 12, name: 'Coats', image: TrendingImg2 },
        { id: 13, name: 'Summer Wears', image: TrendingImg3 },
        { id: 14, name: 'Joggers', image: TrendingImg4 },
      ];
  return (
    <section className='min-h-[700px] px-[20px] md:px-[105px] pt-[68px] pb-[71px] bg-neutral-800 flex flex-col justify-center'>
      <h1 className='text-white text-[24px] md:text-[32px] font-normal mb-[40px]'>
        Explore Popular Categories
      </h1>
      
      {/* Image Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-[20px] md:gap-[30px]'>
        {categories.map((category) => (
          <div key={category.id} className='flex flex-col items-center'>
            <div className='w-[153.13px] h-[150px] bg-gray-300 rounded-full overflow-hidden'>
              <img
                src={category.image}
                alt={category.name}
                className='w-full h-full object-cover'
              />
            </div>
            <p className='text-white text-base font-normal md:text-2xl mt-[10px]'>{category.name}</p>
          </div>
        ))}
      </div>
    </section>
   
  )
}

export default PopularCat