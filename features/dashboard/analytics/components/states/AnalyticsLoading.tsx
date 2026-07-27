export function AnalyticsLoading() {
  return (
    <div
      className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      aria-label="Loading analytics"
    >
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="h-32 rounded-lg border animate-pulse"
        />
      ))}
    </div>
  );
}
