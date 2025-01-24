"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import ShopexOffer from "@/components/Shopex";
import ProductFeature from "@/components/UniqueFeature";
import FeaturedProducts from "@/components/FeatProduct";
import Products from "@/components/LatestProd";
import Latestblog from "@/components/LatestBlog";
  
export default function Home() {
  return (
    <>
      <section className="body-font bg-[#F2F0FF]">
        <div className="container mx-auto flex px-4 py-4 md:flex-row flex-col items-center">

     {/* Left Section */}
        <div className="w-full lg:max-w-lg lg:w-full md:w-1/2 flex flex-col items-center md:items-start mb-8 md:mb-0">
            <Image 
              src="/hero2.png" 
              alt="Hekto Logo" 
              width={260}
              height={280} 
              className="mt-[-127px] ml-3 mr-[-60px] hidden sm:block" // Hidden on mobile
            />
            <div className="mt-10 ml-10 md:ml-0">
              <Image 
                src="/dot.png" 
                alt="Decorative Dot" 
                width={12} 
                height={10} 
                className="mt-20 ml-20"
              />
            </div>
          </div> 

      {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left mt-6 md:mt-0 md:ml-[-280px]">
            <h3 className="text-[#FB2E86] font-bold text-1xl md:text-2xl">
              Best Furniture For Your Castle...
            </h3>
            <h1 className="title-font md:text-4xl text-4xl mb-4 font-bold">
              New Furniture Collection Trends in 2020
            </h1>
            <p className="mb-8 leading-relaxed text-[#6b709b] text-sm md:text-base">
              Lorem ipsum dolor, sit amet adipisicing elit. Perferendis  labore quaerat earum nisi.
            </p>

            <div className="flex justify-center mt-4">
            <Link href="/login">
               <Button className="text-white bg-pink-500 px-9 py-6 font-bold hover:bg-pink-600 transition-all duration-300">
                Shop Now
               </Button>
            </Link>
            </div>
          </div> 

      {/* Hero Image */}
         <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-6 md:mt-0">
            <Image 
              src="/hero1.png" 
              alt="Hekto Product" 
              width={500} 
              height={600} 
              className="rounded-lg mr-[80px]"
            />
          </div>
        </div>
        <Image 
          src="/dotee.png" 
          alt="Decorative Dot" 
          width={60} 
          height={60} 
          className="mx-auto pb-10" 
        />
      </section>

    {/* Sections */}
      <div>
       <FeaturedProducts />
        <Products />
        <ShopexOffer />
        <ProductFeature /> 
        <Latestblog /> 
      </div>
    </> 
  );
}