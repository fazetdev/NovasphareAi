import type { WorkflowStatus } from "../../types"

type WorkflowStatusBadgeProps = {
  status: WorkflowStatus
}

export function WorkflowStatusBadge({
  status,
}: WorkflowStatusBadgeProps) {
  return (
    <span className="rounded-full border px-2 py-1 text-xs">
      {status}
    </span>
  )
}
