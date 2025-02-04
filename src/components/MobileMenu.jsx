"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const MobileMenu = ({ isOpen, onClose, theme, onThemeToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
      transition={{ duration: 0.2 }}
      className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 bg-ios-card-light dark:bg-ios-card-dark">
        <Link
          href="/"
          onClick={onClose}
          className="block px-3 py-2 rounded-md text-ios-text-light dark:text-ios-text-dark hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          Home
        </Link>
        <Link
          href="/about"
          onClick={onClose}
          className="block px-3 py-2 rounded-md text-ios-text-light dark:text-ios-text-dark hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          About
        </Link>
        <Link
          href="/portfolio"
          onClick={onClose}
          className="block px-3 py-2 rounded-md text-ios-text-light dark:text-ios-text-dark hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          Portfolio
        </Link>
        <Link
          href="/contact"
          onClick={onClose}
          className="block px-3 py-2 rounded-md text-ios-text-light dark:text-ios-text-dark hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          Contact
        </Link>
        {/* <button
          onClick={onThemeToggle}
          className="w-full text-left px-3 py-2 rounded-md text-ios-text-light dark:text-ios-text-dark hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {theme === "dark" ? "Switch to Light Mode 🌞" : "Switch to Dark Mode 🌙"}
        </button> */}
      </div>
    </motion.div>
  );
};

export default MobileMenu; 