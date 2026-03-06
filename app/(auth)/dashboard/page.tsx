"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import PropertyCard from "@/components/landing/PropertyCard";

const Dashboard = () => {
  //create a Supabase client instance
  const supabase = createClient();
  //create a router instance for navigation
  const router = useRouter();

  //handle logout functionality
  const handleLogout = async () => {
    //sign the user out with Supabase
    const { error } = await supabase.auth.signOut();
    //handle any errors that occur during logout
    if (error) {
      alert("Logout failed: " + error.message);
      return;
    }

    //reroute to login page with a success message
    router.push("/login?message=Logged+Out+Successfully");
  };

  // Template property data for presentation
  const templateProperties = [
    {
      imagePlaceholder: "Property Image 1",
      title: "Modern Downtown Apartment",
      location: "Downtown Core",
      size: "1,200 sq ft",
      price: "$450,000",
    },
    {
      imagePlaceholder: "Property Image 2",
      title: "Luxury Waterfront Condo",
      location: "Waterfront District",
      size: "1,800 sq ft",
      price: "$750,000",
    },
    {
      imagePlaceholder: "Property Image 3",
      title: "Suburban Family Home",
      location: "Maple Heights",
      size: "2,500 sq ft",
      price: "$650,000",
    },
    {
      imagePlaceholder: "Property Image 4",
      title: "Historic Townhouse",
      location: "Old Town",
      size: "1,600 sq ft",
      price: "$525,000",
    },
    {
      imagePlaceholder: "Property Image 5",
      title: "New Construction Villa",
      location: "Pine Valley",
      size: "3,200 sq ft",
      price: "$890,000",
    },
    {
      imagePlaceholder: "Property Image 6",
      title: "Cozy Studio Loft",
      location: "Arts District",
      size: "800 sq ft",
      price: "$285,000",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-3xl font-bold text-gray-900">
              Creml Dashboard
            </h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-10rem)]">
          {/* Left Side - Map Placeholder */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <div className="p-4 border-b flex-shrink-0">
              <h2 className="text-xl font-semibold text-gray-900">
                Property Map
              </h2>
              <p className="text-gray-600 mt-1">
                Interactive map view of available properties
              </p>
            </div>
            <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  Interactive Map
                </h3>
                <p className="text-gray-600 max-w-sm">
                  Map integration will display property locations,
                  neighborhoods, and nearby amenities
                </p>
              </div>

              {/* Decorative map pins */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Right Side - Property Cards */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <div className="p-4 border-b flex-shrink-0">
              <h2 className="text-xl font-semibold text-gray-900">
                Available Properties
              </h2>
              <p className="text-gray-600 mt-1">
                Browse our featured property listings
              </p>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                {templateProperties.map((property, index) => (
                  <PropertyCard
                    key={index}
                    imagePlaceholder={property.imagePlaceholder}
                    title={property.title}
                    location={property.location}
                    size={property.size}
                    price={property.price}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
