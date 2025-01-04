// Define the types for categories and tags to ensure strict control over possible values
export type Category = "Furniture" | "Chairs" | "Tables" | "Living Room" | "Office" | "Luxury" | "Design" | "Decor" | "Dining" | "Sofas" | "Minimalist" | "Relaxation";
export type Tag = "Modern" | "Comfortable" | "Stylish" | "Versatile" | "Designer" | "Sleek" | "Chic" | "Elegant" | "Contemporary" | "Family" | "Dining" | "Relax" | "Lounge";

// Define the Product interface
export interface Product {
  id: number;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  image: string;
  imageAlt: string;  // Image alt text for accessibility
  imageSrcset?: string;  // Optional srcset for responsive image handling
  rating?: number; // Optional rating
  colors?: string[]; // Available colors
  description?: string; // Description of the product
  categories?: Category[]; // Specific product categories
  tags?: Tag[]; // Tags related to the product
  createdAt?: string;  // Date when the product was added
  isAvailable: boolean;  // Availability status
  ratingComments?: string[]; // Optional: User reviews/comments on the product
}

// Sample product data
export const products: Product[] = [
  {
    id: 1,
    name: "Vel elit euismod",
    originalPrice: 96,
    discountedPrice: 62,
    image: "/products/pro1.png",
    imageAlt: "Comfortable modern chair",
    rating: 4.5,
    colors: ["Red", "Blue", "Green"],
    description: "A comfortable chair with a modern design, perfect for any living room.",
    categories: ["Furniture", "Chairs", "Living Room"],
    tags: ["Modern", "Comfortable", "Stylish"],
    createdAt: "2023-01-12",
    isAvailable: true,
    ratingComments: ["Great chair! Very comfortable.", "Stylish and durable."]
  },
  {
    id: 2,
    name: "Ultrices condimentum imperdiet",
    originalPrice: 96,
    discountedPrice: 62,
    image: "/products/pro2.png",
    imageAlt: "Stylish versatile table",
    rating: 4.2,
    colors: ["Black", "White"],
    description: "A stylish and versatile table to fit any office or home decor.",
    categories: ["Furniture", "Tables", "Office"],
    tags: ["Versatile", "Stylish"],
    createdAt: "2023-01-15",
    isAvailable: true,
    ratingComments: ["Perfect for my home office.", "Sleek design."]
  },
  {
    id: 3,
    name: "Jonathan adler chair",
    originalPrice: 96,
    discountedPrice: 62,
    image: "/products/pro3.png",
    imageAlt: "Jonathan Adler chic chair",
    rating: 4.7,
    colors: ["Gray", "Blue"],
    description: "A chic and comfy chair by Jonathan Adler, perfect for modern interiors.",
    categories: ["Furniture", "Chairs", "Design"],
    tags: ["Chic", "Designer"],
    createdAt: "2023-02-03",
    isAvailable: true,
    ratingComments: ["Amazing comfort and design.", "A perfect addition to my living room."]
  },
  {
    id: 4,
    name: "Sed at fermentum",
    originalPrice: 96,
    discountedPrice: 62,
    image: "/products/pro4.png",
    imageAlt: "Luxurious armchair",
    rating: 4.0,
    colors: ["Brown", "Beige"],
    description: "A luxurious and durable armchair for all types of interiors.",
    categories: ["Furniture", "Chairs", "Luxury"],
    tags: ["Comfortable"],
    createdAt: "2023-03-01",
    isAvailable: true,
    ratingComments: ["Very sturdy and comfortable.", "Fits perfectly in my living room."]
  },
  {
    id: 5,
    name: "Fusce pellentesque at",
    originalPrice: 96,
    discountedPrice: 62,
    image: "/products/pro5.png",
    imageAlt: "Sleek office chair",
    rating: 4.3,
    colors: ["Black", "Gold"],
    description: "A sleek and stylish office chair designed for comfort and productivity.",
    categories: ["Furniture", "Chairs", "Office"],
    tags: ["Sleek", "Comfortable"],
    createdAt: "2023-03-10",
    isAvailable: false,  // This chair is currently unavailable
    ratingComments: ["Comfortable for long work hours.", "Sleek and modern design."]
  },
  {
    id: 6,
    name: "Vestibulum magna laoreet",
    originalPrice: 96,
    discountedPrice: 62,
    image: "/products/pro6.png",
    imageAlt: "Elegant side table",
    rating: 4.6,
    colors: ["Red", "Orange"],
    description: "An elegant side table that adds a touch of style to any room.",
    categories: ["Furniture", "Tables", "Decor"],
    tags: ["Elegant", "Stylish", "Modern"],
    createdAt: "2023-04-04",
    isAvailable: true,
    ratingComments: ["Perfect for my living room.", "Adds a stylish touch to any room."]
  },
  {
    id: 7,
    name: "Sollicitudin amet orci",
    originalPrice: 96,
    discountedPrice: 62,
    image: "/products/pro7.png",
    imageAlt: "Minimalist side table",
    rating: 4.1,
    colors: ["White", "Gray"],
    description: "A minimalist side table that fits perfectly in any contemporary setting.",
    categories: ["Furniture", "Tables", "Minimalist"],
    tags: ["Contemporary", "Chic"],
    createdAt: "2023-04-10",
    isAvailable: true,
    ratingComments: ["Great minimalist design.", "Perfect for small spaces."]
  },
  {
    id: 8,
    name: "Ultrices mauris sit",
    originalPrice: 96,
    discountedPrice: 62,
    image: "/products/pro8.png",
    imageAlt: "Modern coffee table",
    rating: 4.4,
    colors: ["Black", "Silver"],
    description: "A modern coffee table with a unique design to suit any living space.",
    categories: ["Furniture", "Tables", "Living Room"],
    tags: ["Modern", "Stylish"],
    createdAt: "2023-05-01",
    isAvailable: true,
    ratingComments: ["Unique design.", "Really makes my living room pop."]
  },
  {
    id: 9,
    name: "Pellentesque condimentum ac",
    originalPrice: 96,
    discountedPrice: 62,
    image: "/products/pro9.png",
    imageAlt: "Dining table",
    rating: 4.8,
    colors: ["Brown", "Green"],
    description: "A beautiful dining table perfect for family gatherings and formal dinners.",
    categories: ["Furniture", "Tables", "Dining"],
    tags: ["Dining", "Family", "Elegant"],
    createdAt: "2023-05-12",
    isAvailable: true,
    ratingComments: ["Elegant and spacious.", "Perfect for family dinners."]
  },
  {
    id: 10,
    name: "Cras scelerisque velit",
    originalPrice: 96,
    discountedPrice: 62,
    image: "/products/pro10.png",
    imageAlt: "Modern sofa",
    rating: 4.0,
    colors: ["Blue", "White"],
    description: "A sleek and stylish sofa perfect for modern living rooms.",
    categories: ["Furniture", "Sofas", "Living Room"],
    tags: ["Sleek", "Modern", "Comfortable"],
    createdAt: "2023-06-01",
    isAvailable: true,
    ratingComments: ["Great for modern spaces.", "Very comfortable to sit on."]
  }
];