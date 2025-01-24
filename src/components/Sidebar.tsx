"use client";

import React from "react";
import { FaCheck, FaStar, FaRegStar } from "react-icons/fa";

// Define types for the props
interface SidebarProps {
  brandFilters: string[];
  discountOffers: string[];
  ratingFilters: { rating: number; count: number }[];
  categories: string[];
  priceRanges: string[];
  colors: { name: string; color: string }[];
}

const Sidebar = ({
  brandFilters,
  discountOffers,
  ratingFilters,
  categories,
  priceRanges,
  colors,
}: SidebarProps) => {
  return (
    <div className="w-full sm:w-1/4 bg-white p-6 space-y-8">
      {/* Brand Filter */}
      <div>
        <h3 className="text-xl font-bold text-[#151875] border-b-2 pb-2 mb-4">Product Brand</h3>
        <ul className="space-y-3 text-sm text-gray-500">
          {brandFilters.map((brand, index) => (
            <li key={index} className="flex items-center">
              <FaCheck className="mr-2 text-blue-600" />
              {brand}
            </li>
          ))}
        </ul>
      </div>

      {/* Discount Offer */}
      <div>
        <h3 className="text-xl font-bold text-[#151875] border-b-2 pb-2 mb-4">Discount Offers</h3>
        <ul className="space-y-3 text-sm text-gray-500">
          {discountOffers.map((offer, index) => (
            <li key={index} className="flex items-center">
              <FaCheck className="mr-2 text-pink-600" />
              {offer}
            </li>
          ))}
        </ul>
      </div>

      {/* Rating Filter */}
      <div>
        <h3 className="text-xl font-bold text-[#151875] border-b-2 pb-2 mb-4">Rating</h3>
        <ul className="space-y-3 text-sm text-gray-500">
          {ratingFilters.map((item, index) => (
            <li key={index} className="flex items-center">
              <FaCheck className="mr-2 text-yellow-500" />
              {[...Array(5)].map((_, starIndex) => (
                <span key={starIndex}>
                  {starIndex < item.rating ? <FaStar className="text-yellow-500" /> : <FaRegStar className="text-yellow-500" />}
                </span>
              ))}
              <span className="ml-2">{item.count}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Category Filter */}
      <div>
        <h3 className="text-xl font-bold text-[#151875] border-b-2 pb-2 mb-4">Categories</h3>
        <ul className="space-y-3 text-sm text-gray-500">
          {categories.map((category, index) => (
            <li key={index} className="flex items-center">
              <FaCheck className="mr-2 text-pink-600" />
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="text-xl font-bold text-[#151875] border-b-2 pb-2 mb-4">Price Range</h3>
        <ul className="space-y-3 text-sm text-gray-500">
          {priceRanges.map((range, index) => (
            <li key={index} className="flex items-center">
              <FaCheck className="mr-2 text-green-600" />
              {range}
            </li>
          ))}
        </ul>
      </div>

      {/* Color Filter */}
      <div>
        <h3 className="text-xl font-bold text-[#151875] border-b-2 pb-2 mb-4">Filter by Color</h3>
        <ul className="grid grid-cols-2 gap-2 text-sm text-gray-500">
          {colors.map((color, index) => (
            <li key={index} className="flex items-center">
              <span className={`${color.color} w-4 h-4 rounded-full mr-2`}></span>
              {color.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;