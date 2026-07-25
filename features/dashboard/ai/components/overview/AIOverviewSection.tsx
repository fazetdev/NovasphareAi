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
  const activeProviders = providers.filter(
    (provider) => provider.status === "active",
  ).length

  const activeModels = models.filter(
    (model) => model.status === "active",
  ).length

  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <article className="rounded-lg border p-6">
        <p className="text-sm text-muted-foreground">
          Active Providers
        </p>

        <p className="mt-2 text-3xl font-bold">
          {activeProviders}
        </p>

        <p className="mt-1 text-xs text-muted-foreground">
          {providers.length} configured
        </p>
      </article>

      <article className="rounded-lg border p-6">
        <p className="text-sm text-muted-foreground">
          Active Models
        </p>

        <p className="mt-2 text-3xl font-bold">
          {activeModels}
        </p>

        <p className="mt-1 text-xs text-muted-foreground">
          {models.length} available
        </p>
      </article>

      <article className="rounded-lg border p-6">
        <p className="text-sm text-muted-foreground">
          Configuration
        </p>

        <p className="mt-2 font-semibold">
          {configuration?.name ?? "None"}
        </p>

        <p className="mt-1 text-xs text-muted-foreground">
          {configuration?.scope ?? "Not configured"}
        </p>
      </article>

      <article className="rounded-lg border p-6">
        <p className="text-sm text-muted-foreground">
          Workspace Status
        </p>

        <p className="mt-2 font-semibold">
          {configuration ? "Ready" : "Pending"}
        </p>

        <p className="mt-1 text-xs text-muted-foreground">
          AI workspace health
        </p>
      </article>
    </section>
  )
}
