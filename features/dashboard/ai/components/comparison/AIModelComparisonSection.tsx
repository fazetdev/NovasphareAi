import { AIComparisonMetrics } from "./metrics/AIComparisonMetrics"
import { AIComparisonModelCard } from "./models/AIComparisonModelCard"
import { AIComparisonResults } from "./results/AIComparisonResults"

export function AIModelComparisonSection() {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold">
          Model Comparison
        </h2>

        <p className="text-sm text-muted-foreground">
          Compare AI models side by side using responses, performance, and usage metrics.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <AIComparisonModelCard
          title="Model A"
        />

        <AIComparisonModelCard
          title="Model B"
        />
      </div>

      <AIComparisonResults />

      <AIComparisonMetrics />
    </section>
  )
}
