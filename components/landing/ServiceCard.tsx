//ServiceCard component for the landing page

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColorClass: string;
  iconColorClass: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  bgColorClass,
  iconColorClass,
}: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div
        className={`w-16 h-16 ${bgColorClass} rounded-full flex items-center justify-center mx-auto mb-4`}
      >
        <div className={iconColorClass}>{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
