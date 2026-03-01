//Footer component for the landing page

export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "Leasing Services", href: "#" },
        { label: "Investment Sales", href: "#" },
        { label: "Market Analysis", href: "#" },
        { label: "Property Management", href: "#" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Properties", href: "#properties" },
        { label: "Contact", href: "#contact" },
        { label: "Careers", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CreML Commercial</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner in commercial real estate for over 25 years.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-sm">
                FB
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-sm">
                LI
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-sm">
                TW
              </div>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>(555) 123-4567</p>
              <p>info@cremlcommercial.com</p>
              <p>123 Business Plaza, Suite 500</p>
              <p>Metropolitan City, ST 12345</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 CreML Commercial. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
