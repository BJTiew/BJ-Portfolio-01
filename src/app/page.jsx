"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import ParallaxContainer from "@/components/ParallaxContainer";
import ResponsiveImage from "@/components/ResponsiveImage";
import ParallaxText from "@/components/ParallaxText";

const Homepage = () => {
  return (
    <motion.div
      className="min-h-screen bg-ios-bg-light dark:bg-ios-bg-dark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-4 mx-auto mt-8 sm:px-6 lg:px-8">
        {/* Mobile First Design */}
        <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8 lg:space-x-16">
          {/* Image Container */}
          <ParallaxContainer className="w-48 h-48 mx-auto md:w-1/3 md:h-auto md:mx-0" speed={0.3}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ResponsiveImage
                src="/hero.png"
                alt="Tiew"
                priority
                rounded
                aspectRatio="portrait"
                className="hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </ParallaxContainer>

          {/* Content Container */}
          <div className="flex flex-col justify-center flex-1 space-y-6 text-center md:text-left">
            {/* Name and Title */}
            <ParallaxText speed={-0.2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <motion.h1 
                  className="text-3xl font-bold text-ios-text-light dark:text-ios-text-dark sm:text-4xl md:text-5xl lg:text-6xl"
                >
                  Hi, I am Tiew
                </motion.h1>
                <motion.p className="text-lg text-ios-gray-light dark:text-ios-gray-dark sm:text-xl md:text-2xl">
                  Management Maestro & Problem Solver
                </motion.p>
              </motion.div>
            </ParallaxText>

            {/* Description */}
            <ParallaxText speed={-0.3}>
              <motion.div className="max-w-2xl text-base text-ios-text-light dark:text-ios-text-dark sm:text-lg md:text-xl">
                Welcome to my digital haven! Here, you will embark on a journey to
                discover my passions and the fruits of my labor.
              </motion.div>
            </ParallaxText>

            {/* CTA Buttons */}
            <ParallaxContainer speed={-0.4}>
              <motion.div 
                className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:pt-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link href="/portfolio">
                  <button className="w-full px-6 py-3 text-white transition-colors rounded-full sm:w-auto bg-ios-primary-light dark:bg-ios-primary-dark hover:bg-ios-secondary-light dark:hover:bg-ios-secondary-dark">
                    View My Work
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="w-full px-6 py-3 transition-colors border rounded-full sm:w-auto text-ios-text-light dark:text-ios-text-dark border-ios-gray-light dark:border-ios-gray-dark hover:bg-ios-card-light dark:hover:bg-ios-card-dark">
                    Contact Me
                  </button>
                </Link>
              </motion.div>
            </ParallaxContainer>

            {/* Social Links */}
            <ParallaxContainer speed={-0.5}>
              <motion.div 
                className="flex justify-center space-x-6 md:justify-start"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Link href="https://github.com/bjtiew" className="text-ios-gray-light dark:text-ios-gray-dark hover:text-ios-primary-light dark:hover:text-ios-primary-dark">
                  <Image src="/github.png" alt="GitHub" width={24} height={24} />
                </Link>
                <Link href="https://www.linkedin.com/in/bjtiew/" className="text-ios-gray-light dark:text-ios-gray-dark hover:text-ios-primary-light dark:hover:text-ios-primary-dark">
                  <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
                </Link>
              </motion.div>
            </ParallaxContainer>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
