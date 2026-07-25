import type { AIProvider } from "../../types"

interface AIWorkspaceHealthProps {
  providers: AIProvider[]
}

export function AIWorkspaceHealth({
  providers,
}: AIWorkspaceHealthProps) {
  const connectedProviders = providers.filter(
    (provider) =>
      provider.health.connectionStatus === "connected",
  ).length

  const totalProviders = providers.length

  return (
    <section className="rounded-lg border p-6">
      <h3 className="text-lg font-semibold">
        Workspace Health
      </h3>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Connected Providers
          </span>

          <span className="font-medium">
            {connectedProviders}/{totalProviders}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Workspace Status
          </span>

          <span className="rounded-full border px-2 py-1 text-xs">
            {connectedProviders === totalProviders &&
            totalProviders > 0
              ? "Healthy"
              : "Attention Required"}
          </span>
        </div>
      </div>
    </section>
  )
}
