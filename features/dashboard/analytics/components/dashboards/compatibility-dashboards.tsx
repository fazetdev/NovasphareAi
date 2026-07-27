function DashboardPlaceholder({
  title,
}: {
  title: string;
}) {
  return (
    <div className="rounded-lg border p-4">
      <h2 className="text-lg font-semibold">
        {title}
      </h2>

      <p className="mt-2 text-sm text-muted-foreground">
        Dashboard foundation ready.
      </p>
    </div>
  );
}

export function OperationalDashboard() {
  return (
    <DashboardPlaceholder
      title="Operational Dashboard"
    />
  );
}

export function AIPerformanceDashboard() {
  return (
    <DashboardPlaceholder
      title="AI Performance Dashboard"
    />
  );
}
