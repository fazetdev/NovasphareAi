import type {
  AnalyticsBenchmark,
} from "../../../types/benchmark.types";

import {
  mapBenchmarkToCard,
} from "./benchmark.adapter";

import {
  BenchmarkCard,
} from "./BenchmarkCard";

interface BenchmarkWidgetProps {
  benchmark: AnalyticsBenchmark;
}

export function BenchmarkWidget({
  benchmark,
}: BenchmarkWidgetProps) {
  const data = mapBenchmarkToCard(
    benchmark,
  );

  return (
    <BenchmarkCard
      benchmark={{
        ...benchmark,
        name: data.title,
        currentValue: data.currentValue,
        targetValue: data.targetValue,
        status: data.status as AnalyticsBenchmark["status"],
      }}
    />
  );
}
