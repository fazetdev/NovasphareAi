import type {
  MetricDefinition,
} from "../../types";

export interface AnalyticsMetricRegistry {
  metrics: MetricDefinition[];
}

export const analyticsMetricRegistry:
  AnalyticsMetricRegistry = {
    metrics: [],
  };
