import { AICostMetrics } from "./cost/AICostMetrics"
import { AICostTrendChart } from "./charts/AICostTrendChart"
import { AIUsageTrendChart } from "./charts/AIUsageTrendChart"
import { AIUsageMetrics } from "./usage/AIUsageMetrics"

export function AIAnalyticsSection() {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold">
          Usage & Cost Analytics
        </h2>

        <p className="text-sm text-muted-foreground">
          Monitor AI usage, token consumption, and estimated operational costs.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <AIUsageMetrics />
        <AICostMetrics />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <AIUsageTrendChart />
        <AICostTrendChart />
      </div>
    </section>
  )
}
