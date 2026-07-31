"use client"

import { useTranslations } from "@/lib/i18n/hooks"

export function NotificationPreferences() {
  const t = useTranslations()

  return (
    <div className="space-y-4 rounded-md border p-4">
      <h3 className="font-medium">
        {t.automation.notifications}
      </h3>

      <div className="space-y-3">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            defaultChecked
          />
          {t.automation.notifyWorkflowFailures}
        </label>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            defaultChecked
          />
          {t.automation.notifyExecutionSuccess}
        </label>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
          />
          {t.automation.dailySummaryReports}
        </label>
      </div>
    </div>
  )
}
