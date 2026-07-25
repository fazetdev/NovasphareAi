import type { AIModel } from "../../../types"

interface AIComparisonTableProps {
  models: AIModel[]
}

export function AIComparisonTable({
  models,
}: AIComparisonTableProps) {
  if (models.length < 2) {
    return (
      <div className="rounded-lg border p-6 text-sm text-muted-foreground">
        Select at least two models to compare.
      </div>
    )
  }

  const [left, right] = models

  return (
    <section className="rounded-lg border">
      <table className="w-full text-sm">
        <tbody>
          <tr className="border-b">
            <th className="p-4 text-left">Property</th>
            <th className="p-4 text-left">
              {left.name}
            </th>
            <th className="p-4 text-left">
              {right.name}
            </th>
          </tr>

          <tr className="border-b">
            <td className="p-4">Provider</td>
            <td className="p-4">
              {left.providerId}
            </td>
            <td className="p-4">
              {right.providerId}
            </td>
          </tr>

          <tr className="border-b">
            <td className="p-4">Category</td>
            <td className="p-4">
              {left.category}
            </td>
            <td className="p-4">
              {right.category}
            </td>
          </tr>

          <tr className="border-b">
            <td className="p-4">Context Window</td>
            <td className="p-4">
              {left.specification.contextWindow}
            </td>
            <td className="p-4">
              {right.specification.contextWindow}
            </td>
          </tr>

          <tr>
            <td className="p-4">Streaming</td>
            <td className="p-4">
              {left.specification.supportsStreaming
                ? "Yes"
                : "No"}
            </td>
            <td className="p-4">
              {right.specification.supportsStreaming
                ? "Yes"
                : "No"}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
