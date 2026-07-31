"use client"

import { useTranslations } from "@/lib/i18n/hooks"

export function MonitoringAlerts() {
  const t = useTranslations()

  const alerts = [
    {
      title: t.automation.failedExecutions,
      status: t.automation.noIssuesDetected,
    },
    {
      title: t.automation.workflowHealth,
      status: t.automation.healthy,
    },
    {
      title: t.automation.executionDelays,
      status: t.automation.noDelays,
    },
  ]

  return (
    <div className="space-y-3 rounded-md border p-4">
      <h3 className="font-medium">
        {t.automation.monitoringStatus}
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
