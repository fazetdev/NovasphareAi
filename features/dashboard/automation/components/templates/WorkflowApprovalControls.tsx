"use client"

const approvals = [
  {
    id: "draft",
    name: "Draft",
    status: "Complete",
  },
  {
    id: "review",
    name: "Manager Review",
    status: "Pending",
  },
  {
    id: "publish",
    name: "Publish",
    status: "Waiting",
  },
]

export function WorkflowApprovalControls() {
  return (
    <div className="space-y-4 rounded-md border p-4">
      <h3 className="font-medium">
        Approval Workflow
      </h3>

      <div className="space-y-3">
        {approvals.map((step) => (
          <div
            key={step.id}
            className="flex items-center justify-between rounded-md border p-3"
          >
            <div>
              <p className="font-medium">
                {step.name}
              </p>

              <p className="text-sm text-muted-foreground">
                {step.status}
              </p>
            </div>

            <button
              type="button"
              className="rounded-md border px-3 py-1 text-sm"
            >
              Review
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
