type AnalyticsEmptyProps = {
  message?: string;
};

export function AnalyticsEmpty({
  message = "No analytics data available.",
}: AnalyticsEmptyProps) {
  return (
    <div
      className="rounded-lg border border-dashed p-8 text-center text-sm text-muted-foreground"
      role="status"
    >
      {message}
    </div>
  );
}
