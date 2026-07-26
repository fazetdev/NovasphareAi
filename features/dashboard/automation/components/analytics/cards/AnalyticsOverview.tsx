"use client"

export function AnalyticsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="rounded-md border p-4">
        <div className="text-sm text-muted-foreground">
          Total Workflows
        </div>
        <div className="text-2xl font-semibold">
          0
        </div>
      </div>

      <div className="rounded-md border p-4">
        <div className="text-sm text-muted-foreground">
          Executions
        </div>
        <div className="text-2xl font-semibold">
          0
        </div>
      </div>

      <div className="rounded-md border p-4">
        <div className="text-sm text-muted-foreground">
          Success Rate
        </div>
        <div className="text-2xl font-semibold">
          0%
        </div>
      </div>
    </div>
  )
}
