import type { AIProvider } from "../../../types"

import { AIProviderCapabilities } from "./AIProviderCapabilities"
import { AIProviderStatus } from "./AIProviderStatus"

interface AIProviderDetailsProps {
  provider: AIProvider
}

export function AIProviderDetails({
  provider,
}: AIProviderDetailsProps) {
  return (
    <section className="rounded-lg border p-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold">
          {provider.name}
        </h2>

        <AIProviderStatus
          status={provider.status}
        />
      </div>

      <dl className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <dt className="text-sm text-muted-foreground">
            Authentication
          </dt>
          <dd>{provider.authType}</dd>
        </div>

        <div>
          <dt className="text-sm text-muted-foreground">
            Connection
          </dt>
          <dd>
            {provider.health?.connectionStatus ?? "Unknown"}
          </dd>
        </div>

        <div>
          <dt className="text-sm text-muted-foreground">
            Latency
          </dt>
          <dd>
            {provider.health?.latencyMs
              ? `${provider.health.latencyMs}ms`
              : "Unknown"}
          </dd>
        </div>

        <div>
          <dt className="text-sm text-muted-foreground">
            Max Context Window
          </dt>
          <dd>
            {provider.limits.maxContextWindow ?? "Not specified"}
          </dd>
        </div>

        <div>
          <dt className="text-sm text-muted-foreground">
            Requests Per Minute
          </dt>
          <dd>
            {provider.limits.requestsPerMinute ?? "Not specified"}
          </dd>
        </div>

        <div>
          <dt className="text-sm text-muted-foreground">
            Tokens Per Minute
          </dt>
          <dd>
            {provider.limits.tokensPerMinute ?? "Not specified"}
          </dd>
        </div>
      </dl>

      <div className="mt-6">
        <h3 className="mb-2 text-sm font-medium">
          Capabilities
        </h3>

        <AIProviderCapabilities
          capabilities={provider.capabilities}
        />
      </div>
    </section>
  )
}
