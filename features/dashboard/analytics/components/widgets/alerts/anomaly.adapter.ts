import type {
  AnalyticsAnomaly,
} from "../../../types/intelligence.types";

export interface AnomalyAlertData {
  title: string;

  metric: string;

  severity: string;

  message: string;
}

export function mapAnomalyToAlert(
  anomaly: AnalyticsAnomaly,
): AnomalyAlertData {
  return {
    title: "Analytics Anomaly Detected",

    metric: anomaly.metricId,

    severity: anomaly.severity,

    message:
      `Value changed from expected ${anomaly.expectedValue} to ${anomaly.actualValue}.`,
  };
}
