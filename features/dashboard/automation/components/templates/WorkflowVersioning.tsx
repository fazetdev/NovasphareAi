"use client"

const versions = [
  {
    id: "v1.2.0",
    status: "Current",
    updatedAt: "Today",
  },
  {
    id: "v1.1.0",
    status: "Published",
    updatedAt: "Last week",
  },
  {
    id: "v1.0.0",
    status: "Archived",
    updatedAt: "Last month",
  },
]

export function WorkflowVersioning() {
  return (
    <div className="space-y-4 rounded-md border p-4">
      <h3 className="font-medium">
        Workflow Versions
      </h3>

      <div className="space-y-3">
        {versions.map((version) => (
          <div
            key={version.id}
            className="flex items-center justify-between rounded-md border p-3"
          >
            <div>
              <p className="font-medium">
                {version.id}
              </p>

              <p className="text-sm text-muted-foreground">
                {version.updatedAt}
              </p>
            </div>

            <span className="rounded border px-2 py-1 text-xs">
              {version.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
