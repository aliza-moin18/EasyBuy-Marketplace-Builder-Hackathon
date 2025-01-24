"use client";

import React, { useState, useEffect } from "react";
import { FaRegHeart, FaStar, FaRegStar, FaCheck } from "react-icons/fa";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import { LiaSearchPlusSolid } from "react-icons/lia";

// Define Product type
type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: number;
};

const ShopPage = () => {
  // Product data with explicit Product type
  const products: Product[] = [
    { id: 1, title: "Dictum morbi", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: 29.99, image: "/Shop/shop1.jpeg", rating: 4 },
    { id: 2, title: "Sodales sit", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: 49.99, image: "/Shop/shop2.jpeg", rating: 3 },
    { id: 3, title: "Nibh varius", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: 19.99, image: "/Shop/shop3.jpeg", rating: 5 },
    { id: 4, title: "Mauris quis", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: 39.99, image: "/Shop/shop4.jpeg", rating: 2 },
    { id: 5, title: "Morbi sagittis", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: 59.99, image: "/Shop/shop5.jpeg", rating: 4 },
    { id: 6, title: "Ultricies venenatis", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: 99.99, image: "/Shop/shop6.jpeg", rating: 2 },
    { id: 7, title: "Scelerisque dignissim", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: 69.99, image: "/Shop/shop7.jpeg", rating: 3 },
    { id: 8, title: "Ultricies venenatis", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: 99.99, image: "/Shop/shop2.jpeg", rating: 2 },
    { id: 9, title: "Scelerisque dignissim", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: 69.99, image: "/Shop/shop4.jpeg", rating: 3 },
  ];

  // Use Product[] type instead of any[]
  const [wishlist, setWishlist] = useState<Product[]>([]);

  // Load wishlist from localStorage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(savedWishlist);
  }, []);

  // Function to toggle wishlist state
  const toggleWishlist = (productId: number) => {
    const productToAdd = products.find((product) => product.id === productId);

    if (!productToAdd) return; // Make sure we have a valid product to add

    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.some(item => item.id === productId)
        ? prevWishlist.filter((item) => item.id !== productId)
        : [...prevWishlist, productToAdd];

      // Save the updated wishlist to localStorage
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 mt-10 px-6 sm:px-12">
        <h2 className="text-xl font-bold mb-4 sm:mb-0 sm:text-left text-center">
          Ecommerce Accessories & Fashion Item <br />
          <span className="text-sm text-gray-400">About 9,620 results (0.62 seconds)</span>
        </h2>
        <div className="flex flex-col sm:flex-row sm:gap-4 gap-6 sm:items-center">
          {/* Sort, View, Per Page selectors */}
          <div className="flex items-center mb-4 sm:mb-0">
            <label htmlFor="perPage" className="mr-2 text-sm font-medium text-gray-600">
              Per Page:
            </label>
            <select id="perPage" className="border border-gray-300 rounded p-2 text-sm">
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="36">36</option>
            </select>
          </div>
          <div className="flex items-center mb-4 sm:mb-0">
            <label htmlFor="sortBy" className="mr-2 text-sm font-medium text-gray-600">
              Sort By:
            </label>
            <select id="sortBy" className="border border-gray-300 rounded p-2 text-sm">
              <option value="best-match">Best Match</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>
          <div className="flex items-center">
            <label htmlFor="view" className="mr-2 text-sm font-medium text-gray-600">
              View:
            </label>
            <select id="view" className="border border-gray-300 rounded p-2 text-sm">
              <option value="grid">Grid</option>
              <option value="list">List</option>
            </select>
          </div>
        </div>
      </div>

      {/* Sidebar & Filters Section */}
      <div className="flex flex-col sm:flex-row gap-6 sm:px-12">
        {/* Sidebar */}
        <div className="w-full sm:w-1/4 bg-white p-6 space-y-8 shadow-lg">
          {/* Brand Filter */}
          <div>
            <h3 className="text-xl font-bold text-[#151875] border-b-2 pb-2 mb-4">Product Brand</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              {["Brand 1", "Brand 2", "Brand 3"].map((brand, index) => (
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
              {["10% Off", "20% Off", "30% Off"].map((offer, index) => (
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
              {[
                { rating: 4, count: 12 },
                { rating: 3, count: 18 },
                { rating: 2, count: 25 },
              ].map((item, index) => (
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
              {["Accessories", "Apparel", "Shoes", "Bags"].map((category, index) => (
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
              {["$0 - $50", "$50 - $100", "$100 - $200"].map((range, index) => (
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
              {[
                { name: "Red", color: "bg-red-500" },
                { name: "Blue", color: "bg-blue-500" },
                { name: "Green", color: "bg-green-500" },
                { name: "Purple", color: "bg-purple-500" },
                { name: "Yellow", color: "bg-yellow-500" },
                { name: "Pink", color: "bg-pink-500" },
              ].map((color, index) => (
                <li key={index} className="flex items-center">
                  <span className={`${color.color} w-4 h-4 rounded-full mr-2`}></span>
                  {color.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product Listing Section */}
        <div className="w-full sm:w-3/4">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col sm:flex-row bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-transform transform hover:scale-105 mb-8">
              {/* Product Image */}
              <div className="flex justify-center items-center sm:w-1/3">
                <Image src={product.image} alt={product.title} width={200} height={200} className="object-cover rounded-lg" />
              </div>

              {/* Product Details */}
              <div className="flex flex-col sm:w-2/3 sm:pl-10 mt-8 sm:mt-0">
                <h3 className="text-lg font-semibold text-[#111C85]">{product.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{product.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-xl font-bold text-[#111C85]">${product.price}</p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <span key={index}>
                        {index < product.rating ? (
                          <FaStar className="text-yellow-500" />
                        ) : (
                          <FaRegStar className="text-yellow-500" />
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-4 text-[#111C85]">
                  <button aria-label="Add to Cart" className="bg-white rounded-full shadow-md py-2 px-3 hover:bg-gray-100">
                    <FiShoppingCart size={20} />
                  </button>
                  <button
                    aria-label="Add to Wishlist"
                    onClick={() => toggleWishlist(product.id)}
                    className="bg-white rounded-full shadow-md py-2 px-3 hover:bg-gray-100"
                  >
                    <FaRegHeart size={20} className={`text-${wishlist.some(item => item.id === product.id) ? "red-500" : "gray-500"}`} />
                  </button>
                  <button aria-label="Search Product" className="bg-white rounded-full shadow-md py-2 px-3 hover:bg-gray-100">
                    <LiaSearchPlusSolid size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
