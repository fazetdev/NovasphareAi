import type { AIModel } from "../../../types"

interface AIModelDetailsProps {
  model: AIModel
}

export function AIModelDetails({
  model,
}: AIModelDetailsProps) {
  return (
    <section className="rounded-lg border p-6">
      <h2 className="text-lg font-semibold">
        {model.name}
      </h2>

      <p className="mt-2 text-sm text-muted-foreground">
        {model.description}
      </p>

      <dl className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <dt className="text-sm text-muted-foreground">
            Provider
          </dt>
          <dd>{model.providerId}</dd>
        </div>

        <div>
          <dt className="text-sm text-muted-foreground">
            Status
          </dt>
          <dd>{model.status}</dd>
        </div>
      </dl>
    </section>
  )
}
