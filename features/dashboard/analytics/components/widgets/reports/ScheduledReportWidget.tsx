import type {
  AnalyticsScheduledReport,
} from "../../../types/scheduled-report.types";

import {
  mapScheduledReportToCard,
} from "./scheduled-report.adapter";

import {
  ScheduledReportCard,
} from "./ScheduledReportCard";

interface ScheduledReportWidgetProps {
  report: AnalyticsScheduledReport;
}

export function ScheduledReportWidget({
  report,
}: ScheduledReportWidgetProps) {
  const data = mapScheduledReportToCard(
    report,
  );

  return (
    <ScheduledReportCard
      report={{
        ...report,
        name: data.title,
        frequency:
          data.frequency as AnalyticsScheduledReport["frequency"],
        nextRunAt: data.nextRun,
        enabled: data.status === "Enabled",
      }}
    />
  );
}
