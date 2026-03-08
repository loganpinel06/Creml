//THIS FILE IS NOT CURRENTLY BEING USED
//THIS CODE IS HERE IN CASE WE NEED REGISTRATION WITH PLANS LIKE PAID/FREE IN FUTURE

//--IGNORE--

//Registration page with plan selection
"use client";

import { useState } from "react";
import Header from "@/components/landing/Header";
import SignUpForm from "@/components/SignUpForm";

export default function RegisterPage() {
  const [selectedPlan, setSelectedPlan] = useState<"free" | "pro" | null>(null);

  const plans = [
    {
      id: "free" as const,
      name: "Free Plan",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with basic access",
      features: [
        "Browse public listings",
        "Basic search filters",
        "View property details",
        "Contact broker information",
        "Save up to 5 favorites",
      ],
      limitations: [
        "Limited to 10 searches per month",
        "No advanced analytics",
        "No priority support",
      ],
      popular: false,
    },
    {
      id: "pro" as const,
      name: "Professional",
      price: "$49",
      period: "per month",
      description: "For serious investors and real estate professionals",
      features: [
        "Unlimited property searches",
        "Advanced filtering & analytics",
        "Market trend reports",
        "Priority broker connections",
        "Unlimited saved properties",
        "Investment calculator tools",
        "Email alerts for new listings",
        "Export data capabilities",
        "Priority customer support",
      ],
      limitations: [],
      popular: true,
    },
  ];

  const handlePlanSelect = (planId: "free" | "pro") => {
    setSelectedPlan(planId);
  };

  if (selectedPlan) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <button
              onClick={() => setSelectedPlan(null)}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to plan selection
            </button>
            <h1 className="text-3xl font-bold text-gray-900">
              Complete Your {plans.find((p) => p.id === selectedPlan)?.name}{" "}
              Registration
            </h1>
          </div>
          <SignUpForm selectedPlan={selectedPlan} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 mt-15">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the plan that best fits your commercial real estate needs.
            You can upgrade or downgrade at any time.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                plan.popular
                  ? "ring-2 ring-blue-600 transform scale-105"
                  : "border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">/ {plan.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-gray-900">
                  What's included:
                </h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-600 mr-3 mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.limitations.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900">
                      Limitations:
                    </h4>
                    <ul className="space-y-2 mt-2">
                      {plan.limitations.map((limitation, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="w-4 h-4 text-gray-400 mr-3 mt-1 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M20 12H4"
                            />
                          </svg>
                          <span className="text-gray-600 text-sm">
                            {limitation}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <button
                onClick={() => handlePlanSelect(plan.id)}
                className={`w-full py-4 px-6 rounded-lg text-lg font-semibold transition-colors ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                Get Started with {plan.name}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I change plans later?
              </h3>
              <p className="text-gray-600">
                Yes! You can upgrade or downgrade your plan at any time. Changes
                take effect immediately, and you'll be charged or credited
                accordingly.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is there a long-term commitment?
              </h3>
              <p className="text-gray-600">
                No, all plans are month-to-month with no long-term contracts.
                You can cancel anytime.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards (Visa, MasterCard, American
                Express) and bank transfers.
              </p>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-16 py-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">
            Trusted by over 500+ commercial real estate professionals
          </p>
          <div className="flex justify-center items-center space-x-8 text-gray-400">
            <span>🔒 SSL Encrypted</span>
            <span>💳 PCI Compliant</span>
            <span>🌟 4.9/5 Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
}
