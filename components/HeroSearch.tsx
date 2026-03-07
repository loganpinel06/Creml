"use client";

import React, { useState } from "react";

export default function HeroSearch() {
  const [locationSearch, setLocationSearch] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sizeUnits, setSizeUnits] = useState("");
  const [sizeSqft, setSizeSqft] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality would go here
    console.log({
      locationSearch,
      propertyType,
      priceRange,
      sizeUnits,
      sizeSqft,
    });
  };

  return (
    <div className="bg-linear-to-br from-blue-900 to-gray-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Perfect Commercial Property
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover premium office spaces, retail locations, and industrial
            properties tailored to your business needs.
          </p>
        </div>

        {/* Search Form */}
        <form
          onSubmit={handleSearch}
          className="bg-white rounded-lg shadow-xl p-6"
        >
          {/* Main Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Location"
                value={locationSearch}
                onChange={(e) => setLocationSearch(e.target.value)}
                className="w-full px-4 py-3 pl-12 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {/* Property Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Property Type
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              >
                <option value="">All Types</option>
                <option value="multifamily">Multifamily</option>
                <option value="office">Office</option>
                <option value="retail">Retail</option>
                <option value="industrial">Industrial</option>
                <option value="warehouse">Warehouse</option>
                <option value="mixed-use">Mixed Use</option>
                <option value="land">Land</option>
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price Range
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              >
                <option value="">Any Price</option>
                <option value="0-500k">$0 - $500K</option>
                <option value="500k-1m">$500K - $1M</option>
                <option value="1m-5m">$1M - $5M</option>
                <option value="5m-10m">$5M - $10M</option>
                <option value="10m+">$10M+</option>
              </select>
            </div>

            {/* Size Units */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Size (Units)
              </label>
              <select
                value={sizeUnits}
                onChange={(e) => setSizeUnits(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              >
                <option value="">Any Size</option>
                <option value="0-10">Under 10</option>
                <option value="10-20">10-20</option>
                <option value="20-30">20-30</option>
                <option value="30-50">30-50</option>
                <option value="50+">50+</option>
              </select>
            </div>

            {/* Size Sqft */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Size (Sq Ft)
              </label>
              <select
                value={sizeSqft}
                onChange={(e) => setSizeSqft(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              >
                <option value="">Any Size</option>
                <option value="0-1000">Under 1,000</option>
                <option value="1000-5000">1,000 - 5,000</option>
                <option value="5000-10000">5,000 - 10,000</option>
                <option value="10000-50000">10,000 - 50,000</option>
                <option value="50000+">50,000+</option>
              </select>
            </div>

            {/* Clear Filters Button */}
            <div className="flex items-end">
              <button
                type="button"
                onClick={() => {
                  setLocationSearch("");
                  setPropertyType("");
                  setPriceRange("");
                  setSizeUnits("");
                  setSizeSqft("");
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Search Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Search Properties
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
