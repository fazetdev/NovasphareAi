import type { ChartType } from "./analytics.types";

export type AnalyticsWidgetType =
  | "kpi"
  | "chart"
  | "table"
  | "metric";

export interface AnalyticsWidgetFilter {
  field: string;
  value: string | number | boolean;
}

export interface AnalyticsWidget {
  id: string;
  title: string;
  description?: string;
  type: AnalyticsWidgetType;

  metricIds: string[];

  chartType?: ChartType;

  filters?: AnalyticsWidgetFilter[];

  refreshInterval?: number;

  realtimeEnabled?: boolean;

  exportEnabled?: boolean;

  drillDownEnabled?: boolean;
}
