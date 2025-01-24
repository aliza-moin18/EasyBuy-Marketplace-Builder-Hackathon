"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ContactUs = () => {
  return (
    <section className="mb-10">
      {/* Header Section */}
      <div className="w-full py-20 px-10 md:px-40 bg-[#F6F5FF] mb-10">
        <h2 className="text-5xl font-bold text-blue-950 mb-2">
          Contact <span className="text-pink-600">Us</span>
        </h2>
        <nav>
          <span className="font-bold">Home</span>
          <span className="font-bold"> . Pages</span>
          <span className="text-pink-600 font-bold"> . Contact Us</span>
        </nav>
      </div>

      {/* Information and Contact Way Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 px-10 md:px-20">
        {/* Information About Us */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-950 mt-10">
            Information About Us
          </h2>
          <p className="mr-0 md:mr-20">
          At EasyBuy, we are dedicated to offering a premium shopping experience. We provide a variety of high-quality products across categories like electronics, home goods, and fashion. Our goal is to make shopping simple, seamless, and enjoyable for everyone.
            
          </p>
          <div className="flex space-x-4 mt-8">
            <div className="w-5 h-5 rounded-full bg-blue-500"></div>
            <div className="w-5 h-5 rounded-full bg-pink-500"></div>
            <div className="w-5 h-5 rounded-full bg-purple-500"></div>
          </div>
        </div>

        {/* Contact Way Section */}
        <div>
          <h1 className="text-3xl font-bold mb-8 mt-9 text-blue-950">Contact Way</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center">
              <div className="w-9 h-9 rounded-full bg-blue-500 mr-4"></div>
              <div>
                <p className="text-lg font-bold text-gray-500">
                  Tel: 877-67-88-99
                </p>
                <p className="text-gray-500">E-Mail: Easybuy@store.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-9 h-9 rounded-full bg-pink-500 mr-4"></div>
              <div>
                <p className="text-lg font-bold text-gray-500">Support Forum</p>
                <p className="text-gray-500">For over 24hr</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-9 h-9 rounded-full bg-yellow-400 mr-4"></div>
              <div>
                <p className="text-lg font-bold text-gray-500">
                  20 Margaret st, London
                </p>
                <p className="text-gray-500">Great Britain, 3NM98-LK</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-9 h-9 rounded-full bg-green-500 mr-4"></div>
              <div>
                <p className="text-lg font-bold text-gray-500">
                  Free standard shipping
                </p>
                <p className="text-gray-500">on all orders.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Get in Touch */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-10 md:px-20 mt-20">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-950">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
          Have any questions or need assistance? Our team is here to help! Whether its about our products or your order, feel free to get in touch with us, and we ll ensure you get the support you need.
          </p>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Name*"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Email*"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-9 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows={3}
                placeholder="Type Your Message*"
              ></textarea>
            </div>
            <Button className="text-white px-9 py-6 font-bold hover:bg-pink-600 transition-all duration-300">
              Send Mail
            </Button>
          </form>
        </div>

        {/* Image */}
        <div className="flex justify-center items-center">
          <Image
            src="/contact.png"
            alt="Contact Us Illustration"
            width={600}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;