"use client";

import dynamic from 'next/dynamic';
import LoadingSpinner from '@/components/LoadingSpinner';

export const lazyLoad = (importFunc) => {
  return dynamic(importFunc, {
    loading: () => <LoadingSpinner />,
  });
}; 