export type WorkflowTriggerType =
  | "contact.created"
  | "contact.updated"
  | "message.received"
  | "conversation.completed"
  | "document.processed"
  | "agent.event"
  | "schedule"
  | "webhook"

export interface WorkflowTrigger {
  id: string

  type: WorkflowTriggerType

  name: string
  description?: string

  configuration: Record<string, unknown>

  enabled: boolean

  metadata: Record<string, unknown>

  createdAt: string
  updatedAt: string
}
