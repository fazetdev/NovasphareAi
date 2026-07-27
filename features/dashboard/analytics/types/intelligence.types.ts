export interface AnalyticsAnomaly {
  id: string;

  metricId: string;

  detectedAt: string;

  severity:
    | "low"
    | "medium"
    | "high"
    | "critical";

  expectedValue: number;

  actualValue: number;

  deviation: number;

  status:
    | "open"
    | "reviewed"
    | "resolved";
}

export interface AnalyticsForecastPoint {
  timestamp: string;

  predictedValue: number;

  confidence: number;
}

export interface AnalyticsForecast {
  id: string;

  metricId: string;

  horizon:
    | "7d"
    | "30d"
    | "90d";

  points: AnalyticsForecastPoint[];

  generatedAt: string;
}
