import type { WorkflowAction } from "./action"
import type { WorkflowCondition } from "./condition"

export type WorkflowStepType =
  | "action"
  | "condition"
  | "approval"

export interface WorkflowStep {
  id: string

  type: WorkflowStepType

  name: string

  order: number

  action?: WorkflowAction

  conditions?: WorkflowCondition[]

  nextStepIds: string[]

  metadata: Record<string, unknown>

  createdAt: string
  updatedAt: string
}
