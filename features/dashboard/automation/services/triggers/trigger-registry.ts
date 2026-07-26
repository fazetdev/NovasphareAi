import type {
  WorkflowTrigger,
  WorkflowTriggerType,
} from "../../types"

export interface TriggerDefinition {
  type: WorkflowTriggerType

  name: string

  description: string

  schema: Record<string, unknown>

  metadata: Record<string, unknown>
}

export interface TriggerRegistry {
  getTriggers(): Promise<TriggerDefinition[]>

  getTrigger(
    type: WorkflowTriggerType,
  ): Promise<TriggerDefinition | undefined>

  validateTrigger(
    trigger: WorkflowTrigger,
  ): Promise<boolean>
}
