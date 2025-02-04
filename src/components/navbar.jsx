"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
import { useTheme } from "@/context/themeContext";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Porfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  const socialMedias = [
    { id: 1, href: "https://github.com/bjtiew", src: "/github.png", alt: "" },
    //{ id: 2, href: "#", src: "/dribbble.png", alt: "" },
    //{ id: 3, href: "#", src: "/instagram.png", alt: "" },
    //{ id: 4, href: "https://www.facebook.com/BJTiew/", src: "/facebook.png", alt: "" },
    //{ id: 5, href: "#", src: "/pinterest.png", alt: "" },
    { id: 6, href: "https://www.linkedin.com/in/bjtiew/", src: "/linkedin.png", alt: "" },
  ];

  const sections = ["home", "about", "portfolio", "contact"];
  const [activeSection, setActiveSection] = useState(sections[0]);

  const scrollToSection = (section) => {
    document.querySelector(`#${section}`).scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-ios-bg-light/75 dark:bg-ios-bg-dark/75 border-b border-gray-200 dark:border-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-ios-gray-light dark:text-ios-gray-dark hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span className="sr-only">Open main menu</span>
              {!open ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-semibold text-ios-text-light dark:text-ios-text-dark">
                BJ Tiew
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <NavLink href="/" text="Home" />
              <NavLink href="/about" text="About" />
              <NavLink href="/portfolio" text="Portfolio" />
              <NavLink href="/contact" text="Contact" />
            </div>
          </div>

          {/* Theme Toggle & Social Links */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-ios-gray-light dark:text-ios-gray-dark hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div 
        className={`${open ? 'block' : 'hidden'} md:hidden`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: open ? 1 : 0, y: open ? 0 : -20 }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-ios-card-light dark:bg-ios-card-dark">
          <NavLink href="/" text="Home" mobile />
          <NavLink href="/about" text="About" mobile />
          <NavLink href="/portfolio" text="Portfolio" mobile />
          <NavLink href="/contact" text="Contact" mobile />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
