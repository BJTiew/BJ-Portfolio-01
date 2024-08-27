"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col h-full px-4 lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px:48">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/2 lg:h-full lg:w-1/2">
          <Image
            className="object-contain"
            alt="Hola, I am Tiew~!"
            src="/hero.png"
            fill
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="flex flex-col items-center justify-center gap-8 p-8 h-1/2 lg:h-full lg:w-1/2">
          {/* TITLE */}
          <h1 className="text-2xl font-bold md:text-6xl">Hi, I am BJTiew</h1>
          {/* DESC */}
          <p className="text-sm text-center md:text-xl">
            Welcome to my digital haven! Here, you will embark on a journey to
            discover my passions and the fruits of my labor.
          </p>
          {/* BUTTON */}
          <div className="flex justify-center w-full gap-4 md:pt-10">
            <Link href="\portfolio" className="">
              <button className="p-3 text-sm text-white bg-black rounded-lg ring-1 ring-black hover:bg-rose-500 hover:ring-rose-500">
                View My Work
              </button>
            </Link>
            <Link href="\contact" className="">
              <button className="p-3 text-sm rounded-lg ring-1 ring-black hover:bg-rose-500 hover:ring-rose-500 hover:text-white">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
      ;
    </motion.div>
  );
};

export default Homepage;
