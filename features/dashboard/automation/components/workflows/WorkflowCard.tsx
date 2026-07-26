import type { Workflow } from "../../types"

import { WorkflowActions } from "./WorkflowActions"
import { WorkflowStatusBadge } from "./WorkflowStatusBadge"

type WorkflowCardProps = {
  workflow: Workflow
  onEdit?: () => void
  onDuplicate?: () => void
  onToggleStatus?: () => void
}

export function WorkflowCard({
  workflow,
  onEdit,
  onDuplicate,
  onToggleStatus,
}: WorkflowCardProps) {
  return (
    <div className="rounded-lg border border-border p-4 space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-medium">
            {workflow.name}
          </h3>

          {workflow.description && (
            <p className="mt-1 text-sm text-muted-foreground">
              {workflow.description}
            </p>
          )}
        </div>

        <WorkflowStatusBadge
          status={workflow.status}
        />
      </div>

      <WorkflowActions
        onEdit={onEdit}
        onDuplicate={onDuplicate}
        onToggleStatus={onToggleStatus}
      />
    </div>
  )
}
