// Home.js
import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import SortBar from "../components/SortBar";
import ProductGrid from "../components/ProductGrid";

const Home = () => {
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: [0, 500],
    color: "all",
    brand: "all",
  });

  const [sortBy, setSortBy] = useState("Name");
  const [productsPerPage, setProductsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid");

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
  };

  const handleProductsPerPageChange = (count) => {
    setProductsPerPage(count);
    setCurrentPage(1); // Reset to first page when items per page changes
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  return (
    <div>
      <Header />
      <div className="flex max-w-7xl mx-auto mt-6 px-6 gap-6">
        {/* Sidebar on left */}
        <div className="w-64">
          <Sidebar filters={filters} onFilterChange={handleFilterChange} />
        </div>
        {/* Main content on right */}
        <div className="flex-1">
          <HeroSection />
          <SortBar
            sortBy={sortBy}
            onSortChange={handleSortChange}
            productsPerPage={productsPerPage}
            onProductsPerPageChange={handleProductsPerPageChange}
            viewMode={viewMode}
            onViewModeChange={handleViewModeChange}
          />
          <ProductGrid
            filters={filters}
            sortBy={sortBy}
            currentPage={currentPage}
            productsPerPage={productsPerPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
