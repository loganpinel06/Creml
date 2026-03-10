//Header component for the landing page

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Contact from "./Contact";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function Header() {
  //state variables
  const [modal, setModal] = useState("");
  //this state will track the user's authentication status - "valid" if authenticated, "invalid" if not
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  //if the user is a broker, we can also set this to "broker" to show broker-specific UI elements in the header
  const [isBroker, setIsBroker] = useState<boolean>(false);

  //create a Supabase client instance
  const supabase = createClient();
  //create a router instance for navigation
  const router = useRouter();

  //handle logout functionality
  const handleLogout = async () => {
    //sign the user out with Supabase
    const { error } = await supabase.auth.signOut();
    //handle any errors that occur during logout
    if (error) {
      alert("Logout failed: " + error.message);
      return;
    }

    //reroute to login page with a success message
    router.push("/login?message=Logged+Out+Successfully");
  };

  //useEffect hook to check authentication status on component mount
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user }, error }) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
  }, []);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0">
            <h1 className="text-2xl font-bold text-gray-900 cursor-pointer">
              <a href="/#">Creml</a>
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/about"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                About
              </a>
              <a
                href="#"
                onClick={() => setModal("contact")}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Contact
              </a>
              {/* Control auth specific attributes of the header */}
              {/* Get Started Button if not auth or Log out button if auth */}
              {isAuth === true ? (
                <>
                  <a
                    href="/dashboard"
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                  >
                    Dashboard
                  </a>
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors cursor-pointer"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <a
                    href="/login"
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                  >
                    Sign In
                  </a>
                  <Link href="/register">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                      Get Started
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {modal === "contact" && (
        //blur background, center modal, close on click outside
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setModal("")}
        >
          {/* main modal box */}
          <div
            className="bg-white rounded-lg shadow-lg w-full max-w-6xl p-6 relative"
            onClick={(e) => e.stopPropagation()} //prevent click from closing modal when clicking inside
          >
            {/* close button */}
            <button
              onClick={() => setModal("")}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg font-bold cursor-pointer"
            >
              &times;
            </button>
            <Contact />
          </div>
        </div>
      )}
    </nav>
  );
}
