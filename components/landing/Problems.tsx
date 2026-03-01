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
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          />
        </svg>
      ),
      title: "Billboard Mentality",
      description:
        "Brokers treat platforms like advertising billboards rather than serious listing services.",
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
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zM7 10l5 3 5-3"
          />
        </svg>
      ),
      title: "Deal Bombardment",
      description:
        "Investors get flooded with irrelevant deals that don't match their investment criteria.",
      bgColorClass: "bg-orange-100",
      iconColorClass: "text-orange-600",
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
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
      title: "No Standards",
      description:
        "No one enforces quality standars from the investor's perspective.",
      bgColorClass: "bg-amber-100",
      iconColorClass: "text-amber-600",
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
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      ),
      title: "Trash Listings",
      description:
        "Markets are flooded with incomplete, ego-priced garbage listings.",
      bgColorClass: "bg-gray-100",
      iconColorClass: "text-gray-600",
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
