import type {
  AnalyticsScheduledReport,
} from "../../../types/scheduled-report.types";

export interface ScheduledReportCardData {
  title: string;

  frequency: string;

  nextRun: string;

  status: string;
}

export function mapScheduledReportToCard(
  report: AnalyticsScheduledReport,
): ScheduledReportCardData {
  return {
    title: report.name,

    frequency: report.frequency,

    nextRun: report.nextRunAt,

    status: report.enabled
      ? "Enabled"
      : "Disabled",
  };
}
