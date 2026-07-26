export type WorkflowExecutionStatus =
  | "queued"
  | "running"
  | "completed"
  | "failed"
  | "cancelled"
  | "retrying"

export interface WorkflowExecutionRetry {
  attempted: boolean

  attemptCount: number

  maxAttempts?: number

  lastError?: string

  nextRetryAt?: string
}

export interface WorkflowExecutionRecord {
  id: string

  workflowId: string

  workflowVersionId?: string

  workspaceId: string

  status: WorkflowExecutionStatus

  triggerId?: string

  contextId?: string

  retry: WorkflowExecutionRetry

  startedAt?: string

  completedAt?: string

  error?: string

  metadata: Record<string, unknown>

  createdAt: string
}
