import type { AIModel } from "../../../types"

interface AIModelDetailsProps {
  model: AIModel
}

export function AIModelDetails({
  model,
}: AIModelDetailsProps) {
  return (
    <section className="rounded-lg border p-6">
      <div>
        <h2 className="text-lg font-semibold">
          {model.name}
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          {model.description}
        </p>
      </div>

      <dl className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <dt className="text-sm text-muted-foreground">
            Provider
          </dt>
          <dd>{model.providerId}</dd>
        </div>

        <div>
          <dt className="text-sm text-muted-foreground">
            Version
          </dt>
          <dd>{model.version}</dd>
        </div>

        <div>
          <dt className="text-sm text-muted-foreground">
            Category
          </dt>
          <dd>{model.category}</dd>
        </div>

        <div>
          <dt className="text-sm text-muted-foreground">
            Status
          </dt>
          <dd>{model.status}</dd>
        </div>

        <div>
          <dt className="text-sm text-muted-foreground">
            Context Window
          </dt>
          <dd>
            {model.specification.contextWindow}
          </dd>
        </div>

        <div>
          <dt className="text-sm text-muted-foreground">
            Latency
          </dt>
          <dd>
            {model.latency.averageMs
              ? `${model.latency.averageMs}ms`
              : "Unknown"}
          </dd>
        </div>
      </dl>

      <div className="mt-6">
        <h3 className="text-sm font-medium">
          Capabilities
        </h3>

        <div className="mt-3 flex flex-wrap gap-2">
          {model.capabilities.length === 0 ? (
            <span className="text-sm text-muted-foreground">
              No capabilities listed
            </span>
          ) : (
            model.capabilities.map((capability) => (
              <span
                key={capability.id}
                className="rounded-full border px-2 py-1 text-xs"
              >
                {capability.type}
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
