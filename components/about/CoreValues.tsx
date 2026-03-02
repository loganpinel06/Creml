export default function CoreValues() {
  const values = [
    {
      title: "Client-Centric Approach",
      description:
        "Every decision we make is guided by what's best for our clients' long-term success.",
    },
    {
      title: "Market Expertise",
      description:
        "Deep local knowledge combined with broad market insights to identify the best opportunities.",
    },
    {
      title: "Integrity First",
      description:
        "Transparent communication and honest advice, even when it's not what clients want to hear.",
    },
    {
      title: "Innovation",
      description:
        "Leveraging technology and data to provide superior service and results.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These principles guide every interaction, decision, and transaction
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
