import type { AIAnalytics } from "../../../types"

interface AIAnalyticsSummaryCardProps {
  analytics: AIAnalytics
}

export function AIAnalyticsSummaryCard({
  analytics,
}: AIAnalyticsSummaryCardProps) {
  return (
    <section className="rounded-lg border p-6">
      <h3 className="text-lg font-semibold">
        Analytics Summary
      </h3>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-sm text-muted-foreground">
            Requests
          </p>
          <p className="text-2xl font-bold">
            {analytics.usage.totalRequests}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Tokens
          </p>
          <p className="text-2xl font-bold">
            {analytics.usage.totalTokens}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Cost
          </p>
          <p className="text-2xl font-bold">
            {analytics.cost.currency} {analytics.cost.totalCost}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Latency
          </p>
          <p className="text-2xl font-bold">
            {analytics.performance.averageLatencyMs} ms
          </p>
        </div>
      </div>
    </section>
  )
}
