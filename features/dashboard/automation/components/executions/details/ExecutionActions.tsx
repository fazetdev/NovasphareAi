"use client"

import type {
  WorkflowExecutionRecord,
} from "../../../types"

export function ExecutionActions({
  execution,
  onRetry,
  onCancel,
}: {
  execution: WorkflowExecutionRecord
  onRetry: () => void
  onCancel: () => void
}) {
  const canRetry =
    execution.status === "failed" ||
    execution.status === "cancelled"

  const canCancel =
    execution.status === "running" ||
    execution.status === "queued"

  return (
    <div className="flex gap-2">
      {canRetry && (
        <button
          onClick={onRetry}
          className="rounded-md border px-3 py-2 text-sm"
        >
          Retry
        </button>
      )}

      {canCancel && (
        <button
          onClick={onCancel}
          className="rounded-md border px-3 py-2 text-sm"
        >
          Cancel
        </button>
      )}
    </div>
  )
}
