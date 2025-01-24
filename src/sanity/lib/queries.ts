// /sanity/lib/queries.ts

// Query for fetching all products
export const ProductsList = `
  *[_type == "product"]{
    _id,
    name,
    price,
    description,
    discountPercentage,
    stockLevel,
    category,
    "imageUrl": image.asset -> url
  }
`;

// Query for fetching the product details by ID
export const ProductDetailQuery = `
  *[_type == "product" && _id == $id][0] {
    _id,
    name,
    price,
    description,
    discountPercentage,
    stockLevel,
    category,
    "imageUrl": image.asset -> url
  }
`;