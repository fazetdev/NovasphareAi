"use client"

import { useTranslations } from "@/lib/i18n/hooks"

export function SettingsOverview() {
  const t = useTranslations()

  const settings = [
    {
      title: t.automation.workflowPermissions,
      description:
        t.automation.workflowPermissionsDescription,
    },
    {
      title: t.automation.executionPolicies,
      description:
        t.automation.executionPoliciesDescription,
    },
    {
      title: t.automation.notifications,
      description:
        t.automation.notificationsDescription,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {settings.map((item) => (
        <div
          key={item.title}
          className="rounded-md border p-4"
        >
          <h3 className="font-medium">
            {item.title}
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  )
}
