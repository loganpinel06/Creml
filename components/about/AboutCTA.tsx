export default function AboutCTA() {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Work with the Best?
        </h2>
        <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
          Let our experienced team help you achieve your commercial real estate
          goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Our Team
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
            View Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
