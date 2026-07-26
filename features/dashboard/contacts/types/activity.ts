export type ActivityEntityType =
  | "contact"
  | "organization"

export type ActivityType =
  | "conversation"
  | "note"
  | "task"
  | "reminder"
  | "automation"
  | "ai-summary"
  | "ai-insight"
  | "status-change"
  | "relationship"
  | "custom"

export interface ActivityActor {
  id: string
  type: "user" | "agent" | "system"
  name: string
}

export interface ActivityEvent {
  id: string

  entityId: string
  entityType: ActivityEntityType

  type: ActivityType
  title: string
  description?: string

  actor: ActivityActor

  metadata: Record<string, unknown>

  occurredAt: string
  createdAt: string
}
