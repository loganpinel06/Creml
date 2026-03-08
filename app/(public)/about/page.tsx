//About page - Comprehensive standalone about page for CreML Commercial

import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import AboutHero from "@/components/about/AboutHero";
import CompanyOverview from "@/components/about/CompanyOverview";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import LeadershipTeam from "@/components/about/LeadershipTeam";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <CompanyOverview />
      <MissionVision />
      <CoreValues />
      <LeadershipTeam />
      <Footer />
    </div>
  );
}
