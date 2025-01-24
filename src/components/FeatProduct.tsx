"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa';

// Define the Product type
interface Product {
  id: string;
  image: string;
  title: string;
  code: string;
  price: string;
}

function FeaturedProducts() {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  // Sample product data
  const products: Product[] = [
    {
      image: '/Featured/Fea1.jpg',
      title: 'Cantilever chair',
      code: 'Y323001',
      price: '$42.00',
      id: '1',
    },
    {
      image: '/Featured/Fea2.webp',
      title: 'Cantilever chair',
      code: 'Y323001',
      price: '$42.00',
      id: '2',
    },
    {
      image: '/Featured/Fea3.jpg',
      title: 'Cantilever chair',
      code: 'Y323001',
      price: '$42.00',
      id: '3',
    },
    {
      image: '/Featured/Fea4.jpg',
      title: 'Cantilever chair',
      code: 'Y323001',
      price: '$42.00',
      id: '4',
    }
  ];

  useEffect(() => {
    // Load the wishlist from localStorage when the component mounts
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setWishlist(savedWishlist);
  }, []);

  const addToWishlist = (product: Product) => { // Use Product type here
    // Check if the product is already in the wishlist
    const isProductInWishlist = wishlist.some(item => item.id === product.id);
    
    if (!isProductInWishlist) {
      const updatedWishlist = [...wishlist, product];
      setWishlist(updatedWishlist);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); // Save to localStorage
    }
  };

  return (
    <section className="bg-white py-2 px-20 mb-20">
      <h2 className="text-4xl font-bold text-center text-blue-950 mb-10 mt-20">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="relative bg-white rounded-lg shadow-md group hover:shadow-xl transition-all flex flex-col h-full">
            
            {/* Product Image */}
            <div className="relative overflow-hidden bg-gray-100 rounded-lg mb-4 flex items-center justify-center" style={{ height: '220px' }}>
              <Image
                src={product.image}
                alt={product.title}
                width={190}  
                height={200} 
                className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-dark-blue opacity-0 group-hover:opacity-60 transition-all"></div>
            </div>
            
            {/* Title, Code, Price Section */}
            <div className="relative bg-white hover:bg-[#3b11e5] p-4 rounded-lg hover:text-white flex-grow"> 
              <h3 className="text-xl font-bold mb-2 text-pink-600 text-center hover:text-white">{product.title}</h3>
              <p className="text-black mb-2 text-center hover:text-white">Code: {product.code}</p>
              <p className="text-lg font-bold text-black hover:text-white text-center">{product.price}</p>
              
              {/* View Detail Button */}
              <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-center py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
                <p>View Detail</p>
              </div>
            </div>

            {/* Hover Icons */}
            <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
              <div 
                onClick={() => addToWishlist(product)} 
                className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 cursor-pointer"
              >
                <FaHeart className={`text-md ${wishlist.some(item => item.id === product.id) ? 'text-red-500' : 'text-gray-500'}`} />
              </div>
              <div className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 cursor-pointer">
                <FaShoppingCart className="text-md text-blue-500" />
              </div>
              <div className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 cursor-pointer">
                <FaSearch className="text-md text-gray-600" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;