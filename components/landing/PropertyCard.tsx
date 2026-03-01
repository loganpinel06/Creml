//Property card component for the properties section of the landing page

interface PropertyCardProps {
  imagePlaceholder: string;
  title: string;
  location: string;
  size: string;
  price: string;
}

export default function PropertyCard({
  imagePlaceholder,
  title,
  location,
  size,
  price,
}: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gray-200 h-48 flex items-center justify-center">
        <span className="text-gray-500">{imagePlaceholder}</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-3">
          {location} • {size}
        </p>
        <p className="text-2xl font-bold text-blue-600 mb-4">{price}</p>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}
