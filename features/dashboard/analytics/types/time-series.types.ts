export interface MetricTimeSeriesPoint {
  timestamp: string;

  value: number;

  dimensions?: Record<
    string,
    string | number | boolean
  >;
}

export interface MetricTimeSeries {
  metricId: string;

  workspaceId: string;

  interval:
    | "minute"
    | "hour"
    | "day"
    | "week"
    | "month";

  points: MetricTimeSeriesPoint[];

  realtimeEnabled: boolean;
}
