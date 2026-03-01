//Testimonials section for the landing page

import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "CreML Commercial helped us find the perfect headquarters location. Their market knowledge and negotiation skills saved us hundreds of thousands.",
      initials: "JS",
      name: "John Smith",
      title: "CEO, TechCorp Industries",
    },
    {
      quote:
        "Outstanding service from start to finish. The team's expertise in investment properties is unmatched in the market.",
      initials: "MJ",
      name: "Maria Johnson",
      title: "Principal, Apex Investment Group",
    },
    {
      quote:
        "Professional, responsive, and results-driven. CreML Commercial exceeded our expectations in every aspect of our property sale.",
      initials: "RD",
      name: "Robert Davis",
      title: "Owner, Davis Properties",
    },
  ];

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              initials={testimonial.initials}
              name={testimonial.name}
              title={testimonial.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
