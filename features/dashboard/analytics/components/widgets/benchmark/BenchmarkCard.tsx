import type {
  AnalyticsBenchmark,
} from "../../../types/benchmark.types";

interface BenchmarkCardProps {
  benchmark: AnalyticsBenchmark;
}

export function BenchmarkCard({
  benchmark,
}: BenchmarkCardProps) {
  return (
    <div className="rounded-lg border p-4">
      <h3 className="text-sm font-medium">
        {benchmark.name}
      </h3>

      <p className="mt-2 text-2xl font-semibold">
        {benchmark.currentValue}
      </p>

      <p className="mt-1 text-sm text-muted-foreground">
        Target: {benchmark.targetValue}
      </p>

      <p className="mt-1 text-xs text-muted-foreground">
        Status: {benchmark.status}
      </p>
    </div>
  );
}
