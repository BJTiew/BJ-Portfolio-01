"use client";

import { useState, useEffect } from 'react';

export const useImageLoad = (src) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      setIsLoading(false);
      setImageSrc(src);
    };

    img.onerror = () => {
      setIsLoading(false);
      setError('Failed to load image');
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return { isLoading, error, imageSrc };
}; 