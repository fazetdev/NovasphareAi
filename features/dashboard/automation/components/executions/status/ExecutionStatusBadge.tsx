"use client"

import type {
  WorkflowExecutionStatus,
} from "../../../types"

export function ExecutionStatusBadge({
  status,
}: {
  status: WorkflowExecutionStatus
}) {
  return (
    <span className="rounded-md border px-2 py-1 text-xs">
      {status}
    </span>
  )
}
