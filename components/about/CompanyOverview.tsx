import Image from "next/image";

export default function CompanyOverview() {
  const achievements = [
    "Over $2.5 billion in transactions completed",
    "500+ satisfied clients and growing",
    "Award-winning brokerage team",
    "25+ years of industry experience",
  ];

  return (
    <section className="py-20 bg-white">
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
            <p className="text-lg text-gray-700 mb-6">
              Founded in 1998, we've weathered multiple market cycles and
              emerged stronger each time. Our success is built on relationships,
              reputation, and results that speak for themselves.
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
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/florida-about.jpg"
              alt="Florida City View"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
