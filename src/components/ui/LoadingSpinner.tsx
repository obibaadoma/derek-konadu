const LoadingSpinner = () => {
  return (
    <div className="flex min-h-40 items-center justify-center py-16">
      <div
        className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600 dark:border-slate-700 dark:border-t-blue-400"
        aria-label="Loading content"
        role="status"
      />
    </div>
  );
};

export default LoadingSpinner;
