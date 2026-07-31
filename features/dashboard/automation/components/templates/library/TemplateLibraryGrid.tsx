"use client"

import { useTranslations } from "@/lib/i18n/hooks"

export function TemplateLibraryGrid() {
  const t = useTranslations()

  const templates = [
    {
      id: "lead-follow-up",
      name: t.automation.leadFollowUp,
      category: t.automation.sales,
    },
    {
      id: "ticket-routing",
      name: t.automation.supportTicketRouting,
      category: t.automation.support,
    },
    {
      id: "employee-onboarding",
      name: t.automation.employeeOnboarding,
      category: t.automation.hr,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {templates.map((template) => (
        <div
          key={template.id}
          className="rounded-md border p-4"
        >
          <h3 className="font-medium">
            {template.name}
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            {template.category}
          </p>
        </div>
      ))}
    </div>
  )
}
