export interface WorkflowExecutionContext {
  id: string

  workflowId: string

  workflowVersionId?: string

  workspaceId: string

  triggerData: Record<string, unknown>

  variables: Record<string, unknown>

  stepOutputs: Record<string, unknown>

  metadata: Record<string, unknown>

  createdAt: string
  updatedAt: string
}
