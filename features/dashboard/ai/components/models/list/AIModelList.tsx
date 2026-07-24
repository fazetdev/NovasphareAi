import type { AIModel } from "../../../types"

import { AIModelCard } from "../cards/AIModelCard"

interface AIModelListProps {
  models: AIModel[]
}

export function AIModelList({
  models,
}: AIModelListProps) {
  if (models.length === 0) {
    return (
      <div className="rounded-lg border p-6 text-sm text-muted-foreground">
        No AI models available.
      </div>
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {models.map((model) => (
        <AIModelCard
          key={model.id}
          model={model}
        />
      ))}
    </div>
  )
}
