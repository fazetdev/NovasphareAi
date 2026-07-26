"use client"

import {
  useWorkflowList,
} from "../../../hooks/useWorkflowList"

import {
  useDraftContext,
} from "../DraftContext"

export function WorkflowSelector() {
  const {
    workflows,
  } = useWorkflowList()

  const {
    updateDraft,
  } = useDraftContext()

  return (
    <div className="space-y-2">
      <h3 className="font-medium">
        Existing Workflows
      </h3>

      {workflows.map((workflow) => (
        <button
          key={workflow.id}
          onClick={() =>
            updateDraft(workflow)
          }
          className="w-full rounded-md border p-2 text-left text-sm"
        >
          {workflow.name}
        </button>
      ))}

      {!workflows.length && (
        <p className="text-sm text-muted-foreground">
          No saved workflows.
        </p>
      )}
    </div>
  )
}
