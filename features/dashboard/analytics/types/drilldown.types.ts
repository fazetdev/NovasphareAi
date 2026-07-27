export type AnalyticsSourceModule =
  | "chat"
  | "contacts"
  | "agents"
  | "knowledge-base"
  | "automation"
  | "models";

export interface AnalyticsDrillDown {
  id: string;
  metricId: string;
  module: AnalyticsSourceModule;
  entityId: string;
  entityName: string;
  route: string;
}

export interface AnalyticsMetricLink {
  metricId: string;
  drillDown?: AnalyticsDrillDown;
}
