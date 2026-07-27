import type { AnalyticsWidget } from "../types";

export interface AnalyticsWidgetRegistry {
  widgets: AnalyticsWidget[];
}

export const analyticsWidgetRegistry: AnalyticsWidgetRegistry = {
  widgets: [],
};
