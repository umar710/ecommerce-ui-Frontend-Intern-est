import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

// Import product images
import imgProduct_1 from "../assets/images/img_image_product.png";
import imgProduct_2 from "../assets/images/img_image_product_290x334.png";
import imgProduct_3 from "../assets/images/img_image_product_288x330.png";

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 6,
    minutes: 0,
    seconds: 0,
  });

  const flashSaleProducts = [
    {
      id: 101,
      name: "Nike Air Max 270 React",
      price: 149.99,
      oldPrice: 299.99,
      discount: 50,
      image: imgProduct_1,
      isHot: true,
      category: "sneakers",
      color: "blue",
      brand: "nike",
      rating: 4,
      createdAt: "2023-09-01",
    },
    {
      id: 102,
      name: "Adidas Ultraboost 21 Flash",
      price: 124.99,
      oldPrice: 249.99,
      discount: 50,
      image: imgProduct_2,
      isHot: true,
      category: "sneakers",
      color: "black",
      brand: "adidas",
      rating: 5,
      createdAt: "2023-09-05",
    },
    {
      id: 103,
      name: "Puma RS-X3 Special",
      price: 89.99,
      oldPrice: 179.99,
      discount: 50,
      image: imgProduct_3,
      isHot: true,
      category: "sneakers",
      color: "red",
      brand: "puma",
      rating: 4,
      createdAt: "2023-09-10",
    },
    {
      id: 104,
      name: "Limited Edition Running Shoes",
      price: 99.99,
      oldPrice: 199.99,
      discount: 50,
      image: imgProduct_1,
      isHot: true,
      category: "sneakers",
      color: "white",
      brand: "nike",
      rating: 4,
      createdAt: "2023-09-15",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newSeconds = prevTime.seconds - 1;
        const newMinutes =
          newSeconds < 0 ? prevTime.minutes - 1 : prevTime.minutes;
        const newHours = newMinutes < 0 ? prevTime.hours - 1 : prevTime.hours;

        return {
          hours: newHours < 0 ? 0 : newHours,
          minutes: newMinutes < 0 ? 59 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
      {/* Flash Sale Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <div className="bg-red-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-center sm:text-left">
            <h2 className="text-sm sm:text-lg font-bold">Super Flash Sale</h2>
            <p className="text-xs sm:text-sm">50% OFF</p>
          </div>

          {/* Countdown Timer */}
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="bg-gray-800 text-white px-2 sm:px-3 py-1 rounded text-center min-w-[35px] sm:min-w-[40px]">
              <span className="text-sm sm:text-lg font-bold">
                {timeLeft.hours.toString().padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs block">Hours</span>
            </div>
            <span className="text-lg sm:text-xl font-bold text-red-500">:</span>
            <div className="bg-gray-800 text-white px-2 sm:px-3 py-1 rounded text-center min-w-[35px] sm:min-w-[40px]">
              <span className="text-sm sm:text-lg font-bold">
                {timeLeft.minutes.toString().padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs block">Mins</span>
            </div>
            <span className="text-lg sm:text-xl font-bold text-red-500">:</span>
            <div className="bg-gray-800 text-white px-2 sm:px-3 py-1 rounded text-center min-w-[35px] sm:min-w-[40px]">
              <span className="text-sm sm:text-lg font-bold">
                {timeLeft.seconds.toString().padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs block">Secs</span>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <button className="bg-blue-500 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-md hover:bg-blue-600 transition-colors text-xs sm:text-sm">
          View All
        </button>
      </div>

      {/* Flash Sale Products Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {flashSaleProducts.map((product) => (
          <div key={product.id} className="relative">
            <ProductCard product={product} />
            {/* Flash Sale Badge */}
            <div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] xs:text-xs font-bold px-1.5 xs:px-2 py-0.5 xs:py-1 rounded">
              FLASH SALE
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
