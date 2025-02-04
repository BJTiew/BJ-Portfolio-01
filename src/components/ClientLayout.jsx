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
        <main className="min-h-screen flex container pt-16 px-4 mx-auto sm:px-6 lg:px-8 justify-center">
          {children}
        </main>
      </PullToRefresh>
      <ScrollToTop />
    </div>
  );
};

export default ClientLayout; 