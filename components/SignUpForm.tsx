//Professional sign up form component
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface SignUpFormProps {
  selectedPlan?: "free" | "pro";
}

export default function SignUpForm({ selectedPlan = "free" }: SignUpFormProps) {
  // State for form fields and error/success messages
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    agreeToTerms: false,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const isPro = selectedPlan === "pro";

  //setup router for navigation after successful signup
  const router = useRouter();

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Event handler for form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validation
    if (
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.firstName ||
      !formData.lastName
    ) {
      setError("All required fields must be filled out.");
      return;
    }

    if (isPro && !formData.company) {
      setError("Company name is required for Professional plan.");
      return;
    }

    if (!formData.agreeToTerms) {
      setError("You must agree to the Terms of Service to continue.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    //BACKEND API CALL FOR SIGNUP
    try {
      //fetch backend API to create user with Supabase Auth
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          firstName: formData.firstName,
          lastName: formData.lastName,
          company: isPro ? formData.company : undefined,
          plan: selectedPlan,
        }),
      });
      //if api response is not ok, handle error
      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.error || "Signup failed. Please try again.");
        return;
      }
      //successful signup
      const data = await res.json();
      console.log("User created:", data);
      //set the success message
      setSuccess(
        `Signup successful! Welcome ${data.user.email} to Creml ${isPro ? "Professional" : "Free"} plan.`,
      );
      console.log("Sign up data:", { ...formData, plan: selectedPlan });

      //redirect to dashboard after short delay
      setTimeout(() => router.push("/dashboard"), 1000);
    } catch (err) {
      console.error("Unexpected error:", err);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Create Your {isPro ? "Professional" : "Free"} Account
          </h2>
          <p className="text-gray-600">
            {isPro
              ? "Join our professional network and unlock premium features"
              : "Get started with our free plan and upgrade anytime"}
          </p>
          {isPro && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-blue-800 font-medium">
                🎉 Professional Plan: $49/month • Full access to all features
              </p>
            </div>
          )}
        </div>

        {/* Display error or success messages */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-red-600 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-red-800 font-medium">{error}</p>
            </div>
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-green-600 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-green-800 font-medium">{success}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900 bg-white placeholder-gray-500"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900 bg-white placeholder-gray-500"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          {/* Company Field (Required for Pro) */}
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Company Name{" "}
              <span className="text-red-500">{isPro ? "*" : "(Optional)"}</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900 bg-white placeholder-gray-500"
              placeholder="Your Company Name"
              required={isPro}
            />
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900 bg-white placeholder-gray-500"
                placeholder="john@email.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900 bg-white placeholder-gray-500"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          {/* Password Fields */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900 bg-white placeholder-gray-500"
                placeholder="Minimum 8 characters"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900 bg-white placeholder-gray-500"
                placeholder="Re-enter your password"
                required
              />
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start">
            <input
              id="agreeToTerms"
              name="agreeToTerms"
              type="checkbox"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
              required
            />
            <label
              htmlFor="agreeToTerms"
              className="ml-3 block text-sm text-gray-900"
            >
              I agree to the{" "}
              <a
                href="#"
                className="text-blue-600 hover:text-blue-500 underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-blue-600 hover:text-blue-500 underline"
              >
                Privacy Policy
              </a>
              *
            </label>
          </div>

          {isPro && (
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                Payment Information
              </h4>
              <p className="text-sm text-gray-600 mb-3">
                You'll be redirected to our secure payment processor to complete
                your subscription.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>🔒 SSL Secured</span>
                <span>💳 All major cards accepted</span>
                <span>🔄 Cancel anytime</span>
              </div>
            </div>
          )}

          <button
            type="submit"
            className={`w-full py-4 px-6 rounded-lg text-lg font-semibold transition-colors cursor-pointer ${
              isPro
                ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-200"
                : "bg-gray-900 text-white hover:bg-gray-800 focus:ring-4 focus:ring-gray-200"
            }`}
          >
            {isPro
              ? "Start Professional Plan - $49/month"
              : "Create Free Account"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Sign in here
            </a>
          </p>
          {isPro && (
            <p className="text-xs text-gray-500 mt-4">
              By creating an account, you'll start your 7-day free trial. Your
              subscription begins after the trial period.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
