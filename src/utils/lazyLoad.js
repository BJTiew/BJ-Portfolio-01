"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';

export const lazyLoad = (importFunc) => {
  return dynamic(importFunc, {
    loading: () => <LoadingSpinner />,
    suspense: true
  });
}; 