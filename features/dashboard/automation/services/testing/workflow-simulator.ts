import type {
  WorkflowBuilderDefinition,
} from "../../types"

export type WorkflowSimulationStatus =
  | "pending"
  | "running"
  | "completed"
  | "failed"

export interface WorkflowSimulationStepResult {
  nodeId: string

  status: WorkflowSimulationStatus

  output?: Record<string, unknown>

  error?: string

  executedAt: string
}

export interface WorkflowSimulationResult {
  id: string

  workflowId: string

  status: WorkflowSimulationStatus

  steps: WorkflowSimulationStepResult[]

  startedAt: string

  completedAt?: string
}

export interface WorkflowSimulator {
  simulate(
    workflow: WorkflowBuilderDefinition,
    input?: Record<string, unknown>,
  ): Promise<WorkflowSimulationResult>
}
