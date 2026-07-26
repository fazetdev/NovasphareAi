export type WorkflowActionType =
  | "send.message"
  | "run.ai.agent"
  | "search.knowledge.base"
  | "update.contact"
  | "add.tag"
  | "create.task"
  | "notify.team"
  | "call.external.service"

export interface ActionInputContract {
  schema: Record<string, unknown>

  requiredFields: string[]

  metadata: Record<string, unknown>
}

export interface ActionOutputContract {
  schema: Record<string, unknown>

  metadata: Record<string, unknown>
}

export interface ActionConfiguration {
  parameters: Record<string, unknown>

  inputMapping?: Record<string, unknown>

  outputMapping?: Record<string, unknown>

  metadata: Record<string, unknown>
}

export interface WorkflowAction {
  id: string

  type: WorkflowActionType

  name: string
  description?: string

  configuration: ActionConfiguration

  input: ActionInputContract

  output: ActionOutputContract

  enabled: boolean

  metadata: Record<string, unknown>

  createdAt: string
  updatedAt: string
}
