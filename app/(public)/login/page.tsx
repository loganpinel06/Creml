//Login page
"use client";

import Header from "@/components/landing/Header";
import SignInForm from "@/components/SignInForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Header />
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 mt-15">
        <SignInForm />
      </div>
    </div>
  );
}
