"use client";

import Link from "next/link";
import { useState } from "react";
import SearchBar from "./Searchbar";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="text-[#000000] bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-bold text-black ml-4 cursor-pointer md:text-4xl">
            EasyBuy
          </h1>
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex flex-wrap items-center text-gray-500 text-lg space-x-6">
          <Link href="/" className="hover:text-[#FB2E86]">Home</Link>
          <Link href="/ProductListing" className="hover:text-[#FB2E86]">Products</Link>
          <Link href="/Productaccessories" className="hover:text-[#FB2E86]">Accessories</Link>
          <Link href="/blog" className="hover:text-[#FB2E86]">Blog</Link>
          <Link href="/shop" className="hover:text-[#FB2E86]">Shop</Link>
          <Link href="/about" className="hover:text-[#FB2E86]">About</Link>
          <Link href="/contact" className="hover:text-[#FB2E86]">Contact</Link>
        </nav>

        {/* Search and Icons */}
        <div className="flex items-center space-x-1">
          {/* Search Bar Component */}
          <SearchBar />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? '✖️' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white p-4 space-y-2">
          <Link href="/" className="block text-gray-500 hover:text-[#FB2E86]">Home</Link>
          <Link href="/ProductListing" className="block text-gray-500 hover:text-[#FB2E86]">Products</Link>
          <Link href="/Productaccessories" className="block text-gray-500 hover:text-[#FB2E86]   ">Accessories</Link>
          <Link href="/blog" className="block text-gray-500 hover:text-[#FB2E86]">Blog</Link>
          <Link href="/shop" className="block text-gray-500 hover:text-[#FB2E86]">Shop</Link>
          <Link href="/about" className="block text-gray-500 hover:text-[#FB2E86]">About</Link>
          <Link href="/contact" className="block text-gray-500 hover:text-[#FB2E86]">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;