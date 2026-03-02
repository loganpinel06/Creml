//Hero section for the landing page

"use client";

import { useState } from "react";
import SignUpForm from "../SignUpForm";

export default function Hero() {
  const [modal, setModal] = useState("");
  return (
    <section className="relative pt-16 bg-linear-to-r from-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Trusted Partner in
            <span className="block text-blue-400">Commercial Real Estate</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            No more wasting time searching for the right property or dealing
            with unreliable brokers. We provide quality listings and accessible
            data to help make investing in commercial real estate simple and
            successful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              onClick={() => setModal("signup")}
            >
              Try for Free Today!
            </button>
          </div>
        </div>
      </div>
      {/* SignUpForm Modal */}
      {modal === "signup" && (
        //blur background, center modal, close on click outside
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setModal("")}
        >
          {/* main modal box */}
          <div
            className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} //prevent click from closing modal when clicking inside
          >
            {/* close button */}
            <button
              onClick={() => setModal("")}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg font-bold cursor-pointer"
            >
              &times;
            </button>
            <SignUpForm />
          </div>
        </div>
      )}
    </section>
  );
}
