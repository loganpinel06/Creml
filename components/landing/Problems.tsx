//Problems sections for landing page, which lists the problems that CreML solves for commercial real estate brokers
//Each problem is rendered by reusing the ServiceCard component

import ServiceCard from "./ServiceCard";

export default function Problems() {
  const problems = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M18 12h1M3 12h1m2.121-5.364l-.707-.707m12.728 0l-.707.707M5.636 16.364l-.707.707M16.364 16.364l-.707-.707"
          />
        </svg>
      ),
      title: "Inefficient Lead Generation",
      description:
        "Struggling to find qualified leads and wasting time on cold outreach with low conversion rates.",
      bgColorClass: "bg-red-100",
      iconColorClass: "text-red-600",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          />
        </svg>
      ),
      title: "Lack of Market Insights",
      description:
        "Difficulty accessing real-time market data and insights to make informed decisions.",
      bgColorClass: "bg-yellow-100",
      iconColorClass: "text-yellow-600",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      title: "Time-Consuming Processes",
      description:
        "Spending too much time on manual tasks and administrative work instead of focusing on clients.",
      bgColorClass: "bg-green-100",
      iconColorClass: "text-green-600",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          />
        </svg>
      ),
      title: "Limited Collaboration Tools",
      description:
        "Difficulty collaborating with team members and sharing information effectively.",
      bgColorClass: "bg-purple-100",
      iconColorClass: "text-purple-600",
    },
  ];

  return (
    <section id="problems" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Problem with Current CRE Listings
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The commercial real estate listings market is broken. Here's why
            investors are frustrated:
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <ServiceCard
              key={index}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
              bgColorClass={problem.bgColorClass}
              iconColorClass={problem.iconColorClass}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            But investors still have to sort through the mess because real deals
            do exist...
          </p>
          <p className="text-l text-blue-600 font-semibold mx-auto mt-4">
            There has to be a better way.
          </p>
        </div>
      </div>
    </section>
  );
}
