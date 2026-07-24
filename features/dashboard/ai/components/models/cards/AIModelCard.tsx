import type { AIModel } from "../../../types"

interface AIModelCardProps {
  model: AIModel
}

export function AIModelCard({
  model,
}: AIModelCardProps) {
  return (
    <article className="rounded-lg border p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold">
            {model.name}
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            {model.description}
          </p>
        </div>

        <span className="rounded-full border px-2 py-1 text-xs">
          {model.status}
        </span>
      </div>

      <div className="mt-4 space-y-2 text-sm">
        <p>Model ID: {model.id}</p>

        <p className="text-muted-foreground">
          Provider: {model.providerId}
        </p>
      </div>
    </article>
  )
}
