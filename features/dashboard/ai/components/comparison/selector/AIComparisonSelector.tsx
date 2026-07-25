import type { AIModel } from "../../../types"

interface AIComparisonSelectorProps {
  models: AIModel[]
}

export function AIComparisonSelector({
  models,
}: AIComparisonSelectorProps) {
  return (
    <section className="rounded-lg border p-6">
      <h3 className="text-lg font-semibold">
        Compare Models
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        Select two models to compare.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <select className="rounded-md border bg-background px-3 py-2 text-sm">
          <option>Select first model</option>

          {models.map((model) => (
            <option
              key={model.id}
              value={model.id}
            >
              {model.name}
            </option>
          ))}
        </select>

        <select className="rounded-md border bg-background px-3 py-2 text-sm">
          <option>Select second model</option>

          {models.map((model) => (
            <option
              key={model.id}
              value={model.id}
            >
              {model.name}
            </option>
          ))}
        </select>
      </div>
    </section>
  )
}
