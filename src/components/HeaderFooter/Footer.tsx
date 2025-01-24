"use client";

import { Button } from "../ui/button";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; 

const Footer = () => {
  return (
    <>
      <footer className="text-[16px] bg-[#EEEFFB]">
        <div className="container px-20 py-20 mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-wrap md:flex-row gap-10">

            {/* Subscribe Column */}
            <div className="lg:w-1/4 md:w-1/3 w-full">
              <h1 className="title-font text-2xl font-bold text-black tracking-widest mb-7">
                EasyBuy
              </h1>

              <div className="flex xl:flex-nowrap md:flex-wrap lg:flex-wrap justify-center md:justify-start">
                <input
                  type="email"
                  id="footer-field"
                  name="footer-field"
                  placeholder="Enter your email"
                  className="w-[240px] mt-1 bg-gray-100 rounded border-gray-300 focus:ring-2 focus:ring-indigo-200 py-2 px-3"
                />
                <Button className="mt-1 rounded-md text-white bg-pink-600 hover:bg-pink-700 transition-all duration-300">Subscribe</Button>
              </div>

              <div className="text-[#8A8FB9] hover:text-gray-500 mt-10">
                <p className="text-[12px]">Contact Info</p>
                <p className="text-[12px]">17 Princess Road, London, Greater London NW1 8JR, UK</p>
              </div>
            </div>

            {/* Categories Column */}
            <div className="lg:w-1/6 md:w-1/3 w-full ml-20">
              <h2 className="title-font text-xl text-black tracking-widest mb-6">Categories</h2>
              <nav className="list-none mb-8 space-y-3">
                {["Laptops & Computers", "Cameras & Photography", "Smart Phones & Tablets", "Video Games & Consoles", "Waterproof Headphones"].map((item, index) => (
                  <li key={index}>
                    <a className="text-[#8A8FB9] hover:text-gray-500">{item}</a>
                  </li>
                ))}
              </nav>
            </div>

            {/* Customer Care Column */}
            <div className="lg:w-1/6 md:w-1/3 w-full">
              <h2 className="title-font text-xl text-black tracking-widest mb-6">
                Customer Care
              </h2>
              <nav className="list-none mb-8 space-y-3">
                {["My Account", "Discount", "Returns", "Orders History", "Order Tracking"].map((item, index) => (
                  <li key={index}>
                    <a className="text-[#8A8FB9] hover:text-gray-500">{item}</a>
                  </li>
                ))}
              </nav>
            </div>

            {/* Pages Column */}
            <div className="lg:w-1/6 md:w-1/3 w-full">
              <h2 className="title-font text-xl text-black tracking-widest mb-6">Pages</h2>
              <nav className="list-none mb-8 space-y-3">
                {["Blog", "Browse the Shop", "Category", "Pre-Built Pages", "Visual Composer Elements", "WooCommerce Pages"].map((item, index) => (
                  <li key={index}>
                    <a className="text-[#8A8FB9] hover:text-gray-500">{item}</a>
                  </li>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="bg-[#EEEFFB] mt-1 py-2">
          <div className="container flex items-center justify-between mx-auto">
            <p className="text-black text-sm ml-20">
              ©Webecy - All Rights Reserved
            </p>

            {/* Social Media Icons */}
            <div className="inline-flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-blue-700 hover:text-blue-800 transition duration-300" size={22} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-blue-700 hover:text-blue-800 transition duration-300" size={22} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-700 hover:text-blue-800 transition duration-300" size={22} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;