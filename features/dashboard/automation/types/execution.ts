export type WorkflowExecutionStatus =
  | "queued"
  | "running"
  | "completed"
  | "failed"
  | "cancelled"
  | "paused"

export type WorkflowStepExecutionStatus =
  | "pending"
  | "running"
  | "completed"
  | "failed"
  | "skipped"

export interface WorkflowExecutionError {
  code?: string

  message: string

  details?: Record<string, unknown>

  occurredAt: string
}

export interface WorkflowStepExecution {
  id: string

  stepId: string

  status: WorkflowStepExecutionStatus

  input?: Record<string, unknown>

  output?: Record<string, unknown>

  error?: WorkflowExecutionError

  startedAt?: string

  completedAt?: string

  metadata: Record<string, unknown>
}

export interface WorkflowExecutionContext {
  variables: Record<string, unknown>

  input: Record<string, unknown>

  metadata: Record<string, unknown>
}

export interface WorkflowExecution {
  id: string

  workflowId: string

  workflowVersionId: string

  status: WorkflowExecutionStatus

  context: WorkflowExecutionContext

  steps: WorkflowStepExecution[]

  retryCount: number

  error?: WorkflowExecutionError

  startedAt: string

  completedAt?: string

  createdAt: string

  metadata: Record<string, unknown>
}
