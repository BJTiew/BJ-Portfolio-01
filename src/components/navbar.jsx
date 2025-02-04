"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/context/themeContext";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ios-card-light dark:bg-ios-card-dark border-b border-ios-gray-light/10 dark:border-ios-gray-dark/10">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-ios-text-light dark:text-ios-text-dark">
            Tiew
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/portfolio" className="text-ios-text-light dark:text-ios-text-dark hover:text-ios-primary-light dark:hover:text-ios-primary-dark">
              Portfolio
            </Link>
            <Link href="/contact" className="text-ios-text-light dark:text-ios-text-dark hover:text-ios-primary-light dark:hover:text-ios-primary-dark">
              Contact
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {theme === "dark" ? "🌞" : "🌙"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <span className="sr-only">Open menu</span>
              {/* Hamburger icon */}
              <div className="w-6 h-6 flex flex-col justify-around">
                <span className={`block w-full h-0.5 bg-ios-text-light dark:bg-ios-text-dark transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-full h-0.5 bg-ios-text-light dark:bg-ios-text-dark transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-full h-0.5 bg-ios-text-light dark:bg-ios-text-dark transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} theme={theme} onThemeToggle={toggleTheme} />
    </nav>
  );
};

export default Navbar;
