"use client"

const settings = [
  {
    title: "Workflow Permissions",
    description: "Control access to automation workflows.",
  },
  {
    title: "Execution Policies",
    description: "Manage workflow execution rules.",
  },
  {
    title: "Notifications",
    description: "Configure automation alerts.",
  },
]

export function SettingsOverview() {
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
