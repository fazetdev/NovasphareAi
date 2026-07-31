"use client"

import { useTranslations } from "@/lib/i18n/hooks"

export function ExecutionStatisticsCards() {
  const t = useTranslations()

  return (
    <div className="rounded-md border p-4">
      <h3 className="font-medium">
        {t.automation.failedExecutions}
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        {t.automation.noIssuesDetected}
      </p>
    </div>
  )
}
