//landing page

// app/page.tsx
"use client";

import { useState } from "react";
//improt SignUpForm component for registering new users
import SignUpForm from "@/components/SignUpForm";

export default function LandingPage() {
  //state for controlling modal visibility
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to Creml</h1>

      {/* SignUp button which will update modal state to show the sign up form */}
      <button
        onClick={() => setShowModal(true)}
        className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors cursor-pointer"
      >
        Sign Up
      </button>

      {/* Show the Modal if active */}
      {showModal && (
        //blur background, center modal, and close on click outside
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setShowModal(false)} // clicking outside closes modal
        >
          {/* div for actual modal window */}
          <div
            className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative"
            onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside
          >
            {/* Close button "X" s*/}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg font-bold cursor-pointer"
            >
              &times;
            </button>

            {/* Render SignUpForm Component */}
            <SignUpForm />
          </div>
        </div>
      )}
    </div>
  );
}
