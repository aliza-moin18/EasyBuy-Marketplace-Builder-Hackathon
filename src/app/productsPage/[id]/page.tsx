import { products } from "@/data/product"; 
import { notFound } from "next/navigation";
import Image from "next/image";
import { FaArrowRight, FaFacebook, FaInstagram, FaPinterest, FaRegHeart, FaTwitter } from "react-icons/fa";

interface ProductPageProps {
  params: {
    id: string; // This is the dynamic product ID
  };
}

const relatedProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    image: "/rp1.png", // Replace with actual image paths
    rating: 4.5,
    originalPrice: 59.99,
  },
  {
    id: 2,
    name: "Smart Watch",
    image: "/rp2.png",
    rating: 4.7,
    originalPrice: 149.99,
  },
  {
    id: 3,
    name: "Portable Speaker",
    image: "/rp3.png",
    rating: 4.3,
    originalPrice: 49.99,
  },
  {
    id: 4,
    name: "Gaming Mouse",
    image: "/rp4.png",
    rating: 4.8,
    originalPrice: 35.99,
  },
]

const ProductPage = ({ params }: ProductPageProps) => {
  // Get the productId from the URL parameter
  const productId = parseInt(params.id, 10);

  // Find the product by ID
  const product = products.find((p) => p.id === productId);

  // If the product is not found, show a 404 page
  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto py-16 bg-gray-50 px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-12 p-4 bg-white rounded-lg shadow-xl mb-20">
        {/* Product Image */}
        <div className="flex justify-center items-center bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg"
            layout="responsive" // Makes the image responsive
            priority // Optimizes image loading
          />
        </div>

        {/* Product Details */}
        <div className="py-10">
          <h1 className="text-3xl font-semibold">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center mt-2">
            <span className="text-yellow-400">★</span>
            <span className="ml-2">{product.rating} (120 reviews)</span>
          </div>

          {/* Price */}
          <div className="flex gap-2 mt-2">
            <p className="text-green-600 font-bold">
              ${product.discountedPrice.toFixed(2)}
            </p>
            <p className="text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </p>
          </div>

          {/* Colors */}
          <div className="mt-4">
            <span className="font-semibold">Colors: </span>
            {product.colors?.map((color, index) => (
              <span
                key={index}
                className="mr-2 inline-block w-5 h-5 rounded-full"
                style={{ backgroundColor: color.toLowerCase() }}
              ></span>
            ))}
          </div>

          {/* Description */}
          <p className="mt-4 text-gray-400">{product.description}</p>

          <div className="flex gap-4 mt-6">
            {/* Add to Cart Button */}
            <button className="bg-pink-500 text-white px-6 py-2 hover:bg-purple-700 transition duration-200">
              Add to Cart
            </button>
            {/* Heart Icon */}
            <button aria-label="Add to wishlist" className="text-red-600">
              <FaRegHeart size={30} />
            </button>
          </div>

          {/* Categories */}
          <div className="mt-4 text-gray-400">
            <span className="font-semibold text-black">Categories: </span>
            {product.categories?.join(", ")}
          </div>

          {/* Tags */}
          <div className="mt-4 text-gray-400">
            <span className="font-semibold text-black">Tags: </span>
            {product.tags?.join(", ")}
          </div>

          {/* Social Share Icons */}
          <div className="mt-4 flex gap-4">
            <span className="font-semibold text-black">Share: </span>
            <a href={`https://facebook.com/sharer/sharer.php?u=${window.location.href}`} aria-label="Share on Facebook">
              <FaFacebook size={20} className="text-blue-600" />
            </a>
            <a href={`https://www.instagram.com/?url=${window.location.href}`} aria-label="Share on Instagram">
              <FaInstagram size={20} className="text-pink-700" />
            </a>
            <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} aria-label="Share on Twitter">
              <FaTwitter size={20} className="text-blue-300" />
            </a>
            <a href={`https://pinterest.com/pin/create/button/?url=${window.location.href}`} aria-label="Share on Pinterest">
              <FaPinterest size={20} className="text-red-600" />
            </a>
          </div>
        </div>
      </div>

      {/* Another Section */}
      <div className="bg-gray-100 py-6 px-4 md:px-12">
        <ul className="flex flex-col md:flex-row justify-start items-start md:items-center gap-4 md:gap-14 font-semibold text-lg mb-8">
          <li className="text-[#151875] hover:border-b-2 border-[#151875]">Description</li>
          <li className="text-[#151875] hover:border-b-2 border-[#151875]">Additional Info</li>
          <li className="text-[#151875] hover:border-b-2 border-[#151875]">Reviews</li>
          <li className="text-[#151875] hover:border-b-2 border-[#151875]">Video</li>
        </ul>
        <h1 className="text-black mb-4 font-semibold text-lg md:text-xl">Varius tempor.</h1>
        <p className="text-sm text-gray-400">
          Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum...
        </p>
        <h1 className="text-black mb-4 font-semibold text-lg md:text-xl mt-6">More Details</h1>
        <ul className="space-y-2">
          <li className="text-gray-400 text-sm">
            <FaArrowRight className="inline-flex mr-1" />
            Aliquam dis vulputate vulputate integer sagittis...
          </li>
          {/* More list items... */}
        </ul>
      </div>

      {/* Related Products Section */}
      <div className="bg-white py-10 px-14">
        <h1 className="text-3xl font-bold mb-6 ml-2">Related Products</h1>
        <div className="flex flex-wrap justify-between gap-6">
          {relatedProducts.map((relatedProduct) => (
            <div
              key={relatedProduct.id}
              className="p-4 w-full sm:w-[22%]"
            >
              {/* Related Product Image */}
              <Image
                src={relatedProduct.image}
                alt={relatedProduct.name}
                width={150}
                height={150}
                className="mb-4"
                layout="responsive" // Makes the image responsive
              />

              {/* Related Product Name */}
              <h2 className="text-sm font-semibold">{relatedProduct.name}</h2>

              {/* Related Product Rating */}
              <div className="flex items-center mt-2">
                <span className="text-yellow-400">★</span>
                <span className="ml-2 text-gray-600">{relatedProduct.rating}</span>
              </div>

              {/* Related Product Price */}
              <div className="flex gap-2 mt-2">
                <p className="text-gray-500 line-through">
                  ${relatedProduct.originalPrice.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Centered Image Section */}
      <div className="flex justify-center mt-14 bg-white">
        <Image
          src="/newsletter.png" // Replace with your image path
          alt="News Letter"
          width={700}
          height={600}
          layout="intrinsic" // Ensures image aspect ratio
        />
      </div>
    </div>
  );
};

export default ProductPage;