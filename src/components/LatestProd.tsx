import { useState, useEffect } from 'react';
import Image from 'next/image';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

// Define the product type
interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
  discountPrice: string;
}

// Define the props for the ProductCard component
interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: string;
  discountPrice: string;
}

function ProductCard({ id, image, title, price, discountPrice }: ProductCardProps) {
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    // Check if the item is already in the wishlist when the component mounts
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const itemInWishlist = savedWishlist.some((item: Product) => item.id === id);
    setIsInWishlist(itemInWishlist);
  }, [id]);

  const toggleWishlist = () => {
    // Create item object with the correct type
    const item: Product = { id, image, title, price, discountPrice };

    // Get current wishlist from localStorage
    let wishlist: Product[] = JSON.parse(localStorage.getItem('wishlist') || '[]');

    if (isInWishlist) {
      // Remove item from wishlist
      wishlist = wishlist.filter((item) => item.id !== id);
    } else {
      // Add item to wishlist
      wishlist.push(item);
    }

    // Save updated wishlist to localStorage
    localStorage.setItem('wishlist', JSON.stringify(wishlist));

    // Update state to reflect the change
    setIsInWishlist(!isInWishlist);
  };

  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden p-5 transition-transform transform group-hover:scale-105">
      
      {/* Sale Tag */}
      <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transition duration-300">
        Sale
      </div>

      {/* Hover Icons */}
      <div className="absolute bottom-12 left-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300 z-10">
        <div className="w-8 h-8 bg-white text-purple-900 rounded-full flex justify-center items-center shadow-md hover:bg-purple-100 transition">
          <FiShoppingCart />
        </div>
        <div
          onClick={toggleWishlist}
          className={`w-8 h-8 rounded-full flex justify-center items-center shadow-md transition ${isInWishlist ? 'bg-red-500 text-white' : 'bg-white text-red-600'} hover:bg-red-100`}
        >
          <FaRegHeart />
        </div>
        <div className="w-8 h-8 bg-white text-blue-400 rounded-full flex justify-center items-center shadow-md hover:bg-blue-100 transition">
          <AiOutlineSearch />
        </div>
      </div>

      {/* Product Image */}
      <div className="flex justify-center items-center bg-gray-100 group-hover:bg-white transition duration-300 h-44 w-full">
        <Image
          src={image}
          alt={title}
          width={160}
          height={160}
          objectFit="contain"
          className="object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* Title, Price and Discount Price in Same Row */}
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-md font-semibold text-blue-900 truncate w-3/5">{title}</h3>
          <p className="text-[18px] font-semibold text-black">{price}</p>
          <p className="text-[18px] font-bold text-red-600 line-through">{discountPrice}</p>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const products: Product[] = [
    { id: 1, image: '/Latest/Lat1.png', title: 'Comfort Handy Craft', price: '$4200', discountPrice: '$5000' },
    { id: 2, image: '/Latest/Lat2.png', title: 'Stylish Wooden Chair', price: '$3200', discountPrice: '$4000' },
    { id: 3, image: '/Latest/Lat3.png', title: 'Smart Watch', price: '$150', discountPrice: '$250' },
    { id: 4, image: '/Latest/Lat4.png', title: 'Wireless Headphones', price: '$99', discountPrice: '$150' },
    { id: 5, image: '/Latest/Lat5.png', title: 'Luxury Sofa Set', price: '$2500', discountPrice: '$3000' },
    { id: 6, image: '/Latest/Lat6.png', title: 'Gaming Chair', price: '$500', discountPrice: '$700' },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Latest Products</h1>

      {/* Grid for Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
