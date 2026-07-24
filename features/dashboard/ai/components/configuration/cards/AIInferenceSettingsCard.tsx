import type { AIInferenceConfiguration } from "../../../types"

interface AIInferenceSettingsCardProps {
  configuration: AIInferenceConfiguration | null
}

export function AIInferenceSettingsCard({
  configuration,
}: AIInferenceSettingsCardProps) {
  const parameters = configuration?.parameters

  return (
    <section className="rounded-lg border p-6">
      <h3 className="text-lg font-semibold">
        Inference Settings
      </h3>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-sm text-muted-foreground">
            Temperature
          </p>
          <p className="font-medium">
            {parameters?.temperature ?? "—"}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Max Tokens
          </p>
          <p className="font-medium">
            {parameters?.maxTokens ?? "—"}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Streaming
          </p>
          <p className="font-medium">
            {parameters?.streaming ? "Enabled" : "Disabled"}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Structured Output
          </p>
          <p className="font-medium">
            {configuration?.enableStructuredOutput ? "Enabled" : "Disabled"}
          </p>
        </div>
      </div>
    </section>
  )
}
