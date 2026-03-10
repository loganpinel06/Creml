"use client";

import { useMemo, useState } from "react";
import Header from "@/components/landing/Header";

type BrokerApplicationForm = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  brokerageWebsite: string;
  licenseNumber: string;
  licenseState: string;
  statesLicensed: string[];
  yearsExperience: string;
  primaryMarkets: string;
  specialties: string[];
  profileSummary: string;
  agreeAccuracy: boolean;
  agreeTerms: boolean;
};

const INPUT_CLASS =
  "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900 bg-white placeholder-gray-500";

const CHECKBOX_CLASS =
  "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded";

const US_STATES = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
  "DC",
];

const SPECIALTIES = [
  "Office",
  "Retail",
  "Industrial",
  "Multifamily",
  "Land",
  "Mixed-Use",
  "Hospitality",
  "Medical",
  "Student Housing",
  "Self-Storage",
  "Debt & Equity",
  "1031 Exchange",
  "Property Management",
  "Leasing",
];

export default function ApplyPage() {
  const [formData, setFormData] = useState<BrokerApplicationForm>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    brokerageWebsite: "",
    licenseNumber: "",
    licenseState: "",
    statesLicensed: [],
    yearsExperience: "",
    primaryMarkets: "",
    specialties: [],
    profileSummary: "",
    agreeAccuracy: false,
    agreeTerms: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const specialtiesCount = useMemo(
    () => formData.specialties.length,
    [formData.specialties.length],
  );

  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const toggleSpecialty = (value: string) => {
    setFormData((prev) => {
      const exists = prev.specialties.includes(value);
      return {
        ...prev,
        specialties: exists
          ? prev.specialties.filter((s) => s !== value)
          : [...prev.specialties, value],
      };
    });
  };

  const handleStatesLicensedChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selected = Array.from(e.target.selectedOptions).map((o) => o.value);
    setFormData((prev) => ({ ...prev, statesLicensed: selected }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.fullName || !formData.email || !formData.phone) {
      setError("Please complete your contact information.");
      return;
    }
    if (!formData.company) {
      setError("Please provide your brokerage/company name.");
      return;
    }
    if (!formData.licenseNumber || !formData.licenseState) {
      setError("Please provide your license number and state.");
      return;
    }
    if (formData.statesLicensed.length === 0) {
      setError("Please select at least one state where you are licensed.");
      return;
    }
    if (!formData.yearsExperience) {
      setError("Please select your years of experience.");
      return;
    }
    if (formData.specialties.length === 0) {
      setError("Please select at least one specialty.");
      return;
    }
    if (!formData.agreeAccuracy || !formData.agreeTerms) {
      setError("Please confirm the accuracy and accept the terms to continue.");
      return;
    }

    // No backend wiring here by request; hook your API call up in this handler.
    console.log("Broker application (client-only):", {
      ...formData,
    });

    setSuccess(
      "Application prepared! Wire up your backend in this page’s submit handler to finalize submission.",
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Apply for Broker Status
          </h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            Tell us about your brokerage, licensing, and specialties. Once
            approved, you’ll unlock broker-only features for listings and
            visibility across the platform.
          </p>
        </div>

        {/* Alerts */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-start">
              <svg
                className="w-5 h-5 text-red-600 mr-3 mt-0.5 shrink-0"
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
            <div className="flex items-start">
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-green-800 font-medium">{success}</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left: Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c0 3.866-4 7-4 7h8s-4-3.134-4-7a4 4 0 10-8 0c0 1.657.806 3.156 2.031 4.125M12 11a4 4 0 118 0c0 1.657-.806 3.156-2.031 4.125"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    What you’ll get
                  </h2>
                  <p className="text-sm text-gray-600">
                    Broker-only tools and visibility
                  </p>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Post and manage listings with enhanced reach</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Broker badge on your profile and listings</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Access to broker-only lead and inquiry workflows</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Requirements
              </h3>
              <p className="text-sm text-gray-600">
                We verify licensing and brokerage details before approval.
              </p>
              <div className="mt-4 grid grid-cols-1 gap-3">
                <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                  <p className="text-sm font-medium text-gray-900">
                    Active license
                  </p>
                  <p className="text-sm text-gray-600">
                    Provide license number and state(s).
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                  <p className="text-sm font-medium text-gray-900">
                    Brokerage affiliation
                  </p>
                  <p className="text-sm text-gray-600">
                    Company name and a contact method.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Review timeline
              </h3>
              <p className="text-sm text-gray-600">
                Most applications are reviewed within 1–3 business days once
                your backend submission is connected.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Broker Application
                </h2>
                <p className="text-gray-600 mt-1">
                  Fields marked with <span className="text-red-500">*</span> are
                  required.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact */}
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleTextChange}
                        className={INPUT_CLASS}
                        placeholder="Jane Broker"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleTextChange}
                        className={INPUT_CLASS}
                        placeholder="(555) 555-5555"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleTextChange}
                      className={INPUT_CLASS}
                      placeholder="jane@brokerage.com"
                      required
                    />
                  </div>
                </section>

                {/* Brokerage */}
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Brokerage Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Brokerage / Company{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleTextChange}
                        className={INPUT_CLASS}
                        placeholder="Acme Commercial Realty"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="brokerageWebsite"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Brokerage Website{" "}
                        <span className="text-gray-400">(Optional)</span>
                      </label>
                      <input
                        id="brokerageWebsite"
                        name="brokerageWebsite"
                        type="url"
                        value={formData.brokerageWebsite}
                        onChange={handleTextChange}
                        className={INPUT_CLASS}
                        placeholder="https://yourbrokerage.com"
                      />
                    </div>
                  </div>
                </section>

                {/* Licensing */}
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Licensing
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="licenseNumber"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        License Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="licenseNumber"
                        name="licenseNumber"
                        type="text"
                        value={formData.licenseNumber}
                        onChange={handleTextChange}
                        className={INPUT_CLASS}
                        placeholder="LIC-1234567"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="licenseState"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        License State <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="licenseState"
                        name="licenseState"
                        value={formData.licenseState}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            licenseState: e.target.value,
                          }))
                        }
                        className={INPUT_CLASS}
                        required
                      >
                        <option value="" disabled>
                          Select a state
                        </option>
                        {US_STATES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="statesLicensed"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      States Licensed In <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="statesLicensed"
                      name="statesLicensed"
                      multiple
                      size={8}
                      value={formData.statesLicensed}
                      onChange={handleStatesLicensedChange}
                      className={`${INPUT_CLASS} h-auto`}
                      aria-describedby="statesLicensedHelp"
                      required
                    >
                      {US_STATES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <p
                      id="statesLicensedHelp"
                      className="mt-2 text-sm text-gray-500"
                    >
                      Hold <span className="font-medium">Ctrl</span> (Windows) /
                      <span className="font-medium"> Cmd</span> (Mac) to select
                      multiple.
                    </p>
                  </div>
                </section>

                {/* Experience */}
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Experience
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="yearsExperience"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Years of Experience{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="yearsExperience"
                        name="yearsExperience"
                        value={formData.yearsExperience}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            yearsExperience: e.target.value,
                          }))
                        }
                        className={INPUT_CLASS}
                        required
                      >
                        <option value="" disabled>
                          Select one
                        </option>
                        <option value="0-1">0–1 years</option>
                        <option value="2-4">2–4 years</option>
                        <option value="5-9">5–9 years</option>
                        <option value="10-14">10–14 years</option>
                        <option value="15+">15+ years</option>
                      </select>
                    </div>
                  </div>
                </section>

                {/* Specialties */}
                <section>
                  <div className="flex items-baseline justify-between gap-4 mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Specialties <span className="text-red-500">*</span>
                    </h3>
                    <p className="text-sm text-gray-500">
                      Selected:{" "}
                      <span className="font-medium">{specialtiesCount}</span>
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SPECIALTIES.map((s) => {
                      const checked = formData.specialties.includes(s);
                      return (
                        <label
                          key={s}
                          className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleSpecialty(s)}
                            className={CHECKBOX_CLASS}
                          />
                          <span className="text-sm text-gray-900">{s}</span>
                        </label>
                      );
                    })}
                  </div>
                </section>

                {/* Profile */}
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Short Profile
                  </h3>
                  <div>
                    <label
                      htmlFor="profileSummary"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Summary <span className="text-gray-400">(Optional)</span>
                    </label>
                    <textarea
                      id="profileSummary"
                      name="profileSummary"
                      value={formData.profileSummary}
                      onChange={handleTextChange}
                      rows={5}
                      className={INPUT_CLASS}
                      placeholder="Briefly describe your role, deal types, and any relevant credentials."
                    />
                    <p className="mt-2 text-sm text-gray-500">
                      Tip: include your typical transaction size and asset
                      classes.
                    </p>
                  </div>
                </section>

                {/* Agreements */}
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Confirmations
                  </h3>
                  <div className="space-y-4">
                    <label className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="agreeAccuracy"
                        checked={formData.agreeAccuracy}
                        onChange={handleCheckboxChange}
                        className={`${CHECKBOX_CLASS} mt-1`}
                        required
                      />
                      <span className="text-sm text-gray-700">
                        I confirm the information provided is accurate and
                        up-to-date. <span className="text-red-500">*</span>
                      </span>
                    </label>

                    <label className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleCheckboxChange}
                        className={`${CHECKBOX_CLASS} mt-1`}
                        required
                      />
                      <span className="text-sm text-gray-700">
                        I agree to Creml’s broker review process and understand
                        my application may be verified.{" "}
                        <span className="text-red-500">*</span>
                      </span>
                    </label>
                  </div>
                </section>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-colors cursor-pointer"
                  >
                    Submit Broker Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
