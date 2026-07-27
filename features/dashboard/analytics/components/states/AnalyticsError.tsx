type AnalyticsErrorProps = {
  message?: string;
};

export function AnalyticsError({
  message = "Unable to load analytics data.",
}: AnalyticsErrorProps) {
  return (
    <div
      className="rounded-lg border p-4 text-sm text-destructive"
      role="alert"
    >
      {message}
    </div>
  );
}
