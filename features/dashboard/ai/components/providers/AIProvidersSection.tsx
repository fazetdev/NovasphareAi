import type { AIProvider } from "../../types"

import { AIProviderDetails } from "./details/AIProviderDetails"
import { AIProviderList } from "./list/AIProviderList"

interface AIProvidersSectionProps {
  providers: AIProvider[]
}

export function AIProvidersSection({
  providers,
}: AIProvidersSectionProps) {
  const selectedProvider = providers[0]

  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold">
          Providers
        </h2>

        <p className="text-sm text-muted-foreground">
          Manage AI providers, authentication, capabilities, and operational status.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <AIProviderList
            providers={providers}
          />
        </div>

        {selectedProvider && (
          <AIProviderDetails
            provider={selectedProvider}
          />
        )}
      </div>
    </section>
  )
}
