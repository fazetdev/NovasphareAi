"use client"

const collaborators = [
  {
    id: "1",
    name: "Workspace Admin",
    role: "Owner",
  },
  {
    id: "2",
    name: "Automation Team",
    role: "Editor",
  },
]

export function WorkflowCollaboration() {
  return (
    <div className="space-y-4 rounded-md border p-4">
      <h3 className="font-medium">
        Collaboration
      </h3>

      <div className="space-y-3">
        {collaborators.map((member) => (
          <div
            key={member.id}
            className="flex items-center justify-between rounded-md border p-3"
          >
            <div>
              <p className="font-medium">
                {member.name}
              </p>

              <p className="text-sm text-muted-foreground">
                {member.role}
              </p>
            </div>

            <button
              type="button"
              className="rounded-md border px-3 py-1 text-sm"
            >
              Share
            </button>
          </div>
        ))}
      </div>

      <textarea
        rows={3}
        placeholder="Add a collaboration note..."
        className="w-full rounded-md border p-3 text-sm"
      />
    </div>
  )
}
