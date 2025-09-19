// SortBar.js
import { Bars3Icon } from "@heroicons/react/24/outline";
import imgSwitch from "../assets/images/img_switch.svg";

export default function SortBar({
  sortBy,
  onSortChange,
  productsPerPage,
  onProductsPerPageChange,
  viewMode,
  onViewModeChange,
}) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-md w-full font-sans mb-4">
      <div className="flex items-center space-x-4">
        <span className="text-gray-600 text-sm">24 Items</span>

        {/* Sort By Dropdown */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-600 text-sm">Sort By</span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="appearance-none border border-gray-300 rounded-md py-2 px-3 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Name</option>
              <option>Price</option>
              <option>Date</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Show Dropdown */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-600 text-sm">Show</span>
          <div className="relative">
            <select
              value={productsPerPage}
              onChange={(e) => onProductsPerPageChange(Number(e.target.value))}
              className="appearance-none border border-gray-300 rounded-md py-2 px-3 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option>12</option>
              <option>24</option>
              <option>48</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* View Toggles */}
      <div className="flex items-center border border-gray-200 rounded-md overflow-hidden">
        <button
          className={`p-2 ${
            viewMode === "grid"
              ? "bg-white text-blue-500"
              : "bg-white text-gray-400"
          } border-r border-gray-200`}
          onClick={() => onViewModeChange("grid")}
        >
          <img src={imgSwitch} alt="Grid View" className="h-4 w-4" />
        </button>
        <button
          className={`p-2 ${
            viewMode === "list"
              ? "bg-white text-blue-500"
              : "bg-white text-gray-400"
          }`}
          onClick={() => onViewModeChange("list")}
        >
          <Bars3Icon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
