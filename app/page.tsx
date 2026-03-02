//creml landing page
"use client";

//imports
//header component for navigation and branding
import Header from "@/components/landing/Header";
//hero section with headline, subheadline, and call-to-action buttons
import Hero from "@/components/landing/Hero";
//problems section highlighting common pain points in commercial real estate
import Problems from "@/components/landing/Problems";
//services section highlighting key offerings with icons and descriptions
import Services from "@/components/landing/Services";
//about section with company history, mission, and team bios
import About from "@/components/landing/About";
//properties section showcasing featured listings with images and details
import Properties from "@/components/landing/Properties";
//testimonials section with client quotes and success stories
import Testimonials from "@/components/landing/Testimonials";
//contact section with form and contact information
import Contact from "@/components/landing/Contact";
//footer component with additional links and company information
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Problems />
      <Services />
      <Properties />
      <Testimonials />
      <Footer />
    </div>
  );
}
