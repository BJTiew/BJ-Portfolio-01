const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-8 h-8 border-4 border-ios-primary-light dark:border-ios-primary-dark rounded-full border-t-transparent animate-spin" />
    </div>
  );
};

export default LoadingSpinner; 