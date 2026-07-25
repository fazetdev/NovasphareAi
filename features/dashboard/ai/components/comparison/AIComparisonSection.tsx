import type { AIModel } from "../../types"

import { AIComparisonSelector } from "./selector/AIComparisonSelector"
import { AIComparisonTable } from "./table/AIComparisonTable"

interface AIComparisonSectionProps {
  models?: AIModel[]
}

export function AIComparisonSection({
  models = [],
}: AIComparisonSectionProps) {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold">
          Model Comparison
        </h2>

        <p className="text-sm text-muted-foreground">
          Compare AI models across providers,
          capabilities, pricing, and performance.
        </p>
      </div>

      <AIComparisonSelector
        models={models}
      />

      <AIComparisonTable
        models={models}
      />
    </section>
  )
}
