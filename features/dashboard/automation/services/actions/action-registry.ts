import type {
  WorkflowAction,
  WorkflowActionType,
} from "../../types"

export interface ActionDefinition {
  type: WorkflowActionType

  name: string

  description: string

  inputSchema: Record<string, unknown>

  outputSchema: Record<string, unknown>

  metadata: Record<string, unknown>
}

export interface ActionRegistry {
  getActions(): Promise<ActionDefinition[]>

  getAction(
    type: WorkflowActionType,
  ): Promise<ActionDefinition | undefined>

  validateAction(
    action: WorkflowAction,
  ): Promise<boolean>
}
