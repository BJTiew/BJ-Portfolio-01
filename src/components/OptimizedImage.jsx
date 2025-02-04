"use client";

import Image from "next/image";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const OptimizedImage = ({ src, alt, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-ios-bg-light dark:bg-ios-bg-dark">
          <LoadingSpinner />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        {...props}
        onLoadingComplete={() => setIsLoading(false)}
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={75}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${props.className || ''}`}
      />
    </div>
  );
};

export default OptimizedImage; 