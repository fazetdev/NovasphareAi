"use client"

const statistics = [
  {
    label: "Total Executions",
    value: "0",
  },
  {
    label: "Running",
    value: "0",
  },
  {
    label: "Successful",
    value: "0",
  },
  {
    label: "Failed",
    value: "0",
  },
]

export function ExecutionStatisticsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {statistics.map((item) => (
        <div
          key={item.label}
          className="rounded-md border p-4"
        >
          <div className="text-sm text-muted-foreground">
            {item.label}
          </div>

          <div className="mt-2 text-2xl font-semibold">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  )
}
