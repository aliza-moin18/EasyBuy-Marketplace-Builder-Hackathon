"use client";

import { useEffect, useState } from "react";
import { FaEye, FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { sanityfetch } from "@/sanity/lib/fetch";
import { ProductsList } from "@/sanity/lib/queries";

type Product = {
  name: string;
  _id: string;
  imageUrl: string;
  price: number;
  discountedPrice: number;
  description: string;
};

export default function ProductListingPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [clickedProduct, setClickedProduct] = useState<string | null>(null); // Track clicked product for border

  // Load wishlist from localStorage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(savedWishlist);
  }, []);

  // Fetch products from your backend or CMS (Sanity)
  useEffect(() => {
    const fetchProducts = async () => {
      const data: Product[] = await sanityfetch({ query: ProductsList });
      console.log("Fetched data:", data);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // Function to add/remove products from wishlist
  const handleWishlistToggle = (product: Product) => {
    let updatedWishlist: Product[];
    if (wishlist.some((item) => item._id === product._id)) {
      updatedWishlist = wishlist.filter((item) => item._id !== product._id);
    } else {
      updatedWishlist = [...wishlist, product];
    }
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // Function to handle product click (to show gray border)
  const handleProductClick = (productId: string) => {
    if (clickedProduct === productId) {
      setClickedProduct(null); // Remove border if clicked again
    } else {
      setClickedProduct(productId); // Set border for the clicked product
    }
  };

  // Helper function to format the price safely
  const formatPrice = (price: number): string => {
    if (!isNaN(price)) {
      return price.toFixed(2); // Return formatted price
    }
    return "0.00"; // Return fallback value if price is invalid
  };

  return (
    <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-10 mb-20">
      <h1 className="text-4xl font-bold text-center my-10"> Trendy Chairs & Sofas </h1>

      {/* Check if products are available */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              onClick={() => handleProductClick(product._id)} // Add onClick event to handle product click
              className={`group relative bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 ${clickedProduct === product._id ? "border-2" : ""}`}
            >
              {/* Image Section */}
              <div className="relative w-full h-56"> {/* Adjusted height for professional look */}
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={300} // Keep a fixed width
                  height={300} // Adjusted height for better fit and to maintain aspect ratio
                  className="object-contain w-full h-full group-hover:scale-105 transition-all duration-300"
                  style={{
                    objectFit: 'contain', // Ensure the image fits without cropping
                  }}
                />
              </div>

              {/* Product Details */}
              <div className="p-4 flex flex-col justify-between h-full">
                {/* Product Name */}
                <h2 className="text-xl font-semibold text-black mb-2">{product.name}</h2>

                {/* Product Price */}
                <div className="flex items-center gap-2 mb-4">
                  {/* Display original price */}
                  {product.discountedPrice && (
                    <p className="text-gray-400 line-through">${formatPrice(product.price)}</p>
                  )}
                </div>
              </div>

              {/* Price on the left side */}
              <div className="absolute bottom-4 left-4 flex gap-4 z-10">
                <p className="text-lg font-bold text-green-600">
                  ${formatPrice(product.discountedPrice) || formatPrice(product.price)}
                </p>
              </div>

              {/* Wishlist and View Icons */}
              <div className="absolute bottom-4 right-4 flex gap-4 z-10">
                {/* Wishlist Button */}
                <button
                  onClick={() => handleWishlistToggle(product)}
                  className={`text-red-600 ${wishlist.some((item) => item._id === product._id) ? "hover:text-red-800" : "hover:text-red-500"} transition`}
                >
                  <FaRegHeart size={24} className="text-red-500 hover:text-red-700" />
                </button>

                {/* Eye Icon for Product Details */}
                <Link href={`/product/${product._id}`} aria-label={`View details of ${product.name}`}>
                  <FaEye size={24} className="text-gray-500 hover:text-gray-600 transition" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center mt-8">Loading products...</p>
      )}
    </div>
  );
}