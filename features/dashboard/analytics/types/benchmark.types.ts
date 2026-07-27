export interface AnalyticsBenchmark {
  id: string;

  metricId: string;

  name: string;

  targetValue: number;

  currentValue: number;

  variance: number;

  unit?: string;

  period:
    | "daily"
    | "weekly"
    | "monthly"
    | "quarterly";

  status:
    | "above"
    | "on-track"
    | "below";
}

export interface BenchmarkComparison {
  metricId: string;

  internalValue: number;

  benchmarkValue: number;

  difference: number;

  percentageDifference: number;
}
