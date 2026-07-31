"use client"

import { useTranslations } from "@/lib/i18n/hooks"

export function ExecutionPolicies() {
  const t = useTranslations()

  return (
    <div className="space-y-4 rounded-md border p-4">
      <h3 className="font-medium">
        {t.automation.executionPolicies}
      </h3>

      <div className="space-y-3">
        <div>
          <label className="text-sm">
            {t.automation.maxConcurrentExecutions}
          </label>

          <input
            type="number"
            defaultValue={5}
            className="mt-1 w-full rounded-md border p-2 text-sm"
          />
        </div>

        <div>
          <label className="text-sm">
            {t.automation.executionTimeout}
          </label>

          <input
            type="number"
            defaultValue={300}
            className="mt-1 w-full rounded-md border p-2 text-sm"
          />
        </div>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            defaultChecked
          />
          {t.automation.allowAutomaticRetries}
        </label>
      </div>
    </div>
  )
}
