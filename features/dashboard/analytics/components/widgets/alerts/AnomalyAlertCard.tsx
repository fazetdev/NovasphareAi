import type {
  AnalyticsAnomaly,
} from "../../../types/intelligence.types";

interface AnomalyAlertCardProps {
  anomaly: AnalyticsAnomaly;
}

export function AnomalyAlertCard({
  anomaly,
}: AnomalyAlertCardProps) {
  return (
    <div className="rounded-lg border p-4">
      <h3 className="text-sm font-medium">
        Analytics Anomaly
      </h3>

      <p className="mt-2 text-sm">
        Metric: {anomaly.metricId}
      </p>

      <p className="mt-1 text-sm">
        Severity: {anomaly.severity}
      </p>

      <p className="mt-1 text-sm">
        Expected: {anomaly.expectedValue}
      </p>

      <p className="mt-1 text-sm">
        Actual: {anomaly.actualValue}
      </p>

      <p className="mt-2 text-xs text-muted-foreground">
        Status: {anomaly.status}
      </p>
    </div>
  );
}
