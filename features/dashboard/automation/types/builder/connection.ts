export type WorkflowConnectionType =
  | "next"
  | "success"
  | "failure"
  | "conditional"

export interface WorkflowConnection {
  id: string

  sourceNodeId: string

  targetNodeId: string

  type: WorkflowConnectionType

  conditionId?: string

  metadata: Record<string, unknown>

  createdAt: string
  updatedAt: string
}
