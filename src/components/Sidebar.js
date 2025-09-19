// Sidebar.js
import { useState, useEffect } from "react";

export default function Sidebar({ filters, onFilterChange }) {
  const [priceRange, setPriceRange] = useState(filters.priceRange);

  // Update local price range when filters change
  useEffect(() => {
    setPriceRange(filters.priceRange);
  }, [filters.priceRange]);

  const handleCategoryClick = (category) => {
    onFilterChange({ ...filters, category });
  };

  const handleBrandClick = (brand) => {
    onFilterChange({ ...filters, brand });
  };

  const handleColorClick = (color) => {
    onFilterChange({ ...filters, color });
  };

  const handlePriceChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
    onFilterChange({ ...filters, priceRange: newPriceRange });
  };

  const handleMoreClick = () => {
    // Reset all filters
    onFilterChange({
      category: "all",
      priceRange: [0, 500],
      color: "all",
      brand: "all",
    });
  };

  return (
    <div className="bg-white font-sans space-y-6">
      {/* Card 1: Hot Deals (Tall) */}
      <div className="bg-gray-50 p-6 rounded-md w-64">
        <h3 className="font-bold text-lg mb-4">Hot Deals</h3>
        <ul className="space-y-4">
          <li
            className={`flex justify-between items-center cursor-pointer ${
              filters.category === "all" ? "text-blue-600" : "text-gray-700"
            }`}
            onClick={() => handleCategoryClick("all")}
          >
            <span>All Categories</span>
            <span className="text-gray-400">120</span>
          </li>
          <li
            className={`flex justify-between items-center cursor-pointer ${
              filters.category === "sneakers"
                ? "text-blue-600"
                : "text-gray-700"
            }`}
            onClick={() => handleCategoryClick("sneakers")}
          >
            <span>Sneakers</span>
            <span className="text-gray-400">80</span>
          </li>
          <li
            className={`flex justify-between items-center cursor-pointer ${
              filters.category === "bags" ? "text-blue-600" : "text-gray-700"
            }`}
            onClick={() => handleCategoryClick("bags")}
          >
            <span>Bags</span>
            <span className="text-gray-400">25</span>
          </li>
          <li
            className={`flex justify-between items-center cursor-pointer ${
              filters.category === "belts" ? "text-blue-600" : "text-gray-700"
            }`}
            onClick={() => handleCategoryClick("belts")}
          >
            <span>Belts</span>
            <span className="text-gray-400">15</span>
          </li>
        </ul>
      </div>

      {/* Card 2: Prices */}
      <div className="bg-gray-50 p-6 rounded-md w-64">
        <h3 className="font-bold text-lg mb-4">Prices</h3>

        {/* Price Range Text */}
        <div className="flex justify-between items-center text-sm mb-4">
          <span className="text-gray-500">Range:</span>
          <span className="font-semibold text-gray-700">
            ${priceRange[0]} - ${priceRange[1]}
          </span>
        </div>

        {/* Price Slider */}
        <div className="w-full h-2 bg-gray-200 rounded-full relative">
          <div
            className="h-full bg-blue-500 rounded-full absolute"
            style={{
              left: `${(priceRange[0] / 500) * 100}%`,
              width: `${((priceRange[1] - priceRange[0]) / 500) * 100}%`,
            }}
          ></div>
          <div
            className="w-4 h-4 bg-white border border-gray-300 rounded-full absolute -top-1 shadow-sm cursor-pointer"
            style={{ left: `${(priceRange[0] / 500) * 100}%` }}
            onMouseDown={(e) => {
              // Implement drag functionality for min price handle
              const startX = e.clientX;
              const startValue = priceRange[0];

              const onMouseMove = (moveEvent) => {
                const deltaX = moveEvent.clientX - startX;
                const containerWidth = e.target.parentElement.offsetWidth;
                const deltaValue = (deltaX / containerWidth) * 500;
                const newValue = Math.max(
                  0,
                  Math.min(
                    priceRange[1] - 10,
                    Math.round(startValue + deltaValue)
                  )
                );

                if (newValue !== priceRange[0]) {
                  handlePriceChange([newValue, priceRange[1]]);
                }
              };

              const onMouseUp = () => {
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", onMouseUp);
              };

              document.addEventListener("mousemove", onMouseMove);
              document.addEventListener("mouseup", onMouseUp);
            }}
          ></div>
          <div
            className="w-4 h-4 bg-white border border-gray-300 rounded-full absolute -top-1 shadow-sm cursor-pointer"
            style={{ left: `${(priceRange[1] / 500) * 100}%` }}
            onMouseDown={(e) => {
              // Implement drag functionality for max price handle
              const startX = e.clientX;
              const startValue = priceRange[1];

              const onMouseMove = (moveEvent) => {
                const deltaX = moveEvent.clientX - startX;
                const containerWidth = e.target.parentElement.offsetWidth;
                const deltaValue = (deltaX / containerWidth) * 500;
                const newValue = Math.max(
                  priceRange[0] + 10,
                  Math.min(500, Math.round(startValue + deltaValue))
                );

                if (newValue !== priceRange[1]) {
                  handlePriceChange([priceRange[0], newValue]);
                }
              };

              const onMouseUp = () => {
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", onMouseUp);
              };

              document.addEventListener("mousemove", onMouseMove);
              document.addEventListener("mouseup", onMouseUp);
            }}
          ></div>
        </div>
      </div>

      {/* Card 3: Color */}
      <div className="bg-gray-50 p-6 rounded-md w-64">
        <h3 className="font-bold text-lg mb-4">Color</h3>
        <div className="flex gap-3 flex-wrap">
          <span
            className={`w-6 h-6 rounded-full cursor-pointer ${
              filters.color === "all"
                ? "border-2 border-blue-500"
                : "border border-gray-300"
            }`}
            style={{ backgroundColor: "#f3f4f6" }}
            onClick={() => handleColorClick("all")}
            title="All Colors"
          ></span>
          <span
            className={`w-6 h-6 rounded-full cursor-pointer ${
              filters.color === "blue"
                ? "border-2 border-blue-500"
                : "border border-gray-300"
            }`}
            style={{ backgroundColor: "#3b82f6" }}
            onClick={() => handleColorClick("blue")}
            title="Blue"
          ></span>
          <span
            className={`w-6 h-6 rounded-full cursor-pointer ${
              filters.color === "red"
                ? "border-2 border-blue-500"
                : "border border-gray-300"
            }`}
            style={{ backgroundColor: "#ef4444" }}
            onClick={() => handleColorClick("red")}
            title="Red"
          ></span>
          <span
            className={`w-6 h-6 rounded-full cursor-pointer ${
              filters.color === "black"
                ? "border-2 border-blue-500"
                : "border border-gray-300"
            }`}
            style={{ backgroundColor: "#000000" }}
            onClick={() => handleColorClick("black")}
            title="Black"
          ></span>
          <span
            className={`w-6 h-6 rounded-full cursor-pointer ${
              filters.color === "white"
                ? "border-2 border-blue-500"
                : "border border-gray-300"
            }`}
            style={{ backgroundColor: "#ffffff" }}
            onClick={() => handleColorClick("white")}
            title="White"
          ></span>
          <span
            className={`w-6 h-6 rounded-full cursor-pointer ${
              filters.color === "gray"
                ? "border-2 border-blue-500"
                : "border border-gray-300"
            }`}
            style={{ backgroundColor: "#9ca3af" }}
            onClick={() => handleColorClick("gray")}
            title="Gray"
          ></span>
        </div>
      </div>

      {/* Card 4: Brand (Small) */}
      <div className="bg-gray-50 p-6 rounded-md w-64">
        <h3 className="font-bold text-lg mb-4">Brand</h3>
        <ul className="space-y-4">
          <li
            className={`flex justify-between items-center cursor-pointer ${
              filters.brand === "all" ? "text-blue-600" : "text-gray-700"
            }`}
            onClick={() => handleBrandClick("all")}
          >
            <span>All Brands</span>
            <span className="text-gray-400">120</span>
          </li>
          <li
            className={`flex justify-between items-center cursor-pointer ${
              filters.brand === "nike" ? "text-blue-600" : "text-gray-700"
            }`}
            onClick={() => handleBrandClick("nike")}
          >
            <span>Nike</span>
            <span className="text-gray-400">35</span>
          </li>
          <li
            className={`flex justify-between items-center cursor-pointer ${
              filters.brand === "adidas" ? "text-blue-600" : "text-gray-700"
            }`}
            onClick={() => handleBrandClick("adidas")}
          >
            <span>Adidas</span>
            <span className="text-gray-400">28</span>
          </li>
          <li
            className={`flex justify-between items-center cursor-pointer ${
              filters.brand === "puma" ? "text-blue-600" : "text-gray-700"
            }`}
            onClick={() => handleBrandClick("puma")}
          >
            <span>Puma</span>
            <span className="text-gray-400">20</span>
          </li>
        </ul>
      </div>

      {/* Card 5: More Button - Adjusted height to match pagination */}
      <div className="pt-4">
        <button
          className="w-full py-3 bg-gray-100 text-gray-600 text-sm font-semibold rounded-md hover:bg-gray-200 transition-colors h-10 flex items-center justify-center"
          onClick={handleMoreClick}
        >
          RESET FILTERS
        </button>
      </div>
    </div>
  );
}
