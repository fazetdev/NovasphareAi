"use client"

export function AuditLogSettings() {
  return (
    <div className="space-y-4 rounded-md border p-4">
      <h3 className="font-medium">
        Audit Log Settings
      </h3>

      <div className="space-y-3">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            defaultChecked
          />
          Enable workflow activity tracking
        </label>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            defaultChecked
          />
          Track permission changes
        </label>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
          />
          Store execution history permanently
        </label>
      </div>
    </div>
  )
}
