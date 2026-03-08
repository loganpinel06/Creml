//creml landing page
"use client";

//imports
//header component for navigation and branding
import Header from "@/components/landing/Header";
//main hero section with search functionality
import HeroSearch from "@/components/landing/HeroSearch";
//hero section with headline, subheadline, and call-to-action buttons
import Hero from "@/components/landing/Hero";
//problems section highlighting common pain points in commercial real estate
import Problems from "@/components/landing/Problems";
//services section highlighting key offerings with icons and descriptions
import Services from "@/components/landing/Services";
//properties section showcasing featured listings with images and details
import Properties from "@/components/landing/Properties";
//footer component with additional links and company information
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white mt-6">
      <Header />
      <HeroSearch />
      <Problems />
      <Services />
      <Properties />
      <Footer />
    </div>
  );
}
