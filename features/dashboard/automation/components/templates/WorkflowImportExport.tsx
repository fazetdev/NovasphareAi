"use client"

export function WorkflowImportExport() {
  return (
    <div className="space-y-4 rounded-md border p-4">
      <h3 className="font-medium">
        Import & Export
      </h3>

      <p className="text-sm text-muted-foreground">
        Import existing workflow definitions or export workflows for backup and sharing.
      </p>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          className="rounded-md border px-4 py-2 text-sm"
        >
          Import Workflow
        </button>

        <button
          type="button"
          className="rounded-md border px-4 py-2 text-sm"
        >
          Export Workflow
        </button>
      </div>
    </div>
  )
}
