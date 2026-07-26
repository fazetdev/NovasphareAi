export type WorkflowActionType =
  | "send.message"
  | "run.ai-agent"
  | "search.knowledge-base"
  | "update.contact"
  | "add.tag"
  | "create.task"
  | "notify.team"
  | "external.request"

export interface WorkflowAction {
  id: string

  type: WorkflowActionType

  name: string
  description?: string

  inputMapping: Record<string, unknown>

  outputMapping?: Record<string, unknown>

  configuration: Record<string, unknown>

  metadata: Record<string, unknown>

  createdAt: string
  updatedAt: string
}
