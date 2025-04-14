import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Nav links with page info
const navLinks = [
  { name: "Home", href: "/", type: "route" },
  { name: "Services", href: "#services", page: "/", type: "anchor" },
  { name: "About", href: "/about", type: "route" },
  { name: "Values", href: "#value", page: "/", type: "anchor" },
  { name: "Contact", href: "/contact", type: "route" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href) => href === location.pathname;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest("header")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-500 backdrop-blur border-b border-gray-300 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-white text-2xl font-bold tracking-tight">
            <img src="/logo.png" className="w-30" alt="Logo" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              if (link.type === "route") {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`transition hover:text-blue-500 ${
                      isActive(link.href) ? "text-blue-500" : "text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              }

              const isOnCorrectPage = location.pathname === link.page;

              return isOnCorrectPage ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-blue-500 transition"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={`${link.page}${link.href}`}
                  className="text-white hover:text-blue-500 transition"
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden text-white focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-16 inset-x-0 bg-gray-500 backdrop-blur-md shadow-xl p-4 space-y-3 z-40"
          >
            {navLinks.map((link) => {
              if (link.type === "route") {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-lg font-medium px-4 py-2 rounded-lg transition ${
                      isActive(link.href)
                        ? "text-blue-500 bg-gray-500"
                        : "text-white hover:bg-gray-500"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              }

              const isOnCorrectPage = location.pathname === link.page;

              return isOnCorrectPage ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg text-white font-medium px-4 py-2 rounded-lg hover:bg-gray-500 transition"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={`${link.page}${link.href}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg text-white font-medium px-4 py-2 rounded-lg hover:bg-gray-500 transition"
                >
                  {link.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
