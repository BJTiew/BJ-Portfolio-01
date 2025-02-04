"use client";

import Image from "next/image";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const ResponsiveImage = ({
  src,
  alt,
  className = "",
  aspectRatio = "square",
  priority = false,
  rounded = false,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const aspectRatioClasses = {
    square: "aspect-square",
    portrait: "aspect-[2/3]",
    landscape: "aspect-[3/2]",
    wide: "aspect-[16/9]",
    auto: "aspect-auto"
  };

  const roundedClasses = rounded 
    ? "rounded-full md:rounded-2xl" 
    : "rounded-2xl";

  return (
    <div className={`relative overflow-hidden ${aspectRatioClasses[aspectRatio]} ${roundedClasses}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-ios-bg-light dark:bg-ios-bg-dark">
          <LoadingSpinner />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={`object-cover transition-all duration-300 ${
          isLoading ? "scale-110 blur-lg" : "scale-100 blur-0"
        } ${className}`}
        onLoadingComplete={() => setIsLoading(false)}
        sizes="(max-width: 640px) 100vw, 
               (max-width: 768px) 80vw, 
               (max-width: 1024px) 50vw, 
               33vw"
        {...props}
      />
    </div>
  );
};

export default ResponsiveImage; 