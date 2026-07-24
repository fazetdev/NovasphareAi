import type { AIModel } from "../../types"

import { AIModelDetails } from "./details/AIModelDetails"
import { AIModelList } from "./list/AIModelList"

interface AIModelsSectionProps {
  models: AIModel[]
}

export function AIModelsSection({
  models,
}: AIModelsSectionProps) {
  const selectedModel = models[0]

  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold">
          Models
        </h2>

        <p className="text-sm text-muted-foreground">
          Browse, compare, and manage AI models across all configured providers.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <AIModelList
            models={models}
          />
        </div>

        {selectedModel && (
          <AIModelDetails
            model={selectedModel}
          />
        )}
      </div>
    </section>
  )
}
