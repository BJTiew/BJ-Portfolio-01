"use client";

import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const PullToRefresh = ({ onRefresh, children }) => {
  const y = useMotionValue(0);
  const controls = useAnimation();
  const pullThreshold = 100;

  const opacity = useTransform(
    y,
    [0, pullThreshold / 2, pullThreshold],
    [0, 0.5, 1]
  );

  const scale = useTransform(
    y,
    [0, pullThreshold],
    [0.8, 1]
  );

  const rotate = useTransform(
    y,
    [0, pullThreshold],
    [0, 360]
  );

  const handleDragEnd = async () => {
    if (y.get() > pullThreshold) {
      await controls.start({ y: pullThreshold });
      onRefresh?.();
    }
    controls.start({ y: 0 });
  };

  return (
    <motion.div
      drag="y"
      dragConstraints={{ top: 0, bottom: pullThreshold }}
      dragElastic={0.7}
      onDragEnd={handleDragEnd}
      animate={controls}
      style={{ y }}
      className="relative touch-none"
    >
      <motion.div
        className="absolute left-1/2 -top-8 -translate-x-1/2"
        style={{ opacity, scale, rotate }}
      >
        <svg
          className="w-6 h-6 text-ios-primary-light dark:text-ios-primary-dark"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </motion.div>
      {children}
    </motion.div>
  );
};

export default PullToRefresh; 