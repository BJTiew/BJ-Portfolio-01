"use client";

import { motion } from "framer-motion";

const FilterMenu = ({ categories, selectedCategory, onSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 text-sm rounded-full transition-colors whitespace-nowrap
            ${selectedCategory === category
              ? 'bg-ios-primary-light dark:bg-ios-primary-dark text-white'
              : 'bg-ios-card-light dark:bg-ios-card-dark text-ios-text-light dark:text-ios-text-dark hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default FilterMenu; 