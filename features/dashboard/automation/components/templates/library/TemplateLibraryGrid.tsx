"use client"

const templates = [
  {
    id: "lead-follow-up",
    name: "Lead Follow-up",
    category: "Sales",
  },
  {
    id: "ticket-routing",
    name: "Support Ticket Routing",
    category: "Support",
  },
  {
    id: "employee-onboarding",
    name: "Employee Onboarding",
    category: "HR",
  },
]

export function TemplateLibraryGrid() {
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
