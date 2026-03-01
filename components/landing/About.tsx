//About section for the landing page

export default function About() {
  const achievements = [
    "Over $2.5 billion in transactions completed",
    "500+ satisfied clients and growing",
    "Award-winning brokerage team",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              25+ Years of Commercial Real Estate Excellence
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              CreML Commercial has been the trusted partner for businesses,
              investors, and property owners across the region. Our team of
              seasoned professionals brings deep market knowledge and innovative
              solutions to every transaction.
            </p>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-white"
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
                  </div>
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-lg">
              Professional Team Photo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
