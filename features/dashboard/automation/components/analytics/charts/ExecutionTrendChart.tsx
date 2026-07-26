"use client"

const points = [
  {
    label: "Mon",
    value: 0,
  },
  {
    label: "Tue",
    value: 0,
  },
  {
    label: "Wed",
    value: 0,
  },
  {
    label: "Thu",
    value: 0,
  },
  {
    label: "Fri",
    value: 0,
  },
]

export function ExecutionTrendChart() {
  return (
    <div className="rounded-md border p-4">
      <h3 className="font-medium">
        Execution Trends
      </h3>

      <div className="mt-4 flex items-end gap-3">
        {points.map((point) => (
          <div
            key={point.label}
            className="flex flex-col items-center gap-2"
          >
            <div
              className="h-20 w-8 rounded border"
              style={{
                height: `${Math.max(
                  point.value * 10,
                  4,
                )}px`,
              }}
            />

            <span className="text-xs text-muted-foreground">
              {point.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
