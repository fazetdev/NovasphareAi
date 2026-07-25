import type { AIProvider } from "../../../types"

import { AIProviderCapabilities } from "../details/AIProviderCapabilities"
import { AIProviderStatus } from "../details/AIProviderStatus"

interface AIProviderCardProps {
  provider: AIProvider
}

export function AIProviderCard({
  provider,
}: AIProviderCardProps) {
  return (
    <article className="rounded-lg border p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold">
            {provider.name}
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            {provider.description}
          </p>
        </div>

        <AIProviderStatus
          status={provider.status}
        />
      </div>

      <div className="mt-4 space-y-3 text-sm">
        <p>
          Authentication: {provider.authType}
        </p>

        <p>
          Connection:{" "}
          {provider.health?.connectionStatus ?? "Unknown"}
        </p>

        <p>
          Region:{" "}
          {String(provider.metadata.region ?? "Unknown")}
        </p>

        <p>
          Models Limit:{" "}
          {provider.limits.maxModels ?? "Unlimited"}
        </p>

        <AIProviderCapabilities
          capabilities={provider.capabilities}
        />
      </div>
    </article>
  )
}
