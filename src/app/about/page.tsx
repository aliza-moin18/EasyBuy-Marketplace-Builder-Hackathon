"use client";

import ShopexOffer from '@/components/Shopex';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

function AboutUs() {
  return (
    <section className="mb-20 mt-1">

      {/* Header Section */}
      <div className="w-full py-20 px-4 md:px-40 bg-[#F6F5FF] mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-2">
          About <span className="text-pink-600">Us</span>
        </h2>
        <div className="flex flex-wrap mt-2">
          <span className="font-bold text-gray-600">Home</span>
          <span className="font-bold text-gray-600 mx-2">. Pages</span>
          <span className="text-pink-600 font-bold">. About Us</span>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-20">
        
        {/* About Image Section */}
        <div className="relative">
          <Image
            src="/About.png"
            alt="About Us Image"
            width={500}
            height={400}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        {/* About Text Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
            Know About Our Ecommerce Business, History
          </h1>
          <p className="text-gray-600 text-md md:text-base mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor labore et dolore magna aliqua. 
            Laboris nisi ut aliquip ex ea commodo consequat in reprehenderit in voluptate velit esse Duis auter in reprehenderit.
          </p>
          <Button className="text-white text-xl px-2 py-4 font-bold bg-pink-500 hover:bg-pink-600 transition-all duration-300 mt-4">
            Contact Us
          </Button>
        </div>
      </div>

     {/* ShopexOffer Component */}
     <div className='mt-20'>
        <ShopexOffer />
      </div>

      {/* Our Client Say Section */}
      <div className="py-16 bg-gray-50 max-w-7xl mx-auto text-center mt-20">
        <h1 className="text-2xl sm:text-4xl font-bold text-[#151875] mb-8">
          Our Clients Say!
        </h1>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
          <Image
            src="/Shopex/about1.jpeg"
            alt="Client 1"
            width={50}
            height={70}
            className="shadow-md"
          />
          <Image
            src="/Shopex/about2.jpeg"
            alt="Client 2"
            width={80}
            height={200}
            className="shadow-md mt-[-90]"
          />
          <Image
            src="/Shopex/about3.jpeg"
            alt="Client 3"
            width={70}
            height={70}
            className="shadow-md"
          />
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-[#151875] mb-2">
          Selina Gomez
        </h1>
        <h6 className="text-sm text-gray-500 mb-4">
          CEO At Webecy Digital
        </h6>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.
        </p>
      </div>

    </section>
  );
}

export default AboutUs;
