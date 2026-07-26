import type {
  WorkflowStep,
  WorkflowTrigger,
  WorkflowVariable,
} from "./builder"

export type WorkflowStatus =
  | "draft"
  | "active"
  | "paused"
  | "archived"
  | "failed"

export interface WorkflowOwnership {
  workspaceId: string
  ownerId?: string
  teamId?: string
}

export interface WorkflowExecutionSettings {
  allowRetry: boolean
  maxRetries?: number

  timeoutSeconds?: number

  continueOnFailure?: boolean

  metadata: Record<string, unknown>
}

export interface WorkflowVersionReference {
  versionId: string
  versionNumber: number

  createdAt: string
  createdBy?: string
}

export interface Workflow {
  id: string

  name: string
  description?: string

  status: WorkflowStatus

  ownership: WorkflowOwnership

  activeVersion?: WorkflowVersionReference

  trigger?: WorkflowTrigger

  steps: WorkflowStep[]

  variables: WorkflowVariable[]

  executionSettings: WorkflowExecutionSettings

  tags: string[]

  metadata: Record<string, unknown>

  createdAt: string
  updatedAt: string
}
