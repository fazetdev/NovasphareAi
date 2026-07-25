import type { AIUsageMetrics } from "../../../types"

interface AIUsageMetricsCardProps {
  usage: AIUsageMetrics
}

export function AIUsageMetricsCard({
  usage,
}: AIUsageMetricsCardProps) {
  return (
    <section className="rounded-lg border p-6">
      <h3 className="text-lg font-semibold">
        Usage Metrics
      </h3>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div>
          <p className="text-sm text-muted-foreground">
            Total Requests
          </p>
          <p className="text-2xl font-bold">
            {usage.totalRequests}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Successful
          </p>
          <p className="text-2xl font-bold">
            {usage.successfulRequests}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Failed
          </p>
          <p className="text-2xl font-bold">
            {usage.failedRequests}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm text-muted-foreground">
          Total Tokens
        </p>
        <p className="text-2xl font-bold">
          {usage.totalTokens}
        </p>
      </div>
    </section>
  )
}
