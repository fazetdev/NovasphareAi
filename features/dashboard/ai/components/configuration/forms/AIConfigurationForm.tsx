import type { AIInferenceConfiguration } from "../../../types"

interface AIConfigurationFormProps {
  configuration: AIInferenceConfiguration | null
}

export function AIConfigurationForm({
  configuration,
}: AIConfigurationFormProps) {
  return (
    <div className="rounded-lg border p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Configuration Name
          </label>

          <input
            readOnly
            value={configuration?.name ?? ""}
            className="w-full rounded-md border bg-background px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Scope
          </label>

          <input
            readOnly
            value={configuration?.scope ?? ""}
            className="w-full rounded-md border bg-background px-3 py-2 text-sm"
          />
        </div>
      </div>
    </div>
  )
}
