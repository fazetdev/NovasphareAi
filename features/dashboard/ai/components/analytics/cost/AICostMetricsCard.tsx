import type { AICostMetrics } from "../../../types"

interface AICostMetricsCardProps {
  cost: AICostMetrics
}

export function AICostMetricsCard({
  cost,
}: AICostMetricsCardProps) {
  return (
    <section className="rounded-lg border p-6">
      <h3 className="text-lg font-semibold">
        Cost Metrics
      </h3>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-sm text-muted-foreground">
            Total Cost
          </p>

          <p className="text-2xl font-bold">
            {cost.currency} {cost.totalCost}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Average Cost / Request
          </p>

          <p className="text-2xl font-bold">
            {cost.currency} {cost.averageCostPerRequest}
          </p>
        </div>
      </div>
    </section>
  )
}
