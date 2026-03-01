//Testimonial card component for the landing page

interface TestimonialCardProps {
  quote: string;
  initials: string;
  name: string;
  title: string;
}

export default function TestimonialCard({
  quote,
  initials,
  name,
  title,
}: TestimonialCardProps) {
  return (
    <div className="bg-blue-800 p-6 rounded-lg">
      <p className="text-lg mb-4 italic">"{quote}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-3">
          <span className="text-white font-semibold">{initials}</span>
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-blue-300 text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
}
