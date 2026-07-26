export type AutomationEventSource =
  | "contacts"
  | "conversations"
  | "ai-agents"
  | "knowledge-base"
  | "ai-models"
  | "external"

export type AutomationEventType =
  | "contact.created"
  | "contact.updated"
  | "conversation.started"
  | "conversation.completed"
  | "message.received"
  | "agent.executed"
  | "document.processed"
  | "model.completed"
  | "webhook.received"

export interface AutomationEvent {
  id: string

  type: AutomationEventType

  source: AutomationEventSource

  workspaceId: string

  entityId?: string

  payload: Record<string, unknown>

  metadata: Record<string, unknown>

  occurredAt: string

  createdAt: string
}
