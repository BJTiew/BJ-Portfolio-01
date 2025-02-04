"use client";

import { useState, useEffect } from 'react';

export const useBlurData = (src) => {
  const [blurDataUrl, setBlurDataUrl] = useState('');

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      canvas.width = 40;
      canvas.height = (40 * img.height) / img.width;
      
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      setBlurDataUrl(canvas.toDataURL());
    };

    img.src = src;
  }, [src]);

  return blurDataUrl;
}; 