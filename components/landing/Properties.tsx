//Properties section for the landing page

import PropertyCard from "./PropertyCard";

export default function Properties() {
  const properties = [
    {
      imagePlaceholder: "Office Building Image",
      title: "Premium Office Tower",
      location: "Downtown Financial District",
      size: "50,000 SF",
      price: "$8M",
    },
    {
      imagePlaceholder: "Retail Space Image",
      title: "High-Traffic Retail Center",
      location: "Main Shopping District",
      size: "25,000 SF",
      price: "$4.2M",
    },
    {
      imagePlaceholder: "Industrial Facility Image",
      title: "Modern Industrial Complex",
      location: "Industrial Park",
      size: "100,000 SF",
      price: "$12M",
    },
  ];

  return (
    <section id="properties" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover prime commercial real estate opportunities in today's
            market
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              imagePlaceholder={property.imagePlaceholder}
              title={property.title}
              location={property.location}
              size={property.size}
              price={property.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
