import React from 'react';
import { ImageCat1, ImageCat2, ImageCat3, ImageCat4, ImageCat5 } from '../../../assets/images';

const StylesCat = () => {
    const categories = [
        { name: 'Cargoes', imgSrc: ImageCat1 }, 
        { name: 'Dresses', imgSrc: ImageCat2 },
        { name: 'Denim', imgSrc: ImageCat3 },
        { name: 'Under 5000', imgSrc: ImageCat4 },
        { name: 'Tees & Tank', imgSrc: ImageCat5 }
      ];
  return (
    <div className='w-full h-auto md:min-h-[575px] bg-neutral-800 px-[175px] pt-[113px] pb-[125px] justify-center items-center'>
        {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-[32px] font-normal text-white">Top Styles on Sale</h2>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Image */}
            <img
              src={category.imgSrc}
              alt={category.name}
              className="w-[229px] h-[187px] object-cover rounded-[10px] mb-6" // Responsive height and rounded corners
            />
            {/* Category Name */}
            <p className="text-white text-2xl font-normal">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StylesCat