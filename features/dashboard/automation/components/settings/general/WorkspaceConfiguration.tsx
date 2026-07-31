"use client"

import { useTranslations } from "@/lib/i18n/hooks"

export function WorkspaceConfiguration() {
  const t = useTranslations()

  return (
    <div className="space-y-4 rounded-md border p-4">
      <h3 className="font-medium">
        {t.automation.workspaceConfiguration}
      </h3>

      <div className="space-y-3">
        <div>
          <label className="text-sm">
            {t.automation.workspaceName}
          </label>

          <input
            className="mt-1 w-full rounded-md border p-2 text-sm"
            placeholder={
              t.automation.workspaceNamePlaceholder
            }
          />
        </div>

        <div>
          <label className="text-sm">
            {t.automation.workspaceDescription}
          </label>

          <input
            className="mt-1 w-full rounded-md border p-2 text-sm"
            placeholder={
              t.automation.workspaceDescriptionPlaceholder
            }
          />
        </div>
      </div>
    </div>
  )
}
