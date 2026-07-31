"use client"

import { useTranslations } from "@/lib/i18n/hooks"

export function WorkflowPermissions() {
  const t = useTranslations()

  const roles = [
    {
      role: t.automation.admin,
      access: t.automation.adminAccess,
    },
    {
      role: t.automation.editor,
      access: t.automation.editorAccess,
    },
    {
      role: t.automation.viewer,
      access: t.automation.viewerAccess,
    },
  ]

  return (
    <div className="space-y-4 rounded-md border p-4">
      <h3 className="font-medium">
        {t.automation.workflowPermissions}
      </h3>

      <div className="space-y-3">
        {roles.map((role) => (
          <div
            key={role.role}
            className="flex items-center justify-between rounded-md border p-3"
          >
            <span className="text-sm font-medium">
              {role.role}
            </span>

            <span className="text-sm text-muted-foreground">
              {role.access}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
