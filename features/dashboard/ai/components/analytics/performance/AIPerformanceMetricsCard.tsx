import type { AIPerformanceMetrics } from "../../../types"

interface AIPerformanceMetricsCardProps {
  performance: AIPerformanceMetrics
}

export function AIPerformanceMetricsCard({
  performance,
}: AIPerformanceMetricsCardProps) {
  return (
    <section className="rounded-lg border p-6">
      <h3 className="text-lg font-semibold">
        Performance Metrics
      </h3>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div>
          <p className="text-sm text-muted-foreground">
            Average Latency
          </p>

          <p className="text-2xl font-bold">
            {performance.averageLatencyMs} ms
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            P95 Latency
          </p>

          <p className="text-2xl font-bold">
            {performance.p95LatencyMs} ms
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Uptime
          </p>

          <p className="text-2xl font-bold">
            {performance.uptimePercentage}%
          </p>
        </div>
      </div>
    </section>
  )
}
