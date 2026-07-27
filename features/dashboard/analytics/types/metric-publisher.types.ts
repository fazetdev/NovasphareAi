import type {
  MetricDefinition,
  MetricValue,
} from "./analytics.types";

export type AnalyticsModule =
  | "chat"
  | "contacts"
  | "agents"
  | "knowledge-base"
  | "automation"
  | "models";

export interface PublishedMetric {
  definition: MetricDefinition;

  value: MetricValue;

  timestamp: string;

  workspaceId: string;
}

export interface MetricPublisher {
  module: AnalyticsModule;

  getMetrics(): Promise<PublishedMetric[]>;
}
