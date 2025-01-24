"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/product";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

interface ProductDetailPageProps {
  params: { id: string };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { addToCart } = useCart();
  const router = useRouter(); 

  const { id } = params;

  if (!id || isNaN(Number(id))) {
    return <div>Product not found</div>;
  }

  const productId = parseInt(id, 10); // Parse the id to an integer
  const product = products.find((p) => p.id === productId);

  // Show loading if product is not found immediately
  if (!product) {
    return <div>Loading...</div>;
  }

  const rating = product.rating ?? 0;

  // Add to Cart handler
  const addToCartHandler = () => {
    const productWithQuantity = {
      ...product,
      quantity: 1, // Default quantity
      price: product.discountedPrice, // Use discountedPrice as price
    };
    addToCart(productWithQuantity); // Add to cart context

    // Redirect to the cart page after adding the product
    router.push("/cart");
  };

  return (
    <div className="container mx-auto p-4 w-[90%] md:w-[80%] xl:w-[70%]">
      {/* Back to Products List Icon */}
      <Link href="/Productaccessories" passHref>
        <div className="flex items-center space-x-2 mb-6 cursor-pointer">
          <IoIosArrowBack className="w-5 h-5 text-gray-700 hover:text-gray-500" />
          <span className="text-gray-800 hover:text-gray-500 font-bold">Back to Products</span>
        </div>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Product Image */}
        <div className="relative w-full h-80 md:h-[500px] lg:h-[600px]">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="contain"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold text-[#48cfad]">{product.name}</h1>
          <p className="text-lg text-gray-500">{product.description}</p>

          {/* Price */}
          <div className="flex gap-4 items-center">
            <p className="text-xl font-bold text-green-600">
              ${product.discountedPrice.toFixed(2)}
            </p>
            <p className="text-md text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </p>
          </div>

          {/* Rating & Comments */}
          <div className="flex items-center space-x-2">
            <div className="flex text-yellow-500">
              {[...Array(Math.floor(rating))].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>
            <span className="text-gray-500">
              {rating} ({product.ratingComments?.length || 0} reviews)
            </span>
          </div>
          <div className="space-y-2 text-gray-600">
            {product.ratingComments?.map((comment, index) => (
              <p key={index} className="text-sm">&quot;{comment}&quot;</p>
            ))}
          </div>

          {/* Add to Cart Button */}
          <div className="flex gap-6 items-center">
            <button
              onClick={addToCartHandler}
              className="bg-black font-bold hover:bg-gray-900 text-white px-6 py-2 rounded-lg transition-all duration-300"
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