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
          Model Catalog
        </h2>

        <p className="text-sm text-muted-foreground">
          Browse, inspect, and manage AI models available across configured providers.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <AIModelList models={models} />
        </div>

        {selectedModel ? (
          <AIModelDetails model={selectedModel} />
        ) : (
          <div className="rounded-lg border p-6 text-sm text-muted-foreground">
            Select a model to view details.
          </div>
        )}
      </div>
    </section>
  )
}
