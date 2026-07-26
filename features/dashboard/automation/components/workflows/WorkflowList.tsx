import type { Workflow } from "../../types"

import { WorkflowCard } from "./WorkflowCard"

type WorkflowListProps = {
  workflows: Workflow[]
  onEdit?: (workflow: Workflow) => void
  onDuplicate?: (workflow: Workflow) => void
  onToggleStatus?: (workflow: Workflow) => void
}

export function WorkflowList({
  workflows,
  onEdit,
  onDuplicate,
  onToggleStatus,
}: WorkflowListProps) {
  return (
    <div className="space-y-4">
      {workflows.map((workflow) => (
        <WorkflowCard
          key={workflow.id}
          workflow={workflow}
          onEdit={() => onEdit?.(workflow)}
          onDuplicate={() => onDuplicate?.(workflow)}
          onToggleStatus={() =>
            onToggleStatus?.(workflow)
          }
        />
      ))}
    </div>
  )
}
