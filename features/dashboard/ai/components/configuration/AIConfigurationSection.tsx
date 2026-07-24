import type { AIInferenceConfiguration } from "../../types"

import { AIConfigurationActions } from "./actions/AIConfigurationActions"
import { AIInferenceSettingsCard } from "./cards/AIInferenceSettingsCard"
import { AIConfigurationForm } from "./forms/AIConfigurationForm"

interface AIConfigurationSectionProps {
  configuration: AIInferenceConfiguration | null
}

export function AIConfigurationSection({
  configuration,
}: AIConfigurationSectionProps) {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold">
          Inference Configuration
        </h2>

        <p className="text-sm text-muted-foreground">
          Configure workspace-wide inference defaults for all supported AI providers.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <AIConfigurationForm
          configuration={configuration}
        />

        <AIInferenceSettingsCard
          configuration={configuration}
        />
      </div>

      <AIConfigurationActions />
    </section>
  )
}
