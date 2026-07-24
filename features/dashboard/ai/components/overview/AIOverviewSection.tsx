import type {
  AIInferenceConfiguration,
  AIModel,
  AIProvider,
} from "../../types"

interface AIOverviewSectionProps {
  providers: AIProvider[]
  models: AIModel[]
  configuration: AIInferenceConfiguration | null
}

export function AIOverviewSection({
  providers,
  models,
  configuration,
}: AIOverviewSectionProps) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <div className="rounded-lg border p-6">
        <p className="text-sm text-muted-foreground">
          Providers
        </p>

        <h2 className="mt-2 text-2xl font-bold">
          {providers.length}
        </h2>
      </div>

      <div className="rounded-lg border p-6">
        <p className="text-sm text-muted-foreground">
          Models
        </p>

        <h2 className="mt-2 text-2xl font-bold">
          {models.length}
        </h2>
      </div>

      <div className="rounded-lg border p-6">
        <p className="text-sm text-muted-foreground">
          Workspace Default
        </p>

        <h2 className="mt-2 text-base font-semibold">
          {configuration?.name ?? "Not Configured"}
        </h2>
      </div>

      <div className="rounded-lg border p-6">
        <p className="text-sm text-muted-foreground">
          Playground Sessions
        </p>

        <h2 className="mt-2 text-2xl font-bold">
          0
        </h2>
      </div>
    </section>
  )
}
