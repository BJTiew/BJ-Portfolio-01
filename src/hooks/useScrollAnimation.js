"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-20%",
    ...options
  });

  return [ref, isInView];
}; 