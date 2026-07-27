import type {
  AnalyticsAnomaly,
} from "../../../types/intelligence.types";

import {
  AnomalyAlertCard,
} from "./AnomalyAlertCard";

interface AnomalyAlertPanelProps {
  anomalies: AnalyticsAnomaly[];
}

export function AnomalyAlertPanel({
  anomalies,
}: AnomalyAlertPanelProps) {
  if (anomalies.length === 0) {
    return (
      <div className="rounded-lg border p-4 text-sm text-muted-foreground">
        No anomalies detected.
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {anomalies.map((anomaly) => (
        <AnomalyAlertCard
          key={anomaly.id}
          anomaly={anomaly}
        />
      ))}
    </div>
  );
}
