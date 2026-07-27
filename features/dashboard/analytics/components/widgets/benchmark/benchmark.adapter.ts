import type {
  AnalyticsBenchmark,
} from "../../../types/benchmark.types";

export interface BenchmarkCardData {
  title: string;

  currentValue: number;

  targetValue: number;

  status: string;
}

export function mapBenchmarkToCard(
  benchmark: AnalyticsBenchmark,
): BenchmarkCardData {
  return {
    title: benchmark.name,

    currentValue: benchmark.currentValue,

    targetValue: benchmark.targetValue,

    status: benchmark.status,
  };
}
