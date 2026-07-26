export type ContactType =
  | "individual"
  | "lead"
  | "customer"
  | "prospect"
  | "partner"

export type ContactStatus =
  | "active"
  | "inactive"
  | "archived"
  | "blocked"

export type ContactLifecycleStage =
  | "new"
  | "qualified"
  | "engaged"
  | "customer"
  | "retained"
  | "inactive"

export interface ContactOwnership {
  ownerId: string
  teamId?: string
  workspaceId: string
}

export interface ContactMetadata {
  [key: string]: unknown
}

export interface Contact {
  id: string

  firstName: string
  lastName: string
  displayName: string

  email?: string
  phone?: string

  type: ContactType
  status: ContactStatus
  lifecycleStage: ContactLifecycleStage

  tags: string[]

  ownership: ContactOwnership

  metadata: Record<string, unknown>

  createdAt: string
  updatedAt: string
}
