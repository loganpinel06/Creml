//sign up form
"use client";

import { useState } from "react";

export default function SignUpForm() {
  //state for form fields and error/success messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  //event handler for form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // TODO: connect to Supabase or backend here
    //try catch block for handling sign up logic with supabase
    setSuccess("Sign up successful!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

      {/* Display error or success messages */}
      {error && <p className="text-red-500 mb-3">{error}</p>}
      {success && <p className="text-green-500 mb-3">{success}</p>}

      <label className="block mb-2 font-medium">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <label className="block mb-2 font-medium">Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <label className="block mb-2 font-medium">Confirm Password</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors cursor-pointer"
      >
        Sign Up
      </button>
    </form>
  );
}
