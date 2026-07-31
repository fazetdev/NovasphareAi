"use client"

import { useTranslations } from "@/lib/i18n/hooks"

export function WorkflowActivityTimeline() {
  const t = useTranslations()

  const activities = [
    {
      id: 1,
      title: t.automation.workflowHealth,
      status: t.automation.healthy,
    },
    {
      id: 2,
      title: t.automation.failedExecutions,
      status: t.automation.noIssuesDetected,
    },
    {
      id: 3,
      title: t.automation.executionDelays,
      status: t.automation.noDelays,
    },
  ]

  return (
    <div className="space-y-3 rounded-md border p-4">
      {activities.map((activity) => (
        <div
          key={activity.id}
          className="flex items-center justify-between rounded-md border p-3"
        >
          <span className="text-sm">
            {activity.title}
          </span>

          <span className="text-sm text-muted-foreground">
            {activity.status}
          </span>
        </div>
      ))}
    </div>
  )
}
