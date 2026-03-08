//Registration page
"use client";

import { useState } from "react";
import Header from "@/components/landing/Header";
import SignUpForm from "@/components/SignUpForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Header />
      <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <SignUpForm />
      </div>
    </div>
  );
}
