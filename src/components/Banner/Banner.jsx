import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CountryLogo } from '../../assets/icons'
import { Chair } from '../../assets/images';

const Banner = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    { name: 'New In', id: 'newIn' },
    { name: 'Premium', id: 'premium' },
    { name: 'Maternity', id: 'maternity' },
    { name: 'Plus', id: 'plus' },
    { name: 'Men', id: 'men' },
    { name: 'Women', id: 'women' },
    { name: 'Kids', id: 'kids' },
    { name: 'Deals', id: 'deals' },
    { name: 'Summer', id: 'summer' },
    { name: 'Trending', id: 'trending' },
  ];

  // Example data structure for subcategories with images
  const subcategoryData = {
    newIn: {
      headers: [
        { 
          title: 'New Products', 
          subcategories: ['View all', 'Clothing', 'T-Shirts & Vests', 'Jeans & Trousers', 'Shorts', 'Swimwear', 'Sportswear', 'Underwear'] 
        },
        { 
          title: 'New In: Today', 
          subcategories: ["View all", "Clothing", "Men's clothing", "Woman's Clothing" ] 
        },
        { 
          title: 'Now In: Selling Fast', 
          subcategories: ["View all", "Clothing", "Men's Clothing", "Woman's Clothing"] 
        }
      ],
      image: Chair
    },
    premium: {
      headers: [
        { 
          title: 'New Products', 
          subcategories: ['New Arrivals', 'New With Tags', 'Clearance', 'Must-Have Outerwear', 'Premium Denim', 'Party Styles'] 
        },
        { 
          title: 'Categories', 
          subcategories: ['Dresses', 'Tops', 'Sweaters', 'Coats & Jackets', 'Jeans', 'Pants', 'Skirts', 'Shorts', 'Swimwear', 'Activewear'] 
        },
        { 
          title: 'New Premium: Selling Fast', 
          subcategories: ["View all", "Clothing", "Men's Clothing", "Women's Clothing"] 
        }
      ],
      image: 'https://via.placeholder.com/300x300'
    },
    maternity: {
      headers: [
        { 
          title: 'New Products', 
          subcategories: ['New Arrivals', 'New With Tags', 'Dresses under 2000', 'Tops Under 3000', 'Pants From 2000', 'Jeans from 5000', 'Wears To Work'] 
        },
        { 
          title: 'Categories', 
          subcategories: ['All Maternity', 'Dresses', 'Sweaters', 'Coats & Jackets', 'Tops', 'Pants', 'Skirits', 'Shorts', 'Swimwear', 'Activewear'] 
        },
        { 
          title: 'New Maternity: Selling Fast', 
          subcategories: ["View all", "Clothing", "Men's Clothing", "Women's Clothing"] 
        }
      ],
      image: 'https://via.placeholder.com/300x300'
    },

    plus: {
      headers: [
        { 
          title: 'New Products', 
          subcategories: ['New Arrivals', 'New With Tags', 'Dresses under 2000', 'Tops Under 3000', 'Pants From 2000', 'Jeans from 5000', 'Wears To Work'] 
        },
        { 
          title: 'Categories', 
          subcategories: ['All Maternity', 'Dresses', 'Sweaters', 'Coats & Jackets', 'Tops', 'Pants', 'Skirits', 'Shorts', 'Swimwear', 'Activewear'] 
        },
        { 
          title: 'New Maternity: Selling Fast', 
          subcategories: ["View all", "Clothing", "Men's Clothing", "Women's Clothing"] 
        }
      ],
      image: 'https://via.placeholder.com/300x300'
    },

    men: {
      headers: [
        { 
          title: 'New Products', 
          subcategories: ['New Arrivals', 'New With Tags', 'Dresses under 2000', 'Tops Under 3000', 'Pants From 2000', 'Jeans from 5000', 'Wears To Work'] 
        },
        { 
          title: 'Categories', 
          subcategories: ['All Maternity', 'Dresses', 'Sweaters', 'Coats & Jackets', 'Tops', 'Pants', 'Skirits', 'Shorts', 'Swimwear', 'Activewear'] 
        },
        { 
          title: 'New Maternity: Selling Fast', 
          subcategories: ["View all", "Clothing", "Men's Clothing", "Women's Clothing"] 
        }
      ],
      image: 'https://via.placeholder.com/300x300'
    },

    women: {
      headers: [
        { 
          title: 'New Products', 
          subcategories: ['New Arrivals', 'New With Tags', 'Dresses under 2000', 'Tops Under 3000', 'Pants From 2000', 'Jeans from 5000', 'Wears To Work'] 
        },
        { 
          title: 'Categories', 
          subcategories: ['All Maternity', 'Dresses', 'Sweaters', 'Coats & Jackets', 'Tops', 'Pants', 'Skirits', 'Shorts', 'Swimwear', 'Activewear'] 
        },
        { 
          title: 'New Maternity: Selling Fast', 
          subcategories: ["View all", "Clothing", "Men's Clothing", "Women's Clothing"] 
        }
      ],
      image: 'https://via.placeholder.com/300x300'
    },

    kids: {
      headers: [
        { 
          title: 'New Products', 
          subcategories: ['New Arrivals', 'New With Tags', 'Dresses under 2000', 'Tops Under 3000', 'Pants From 2000', 'Jeans from 5000', 'Wears To Work'] 
        },
        { 
          title: 'Categories', 
          subcategories: ['All Maternity', 'Dresses', 'Sweaters', 'Coats & Jackets', 'Tops', 'Pants', 'Skirits', 'Shorts', 'Swimwear', 'Activewear'] 
        },
        { 
          title: 'New Maternity: Selling Fast', 
          subcategories: ["View all", "Clothing", "Men's Clothing", "Women's Clothing"] 
        }
      ],
      image: 'https://via.placeholder.com/300x300'
    },
    summer: {
      headers: [
        { 
          title: 'New Products', 
          subcategories: ['New Arrivals', 'New With Tags', 'Dresses under 2000', 'Tops Under 3000', 'Pants From 2000', 'Jeans from 5000', 'Wears To Work'] 
        },
        { 
          title: 'Categories', 
          subcategories: ['All Maternity', 'Dresses', 'Sweaters', 'Coats & Jackets', 'Tops', 'Pants', 'Skirits', 'Shorts', 'Swimwear', 'Activewear'] 
        },
        { 
          title: 'New Maternity: Selling Fast', 
          subcategories: ["View all", "Clothing", "Men's Clothing", "Women's Clothing"] 
        }
      ],
      image: 'https://via.placeholder.com/300x300'
    },
    trending: {
      headers: [
        { 
          title: 'New Products', 
          subcategories: ['New Arrivals', 'New With Tags', 'Dresses under 2000', 'Tops Under 3000', 'Pants From 2000', 'Jeans from 5000', 'Wears To Work'] 
        },
        { 
          title: 'Categories', 
          subcategories: ['All Maternity', 'Dresses', 'Sweaters', 'Coats & Jackets', 'Tops', 'Pants', 'Skirits', 'Shorts', 'Swimwear', 'Activewear'] 
        },
        { 
          title: 'New Maternity: Selling Fast', 
          subcategories: ["View all", "Clothing", "Men's Clothing", "Women's Clothing"] 
        }
      ],
      image: 'https://via.placeholder.com/300x300'
    },
    // More categories can be added here...

  };

  

  const handleMouseEnter = (categoryId) => {
    setHoveredCategory(categoryId);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  

  return (
    <div className="relative z-10">
      {/* First Section: Main Category List */}
      <div className="bg-[#e6ebd5] w-full">
        {/* Main Category List */}
        <div className="w-full h-[100px] flex items-center justify-center z-10">
          <ul className="flex space-x-8">
            {categories.map((category) => (
              <li
                key={category.id}
                className="text-xl cursor-pointer"
                onMouseEnter={() => handleMouseEnter(category.id)}
                onMouseLeave={handleMouseLeave}
              >
                {category.name}
              </li>
            ))}
          </ul>
          <div className="border border-black h-[23px] mx-[30px]" />
          <Link className="text-xl">Shop By Category</Link>
          <div className="border border-black h-[23px] mx-[25px]" />
          <Link className="text-xl flex gap-[12px] items-center">
            Nigeria
            <img src={CountryLogo} alt="nigeria-flag" />
          </Link>
        </div>

        {/* Dropdown on Hover */}
        <div
          className={`absolute top-[100px] left-0 w-full bg-[#e6ebd5]  transition-all duration-500 ease-in-out overflow-hidden ${
            hoveredCategory ? 'max-h-[400px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
          }`}
        >
        {hoveredCategory && (
          
            <div className="grid grid-cols-4 gap-8 px-80 py-4">
              {/* Headers and Subcategories */}
              {subcategoryData[hoveredCategory]?.headers.map((header, index) => (
                <div key={index} className="flex flex-col">
                  <h3 className="font-bold text-xl mb-2">{header.title}</h3>
                  <ul className="space-y-2">
                    {header.subcategories.map((subcategory, subIndex) => (
                      <li key={subIndex} className="text-xl hover:underline">
                        {subcategory}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Image */}
              {subcategoryData[hoveredCategory]?.image && (
                <div className="col-span-1 flex justify-center items-center">
                  <img
                    src={subcategoryData[hoveredCategory].image}
                    alt={`${hoveredCategory} image`}
                    className="object-fit h-60 w-50"
                  />
                </div>
              )}
            </div>
         
        )}

     </div>
      </div>
    </div>
     
  )
}

export default Banner