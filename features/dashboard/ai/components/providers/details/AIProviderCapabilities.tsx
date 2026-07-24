import type { AICapability } from "../../../types"

interface AIProviderCapabilitiesProps {
  capabilities: AICapability[]
}

export function AIProviderCapabilities({
  capabilities,
}: AIProviderCapabilitiesProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {capabilities.map((capability) => (
        <span
          key={capability.id}
          className="rounded-full border px-3 py-1 text-xs"
          title={capability.description}
        >
          {capability.type}
        </span>
      ))}
    </div>
  )
}
