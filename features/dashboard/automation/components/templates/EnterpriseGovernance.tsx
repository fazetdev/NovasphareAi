"use client"

const policies = [
  {
    id: "retention",
    title: "Workflow Retention Policy",
    status: "Enabled",
  },
  {
    id: "compliance",
    title: "Compliance Validation",
    status: "Enabled",
  },
  {
    id: "security",
    title: "Security Review",
    status: "Required",
  },
]

export function EnterpriseGovernance() {
  return (
    <div className="space-y-4 rounded-md border p-4">
      <h3 className="font-medium">
        Enterprise Governance
      </h3>

      <div className="space-y-3">
        {policies.map((policy) => (
          <div
            key={policy.id}
            className="flex items-center justify-between rounded-md border p-3"
          >
            <div>
              <p className="font-medium">
                {policy.title}
              </p>

              <p className="text-sm text-muted-foreground">
                {policy.status}
              </p>
            </div>

            <button
              type="button"
              className="rounded-md border px-3 py-1 text-sm"
            >
              Configure
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
