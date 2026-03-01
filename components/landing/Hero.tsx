//Hero section for the landing page

"use client";

export default function Hero() {
  return (
    <section className="relative pt-16 bg-linear-to-r from-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Trusted Partner in
            <span className="block text-blue-400">Commercial Real Estate</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            We deliver exceptional results through market expertise, innovative
            solutions, and unwavering commitment to our clients' success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              View Properties
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
