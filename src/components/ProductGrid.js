// ProductGrid.js
import { useState, useEffect, useMemo } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

// Import product images
import imgProduct_1 from "../assets/images/img_image_product.png";
import imgProduct_2 from "../assets/images/img_image_product_290x334.png";
import imgProduct_3 from "../assets/images/img_image_product_288x330.png";
import imgProduct_4 from "../assets/images/img_product_picture02.png";
import imgProduct_5 from "../assets/images/img_product_picture03.png";
import imgProduct_6 from "../assets/images/img_product_picture01.png";

// Extended product data with more variety
const allProducts = [
  {
    id: 1,
    name: "Nike Air Max 270 React",
    price: 299.43,
    oldPrice: 534.33,
    discount: 24,
    image: imgProduct_1,
    isHot: true,
    category: "sneakers",
    color: "blue",
    brand: "nike",
    rating: 4,
    createdAt: "2023-01-15",
  },
  {
    id: 2,
    name: "Adidas Ultraboost 21",
    price: 249.99,
    oldPrice: 399.99,
    discount: 30,
    image: imgProduct_2,
    isHot: true,
    category: "sneakers",
    color: "black",
    brand: "adidas",
    rating: 5,
    createdAt: "2023-02-20",
  },
  {
    id: 3,
    name: "Puma RS-X3",
    price: 179.99,
    oldPrice: 229.99,
    discount: 22,
    image: imgProduct_3,
    isHot: true,
    category: "sneakers",
    color: "red",
    brand: "puma",
    rating: 4,
    createdAt: "2023-03-10",
  },
  {
    id: 4,
    name: "Reebok Nano X1",
    price: 199.99,
    oldPrice: 259.99,
    discount: 23,
    image: imgProduct_4,
    isHot: true,
    category: "sneakers",
    color: "white",
    brand: "reebok",
    rating: 3,
    createdAt: "2023-01-05",
  },
  {
    id: 5,
    name: "New Balance 550",
    price: 149.99,
    oldPrice: 199.99,
    discount: 25,
    image: imgProduct_5,
    isHot: true,
    category: "sneakers",
    color: "gray",
    brand: "new balance",
    rating: 4,
    createdAt: "2023-04-12",
  },
  {
    id: 6,
    name: "Converse Chuck Taylor",
    price: 65.99,
    oldPrice: 75.99,
    discount: 13,
    image: imgProduct_6,
    isHot: false,
    category: "sneakers",
    color: "black",
    brand: "converse",
    rating: 4,
    createdAt: "2023-05-18",
  },
  {
    id: 7,
    name: "Nike Air Force 1",
    price: 99.99,
    oldPrice: 120.99,
    discount: 17,
    image: imgProduct_1,
    isHot: false,
    category: "sneakers",
    color: "white",
    brand: "nike",
    rating: 5,
    createdAt: "2023-06-22",
  },
  {
    id: 8,
    name: "Adidas Stan Smith",
    price: 85.99,
    oldPrice: 95.99,
    discount: 10,
    image: imgProduct_2,
    isHot: false,
    category: "sneakers",
    color: "white",
    brand: "adidas",
    rating: 4,
    createdAt: "2023-02-14",
  },
  {
    id: 9,
    name: "Leather Business Bag",
    price: 199.99,
    oldPrice: 299.99,
    discount: 33,
    image: imgProduct_3,
    isHot: true,
    category: "bags",
    color: "brown",
    brand: "siemens",
    rating: 4,
    createdAt: "2023-03-30",
  },
  {
    id: 10,
    name: "Canvas Backpack",
    price: 59.99,
    oldPrice: 79.99,
    discount: 25,
    image: imgProduct_4,
    isHot: false,
    category: "bags",
    color: "blue",
    brand: "vans",
    rating: 3,
    createdAt: "2023-04-05",
  },
  {
    id: 11,
    name: "Genuine Leather Belt",
    price: 45.99,
    oldPrice: 65.99,
    discount: 30,
    image: imgProduct_5,
    isHot: false,
    category: "belts",
    color: "black",
    brand: "all stars",
    rating: 4,
    createdAt: "2023-05-10",
  },
  {
    id: 12,
    name: "Formal Dress Belt",
    price: 35.99,
    oldPrice: 45.99,
    discount: 22,
    image: imgProduct_6,
    isHot: false,
    category: "belts",
    color: "brown",
    brand: "siemens",
    rating: 3,
    createdAt: "2023-06-15",
  },
  {
    id: 13,
    name: "Nike Jordan 1",
    price: 179.99,
    oldPrice: 220.99,
    discount: 19,
    image: imgProduct_1,
    isHot: true,
    category: "sneakers",
    color: "red",
    brand: "nike",
    rating: 5,
    createdAt: "2023-07-01",
  },
  {
    id: 14,
    name: "Adidas NMD R1",
    price: 130.99,
    oldPrice: 160.99,
    discount: 19,
    image: imgProduct_2,
    isHot: false,
    category: "sneakers",
    color: "black",
    brand: "adidas",
    rating: 4,
    createdAt: "2023-07-05",
  },
  {
    id: 15,
    name: "Puma Cali Sport",
    price: 89.99,
    oldPrice: 110.99,
    discount: 19,
    image: imgProduct_3,
    isHot: false,
    category: "sneakers",
    color: "white",
    brand: "puma",
    rating: 3,
    createdAt: "2023-07-10",
  },
  {
    id: 16,
    name: "Reebok Club C 85",
    price: 79.99,
    oldPrice: 99.99,
    discount: 20,
    image: imgProduct_4,
    isHot: false,
    category: "sneakers",
    color: "white",
    brand: "reebok",
    rating: 4,
    createdAt: "2023-07-15",
  },
  {
    id: 17,
    name: "New Balance 574",
    price: 89.99,
    oldPrice: 109.99,
    discount: 18,
    image: imgProduct_5,
    isHot: false,
    category: "sneakers",
    color: "gray",
    brand: "new balance",
    rating: 4,
    createdAt: "2023-07-20",
  },
  {
    id: 18,
    name: "Converse One Star",
    price: 75.99,
    oldPrice: 85.99,
    discount: 12,
    image: imgProduct_6,
    isHot: false,
    category: "sneakers",
    color: "blue",
    brand: "converse",
    rating: 3,
    createdAt: "2023-07-25",
  },
  {
    id: 19,
    name: "Nike Blazer Mid",
    price: 99.99,
    oldPrice: 119.99,
    discount: 17,
    image: imgProduct_1,
    isHot: false,
    category: "sneakers",
    color: "black",
    brand: "nike",
    rating: 4,
    createdAt: "2023-08-01",
  },
  {
    id: 20,
    name: "Adidas Superstar",
    price: 89.99,
    oldPrice: 109.99,
    discount: 18,
    image: imgProduct_2,
    isHot: false,
    category: "sneakers",
    color: "white",
    brand: "adidas",
    rating: 5,
    createdAt: "2023-08-05",
  },
  {
    id: 21,
    name: "Puma Future Rider",
    price: 79.99,
    oldPrice: 99.99,
    discount: 20,
    image: imgProduct_3,
    isHot: false,
    category: "sneakers",
    color: "black",
    brand: "puma",
    rating: 4,
    createdAt: "2023-08-10",
  },
  {
    id: 22,
    name: "Reebok Workout Plus",
    price: 69.99,
    oldPrice: 89.99,
    discount: 22,
    image: imgProduct_4,
    isHot: false,
    category: "sneakers",
    color: "white",
    brand: "reebok",
    rating: 3,
    createdAt: "2023-08-15",
  },
  {
    id: 23,
    name: "New Balance 327",
    price: 99.99,
    oldPrice: 119.99,
    discount: 17,
    image: imgProduct_5,
    isHot: false,
    category: "sneakers",
    color: "blue",
    brand: "new balance",
    rating: 4,
    createdAt: "2023-08-20",
  },
  {
    id: 24,
    name: "Converse Run Star",
    price: 109.99,
    oldPrice: 129.99,
    discount: 15,
    image: imgProduct_6,
    isHot: true,
    category: "sneakers",
    color: "black",
    brand: "converse",
    rating: 4,
    createdAt: "2023-08-25",
  },
];

export default function ProductGrid({
  filters,
  sortBy,
  currentPage,
  productsPerPage,
  onPageChange,
}) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Apply filters and sorting
  useMemo(() => {
    let result = [...allProducts];

    // Apply category filter
    if (filters.category !== "all") {
      result = result.filter(
        (product) => product.category === filters.category
      );
    }

    // Apply price range filter
    result = result.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    );

    // Apply color filter
    if (filters.color !== "all") {
      result = result.filter((product) => product.color === filters.color);
    }

    // Apply brand filter
    if (filters.brand !== "all") {
      result = result.filter((product) => product.brand === filters.brand);
    }

    // Apply sorting
    switch (sortBy) {
      case "Name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Price":
        result.sort((a, b) => a.price - b.price);
        break;
      case "Date":
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  }, [filters, sortBy]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <div className="w-full flex flex-col gap-8">
      {/* Product Grid - Changed to 4 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* No results message */}
      {paginatedProducts.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No products found matching your filters.
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}
