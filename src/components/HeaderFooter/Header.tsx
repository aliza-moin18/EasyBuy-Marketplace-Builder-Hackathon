"use client";

import { useCart } from '@/context/CartContext'; 
import Link from 'next/link';
import { BiPhoneCall } from 'react-icons/bi';
import { GrCart } from 'react-icons/gr';
import { GoPerson } from 'react-icons/go';
import { IoIosHeartEmpty } from 'react-icons/io';
import { MdOutlineMailOutline } from 'react-icons/md';

const Top = () => {
  // Destructure necessary values from useCart context (cart items, total quantity, etc.)
  const { cart } = useCart();
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0); // Calculate total items in cart

  return (
    <div className="bg-[#7E33E0] h-[44px] w-full flex items-center justify-between px-4 lg:px-12 text-white">
      
      {/* Left Side */}
      <div className="flex items-center space-x-4">
        {/* Email */}
        <div className="flex items-center space-x-2">
          <MdOutlineMailOutline />
          <span className="text-sm hidden md:inline">mhhasanul@gmail.com</span>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-2">
          <BiPhoneCall />
          <span className="text-sm hidden md:inline">(12345)67890</span>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        {/* Language Dropdown */}
        <select className="bg-transparent rounded text-sm px-2 py-1">
          <option value="english" className="text-black">English</option>
          <option value="urdu" className="text-black">Urdu</option>
        </select>

        {/* Currency Dropdown */}
        <select className="bg-transparent rounded text-sm px-2 py-1">
          <option value="usd" className="text-black">USD</option>
          <option value="eur" className="text-black">EUR</option>
          <option value="gbp" className="text-black">GBP</option>
        </select>

        {/* Login */}
        <a href="/login" className="flex items-center text-sm hover:text-gray-300">
          <span className="mr-1 hidden md:inline">Login</span>
          <GoPerson className="text-xl" />
        </a>

        {/* Wishlist */}
        <a href="/wishlist" className="flex items-center text-sm hover:text-gray-300">
          <span className="mr-1 hidden md:inline">Wishlist</span>
          <IoIosHeartEmpty className="text-xl" />
        </a>

        {/* Cart - With Dynamic Count */}
        <Link href="/cart">
         <div className="relative">
         {/* Increase cart icon size */}
            <GrCart className="text-2xl" />
    
         {/* Display badge if totalQuantity > 0 */}
         {totalQuantity > 0 && (
            <span className="absolute text-xs top-0 right-0 text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
            {totalQuantity}
           </span>
           )}
       </div>
     </Link>
     
      </div>
    </div>
  );
};

export default Top;