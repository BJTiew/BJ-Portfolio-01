"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ResponsiveImage from "./ResponsiveImage";

const ParallaxImage = ({ src, alt, speed = 0.5, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 + Math.abs(speed)]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ y }}
    >
      <motion.div style={{ scale }}>
        <ResponsiveImage
          src={src}
          alt={alt}
          className="w-full h-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default ParallaxImage; 