//Login page
"use client";

import Header from "@/components/landing/Header";
import SignInForm from "@/components/SignInForm";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const message = searchParams.get("message");

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Header />
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 mt-15">
        {message && (
          <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-800 text-sm text-center">{message}</p>
          </div>
        )}
        <SignInForm />
      </div>
    </div>
  );
}
