import type { PlaygroundSession } from "../../../types"

interface AIPlaygroundResponseProps {
  session: PlaygroundSession | null
}

export function AIPlaygroundResponse({
  session,
}: AIPlaygroundResponseProps) {
  const result = session?.result
  const metrics = result?.metrics

  return (
    <section className="rounded-lg border p-6">
      <h3 className="text-lg font-semibold">
        Response
      </h3>

      <div className="mt-6 rounded-md border bg-muted/30 p-4">
        <pre className="whitespace-pre-wrap break-words text-sm">
          {result?.response ?? "No response available."}
        </pre>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-sm text-muted-foreground">
            Input Tokens
          </p>

          <p className="font-medium">
            {metrics?.inputTokens ?? "—"}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Output Tokens
          </p>

          <p className="font-medium">
            {metrics?.outputTokens ?? "—"}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Latency
          </p>

          <p className="font-medium">
            {metrics?.latencyMs
              ? `${metrics.latencyMs} ms`
              : "—"}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Estimated Cost
          </p>

          <p className="font-medium">
            {metrics?.estimatedCost ?? "—"}
          </p>
        </div>
      </div>
    </section>
  )
}
