"use client";

import ShopexOffer from '@/components/Shopex';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

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
          Welcome to EasyBuy, your one-stop shop for premium, affordable products. Since our founding in 2024, weve grown from a small startup to an innovative online platform, offering high-quality items in categories like electronics, home goods, and fashion. Our mission is to provide a seamless, personalized shopping experience with a focus on quality, customer satisfaction, and global partnerships. 
          </p>
          <Link href="/contact">
             <Button className="text-white text-xl px-8 py-4 font-bold bg-pink-500      hover:bg-pink-600 transition-all duration-300 mt-4">
            Contact Us
            </Button>
          </Link>
        </div>
      </div>

     {/* ShopexOffer Component */}
     <div className='mt-20'>
        <ShopexOffer />
      </div>

      {/* Our Client Say Section */}
      <section className="py-16 bg-gray-100 max-w-7xl mx-auto text-center mt-20">
       <h1 className="text-4xl sm:text-4xl font-extrabold text-[#2a3a4d] mb-12 tracking-wide">
          Our Clients Say!
       </h1>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-12 mb-8 px-6 sm:px-0">
    
    {/* Client 1 */}
    <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 mr-6">
      <Image
        src="/Shopex/about2.jpeg"
        alt="Client 2"
        width={120}
        height={120}
        className="rounded-full shadow-lg mb-4 transition-transform duration-300 hover:scale-110"
      />
      <h2 className="text-xl font-semibold text-[#151875] mb-2">Selina Gomez</h2>
      <h3 className="text-sm text-gray-500 mb-4">CEO at Webecy Digital</h3>
      <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
        Working with EasyBuy has truly transformed our business. Their dedication to excellence and innovation made every step of the process smooth and efficient. Weve seen remarkable growth and results. Highly recommend their services!
      </p>
    </div>

    {/* Client 2  */}
    <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
      <Image
        src="/Shopex/about1.jpeg"
        alt="Client 1"
        width={80}
        height={60}
        className="rounded-full shadow-lg mb-4 transition-transform duration-300 hover:scale-110"
      />
      <h2 className="text-xl font-semibold text-[#151875] mb-2">John Doe</h2>
      <h3 className="text-sm text-gray-500 mb-4">Founder at Tech Innovators</h3>
      <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
        Working with EasyBuy has been an amazing experience. Their commitment to quality and customer satisfaction is unmatched. Highly recommend!
      </p>
    </div> 

   {/* Client 3  */}
    <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 ml-6">
      <Image
        src="/Shopex/about3.jpeg"
        alt="Client 3"
        width={80}
        height={100}
        className="rounded-full shadow-lg mb-4 transition-transform duration-300 hover:scale-110"
      />
      <h2 className="text-xl font-semibold text-[#151875] mb-2">Jane Smith</h2>
      <h3 className="text-sm text-gray-500 mb-4">Marketing Director at Creativa Solutions</h3>
      <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
        Weve partnered with EasyBuy on multiple projects, and they have consistently exceeded our expectations. Their professionalism and dedication are truly commendable.
      </p>
        </div>
      </div>
    </section> 
  </section>
  );
}

export default AboutUs;