import type { AIModel } from "../../../types"

import { EmptyState } from "@/components/ui/EmptyState"

import { AIModelCard } from "../cards/AIModelCard"

interface AIModelListProps {
  models: AIModel[]
}

export function AIModelList({
  models,
}: AIModelListProps) {
  if (models.length === 0) {
    return (
      <EmptyState
        title="No AI models available"
        description="Models will appear here once providers are configured."
      />
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
