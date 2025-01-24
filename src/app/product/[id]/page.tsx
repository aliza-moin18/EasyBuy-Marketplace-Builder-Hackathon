"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import { sanityfetch } from "@/sanity/lib/fetch";
import { ProductDetailQuery } from "@/sanity/lib/queries";
import { IoIosArrowBack } from "react-icons/io";
import { useCart } from "@/context/CartContext"; // Import useCart from your context

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  discountPercentage?: number;
  stockLevel: number;
  category: string;
  imageUrl: string;
};

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { addToCart } = useCart(); // Get the addToCart function from the context
  const [product, setProduct] = useState<Product | null>(null);

  const { id } = params;

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const data = await sanityfetch({
          query: ProductDetailQuery, // Use the ProductDetailQuery
          params: { id }, // Pass the product ID as a parameter
        });

        setProduct(data); // Store the fetched product details in state
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]); // Re-fetch when the product ID changes

  const handleAddToCart = (product: Product) => {
    const productWithQuantity = {
      ...product,
      quantity: 1, // Default quantity for the product
      price: product.discountPercentage
        ? product.price * (1 - product.discountPercentage / 100)
        : product.price, // Adjust price if there’s a discount
      id: Number(product.id), // Convert id to number before adding to the cart
    };

    addToCart(productWithQuantity); // Add the product to the cart context
    alert("Added to cart!"); // Optional feedback
  };

  if (!product) return <div>Loading...</div>; // Show loading while product is being fetched

  return (
    <div className="container mx-auto p-4 w-[90%] md:w-[80%] xl:w-[70%]">
      <Link href="/ProductListing" passHref>
        <div className="flex items-center space-x-2 mb-6 cursor-pointer">
          <IoIosArrowBack className="w-5 h-5 text-gray-700 hover:text-gray-600" />
          <span className="text-gray-800 hover:text-gray-600 font-bold">Back to Products</span>
        </div>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative w-full h-80 md:h-[500px] lg:h-[600px] mt-10">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={500}
            height={500}
            layout="intrinsic"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold text-black mt-[-140px] mb-5">{product.name}</h1>
          <p className="text-lg text-gray-700 mb-2">{product.description}</p>

          {/* Price and Discount */}
          <div className="flex gap-4 items-center">
            <p className="text-2xl font-bold text-red-600 mb-3">${product.price}</p>
            {product.discountPercentage && (
              <p className="text-md text-gray-500 line-through mb-3">
                ${product.price * (1 - product.discountPercentage / 100)}  
              </p>
            )}
          </div>

          {/* Stock and Category */}
          <div className="flex gap-4 items-center">
            <p className="text-md text-gray-700 mb-3">Stock Level: {product.stockLevel}</p>
            <p className="text-md text-gray-700 mb-3 ">Category: {product.category}</p>
          </div>

          {/* Add to Cart Button */}
          <div className="flex gap-6 items-center">
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-black font-bold hover:bg-gray-800 mt-5 text-white px-6 py-2 rounded-lg transition-all duration-300"
            >
              <FaShoppingCart className="inline mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}