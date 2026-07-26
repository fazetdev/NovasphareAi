"use client"

const permissions = [
  {
    role: "Admin",
    access: "Full workflow control",
  },
  {
    role: "Editor",
    access: "Create and edit workflows",
  },
  {
    role: "Viewer",
    access: "View workflows only",
  },
]

export function WorkflowPermissions() {
  return (
    <div className="space-y-4 rounded-md border p-4">
      <h3 className="font-medium">
        Workflow Permissions
      </h3>

      <div className="space-y-3">
        {permissions.map((permission) => (
          <div
            key={permission.role}
            className="flex items-center justify-between rounded-md border p-3"
          >
            <span className="text-sm font-medium">
              {permission.role}
            </span>

            <span className="text-sm text-muted-foreground">
              {permission.access}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
