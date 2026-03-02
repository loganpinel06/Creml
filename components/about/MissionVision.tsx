export default function MissionVision() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Mission & Vision
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
            <p className="text-lg text-gray-700">
              To provide exceptional commercial real estate services that create
              lasting value for our clients through expert market knowledge,
              innovative solutions, and unwavering commitment to their success.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
            <p className="text-lg text-gray-700">
              To be the most trusted and respected commercial real estate firm
              in our markets, recognized for our expertise, integrity, and the
              exceptional results we deliver for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
