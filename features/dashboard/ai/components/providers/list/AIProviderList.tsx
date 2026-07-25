import type { AIProvider } from "../../../types"

import { EmptyState } from "@/components/ui/EmptyState"

import { AIProviderCard } from "../cards/AIProviderCard"

interface AIProviderListProps {
  providers: AIProvider[]
}

export function AIProviderList({
  providers,
}: AIProviderListProps) {
  if (providers.length === 0) {
    return (
      <EmptyState
        title="No AI providers configured"
        description="Connect an AI provider to start managing models and configurations."
      />
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {providers.map((provider) => (
        <AIProviderCard
          key={provider.id}
          provider={provider}
        />
      ))}
    </div>
  )
}
