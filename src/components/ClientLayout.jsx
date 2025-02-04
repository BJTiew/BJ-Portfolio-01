"use client";

import { useCallback } from 'react';
import PullToRefresh from './PullToRefresh';
import ScrollToTop from './ScrollToTop';
import ScrollProgress from './ScrollProgress';

const ClientLayout = ({ children }) => {
  const handleRefresh = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <PullToRefresh onRefresh={handleRefresh}>
        <main className="pt-16">
          {children}
        </main>
      </PullToRefresh>
      <ScrollToTop />
    </div>
  );
};

export default ClientLayout; 