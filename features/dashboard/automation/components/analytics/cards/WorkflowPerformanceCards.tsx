"use client"

const metrics = [
  {
    label: "Average Execution Time",
    value: "0s",
  },
  {
    label: "Completed Workflows",
    value: "0",
  },
  {
    label: "Failed Workflows",
    value: "0",
  },
  {
    label: "Active Workflows",
    value: "0",
  },
]

export function WorkflowPerformanceCards() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-md border p-4"
        >
          <div className="text-sm text-muted-foreground">
            {metric.label}
          </div>

          <div className="mt-2 text-2xl font-semibold">
            {metric.value}
          </div>
        </div>
      ))}
    </div>
  )
}
