export type WorkflowTriggerType =
  | "contact.created"
  | "contact.updated"
  | "message.received"
  | "conversation.completed"
  | "document.processed"
  | "agent.event"
  | "scheduled"
  | "webhook"

export interface TriggerConfiguration {
  eventName?: string

  schedule?: {
    expression: string
    timezone?: string
  }

  webhook?: {
    endpointId?: string
    method?: "GET" | "POST" | "PUT" | "DELETE"
  }

  filters?: Record<string, unknown>

  metadata: Record<string, unknown>
}

export interface WorkflowTrigger {
  id: string

  type: WorkflowTriggerType

  name: string
  description?: string

  configuration: TriggerConfiguration

  enabled: boolean

  metadata: Record<string, unknown>

  createdAt: string
  updatedAt: string
}
