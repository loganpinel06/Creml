export default function LeadershipTeam() {
  const teamMembers = [
    {
      name: "John Anderson",
      title: "Founder & CEO",
      description:
        "With over 25 years in commercial real estate, John has led CreML to become one of the region's most trusted brokerages.",
      initials: "JA",
    },
    {
      name: "Sarah Mitchell",
      title: "Head of Investment Sales",
      description:
        "Sarah specializes in large-scale investment properties and has closed over $800M in transactions in the last five years.",
      initials: "SM",
    },
    {
      name: "Michael Rodriguez",
      title: "Director of Leasing",
      description:
        "Michael brings expertise in tenant representation and has successfully negotiated leases for Fortune 500 companies.",
      initials: "MR",
    },
    {
      name: "Jennifer Chen",
      title: "Market Research Director",
      description:
        "Jennifer leads our market analysis division, providing data-driven insights that inform strategic investment decisions.",
      initials: "JC",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Leadership Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the experienced professionals leading CreML Commercial
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-semibold">
                  {member.initials}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-blue-600 font-medium mb-3">{member.title}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
