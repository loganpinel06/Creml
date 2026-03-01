//Header component for the landing page

"use client";

export default function Header() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">Creml</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                About
              </a>
              <a
                href="#properties"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Properties
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Contact
              </a>
              {/* Get Started Button */}
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
