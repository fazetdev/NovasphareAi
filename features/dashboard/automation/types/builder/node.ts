export type WorkflowNodeType =
  | "trigger"
  | "action"
  | "condition"
  | "approval"

export interface WorkflowNodePosition {
  x: number
  y: number
}

export interface WorkflowNode {
  id: string

  type: WorkflowNodeType

  label: string

  position: WorkflowNodePosition

  data: {
    referenceId?: string
    configuration?: Record<string, unknown>
  }

  metadata: Record<string, unknown>

  createdAt: string
  updatedAt: string
}
