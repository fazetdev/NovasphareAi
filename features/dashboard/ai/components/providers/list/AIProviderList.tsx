import type { AIProvider } from "../../../types"

import { AIProviderCard } from "../cards/AIProviderCard"

interface AIProviderListProps {
  providers: AIProvider[]
}

export function AIProviderList({
  providers,
}: AIProviderListProps) {
  if (providers.length === 0) {
    return (
      <div className="rounded-lg border p-6 text-sm text-muted-foreground">
        No AI providers configured.
      </div>
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
