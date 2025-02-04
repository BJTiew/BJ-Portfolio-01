"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileMenu = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-3/4 bg-ios-card-light dark:bg-ios-card-dark z-50 p-6"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-end mb-8">
                <button onClick={onClose} className="p-2">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="flex-1">
                <ul className="space-y-4">
                  {links.map((link) => (
                    <motion.li key={link.href} variants={itemVariants}>
                      <Link
                        href={link.href}
                        className={`block py-2 text-lg ${
                          pathname === link.href
                            ? "text-ios-primary-light dark:text-ios-primary-dark font-semibold"
                            : "text-ios-text-light dark:text-ios-text-dark"
                        }`}
                        onClick={onClose}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu; 