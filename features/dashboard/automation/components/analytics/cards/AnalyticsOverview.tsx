"use client"

import { useTranslations } from "@/lib/i18n/hooks"

export function AnalyticsOverview() {
  const t = useTranslations()

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-md border p-4">
        <div className="text-sm text-muted-foreground">
          {t.automation.workflows}
        </div>

        <div className="mt-2 text-2xl font-semibold">
          24
        </div>
      </div>

      <div className="rounded-md border p-4">
        <div className="text-sm text-muted-foreground">
          {t.automation.executions}
        </div>

        <div className="mt-2 text-2xl font-semibold">
          1,248
        </div>
      </div>
    </div>
  )
}
