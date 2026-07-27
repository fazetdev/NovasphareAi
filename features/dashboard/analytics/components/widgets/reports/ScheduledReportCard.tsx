import type {
  AnalyticsScheduledReport,
} from "../../../types/scheduled-report.types";

interface ScheduledReportCardProps {
  report: AnalyticsScheduledReport;
}

export function ScheduledReportCard({
  report,
}: ScheduledReportCardProps) {
  return (
    <div className="rounded-lg border p-4">
      <h3 className="text-sm font-medium">
        {report.name}
      </h3>

      <p className="mt-2 text-sm">
        Frequency: {report.frequency}
      </p>

      <p className="mt-1 text-sm">
        Next run: {report.nextRunAt}
      </p>

      <p className="mt-1 text-xs text-muted-foreground">
        Status: {report.enabled ? "Enabled" : "Disabled"}
      </p>
    </div>
  );
}
