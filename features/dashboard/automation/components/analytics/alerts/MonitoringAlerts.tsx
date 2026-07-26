"use client"

const alerts = [
  {
    title: "Failed executions",
    status: "No issues detected",
  },
  {
    title: "Workflow health",
    status: "Healthy",
  },
  {
    title: "Execution delays",
    status: "No delays",
  },
]

export function MonitoringAlerts() {
  return (
    <div className="space-y-3 rounded-md border p-4">
      <h3 className="font-medium">
        Monitoring Status
      </h3>

      {alerts.map((alert) => (
        <div
          key={alert.title}
          className="flex items-center justify-between rounded-md border p-3"
        >
          <span className="text-sm">
            {alert.title}
          </span>

          <span className="text-sm text-muted-foreground">
            {alert.status}
          </span>
        </div>
      ))}
    </div>
  )
}
