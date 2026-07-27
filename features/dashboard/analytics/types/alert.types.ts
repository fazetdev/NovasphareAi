export type AnalyticsAlertSeverity =
  | "info"
  | "warning"
  | "critical";

export type AnalyticsAlertCondition =
  | "above"
  | "below"
  | "equals"
  | "change";

export interface AnalyticsAlertRule {
  id: string;

  metricId: string;

  condition: AnalyticsAlertCondition;

  threshold: number;

  severity: AnalyticsAlertSeverity;

  enabled: boolean;

  createdAt: string;
}

export interface AnalyticsAlertEvent {
  id: string;

  ruleId: string;

  metricId: string;

  message: string;

  severity: AnalyticsAlertSeverity;

  triggeredAt: string;

  acknowledged: boolean;
}
