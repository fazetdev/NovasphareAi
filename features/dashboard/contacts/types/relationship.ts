export type RelationshipEntityType =
  | "contact"
  | "organization"

export type RelationshipType =
  | "employee"
  | "manager"
  | "colleague"
  | "customer"
  | "supplier"
  | "partner"
  | "owner"
  | "referral"
  | "family"
  | "custom"

export type RelationshipStatus =
  | "active"
  | "inactive"
  | "pending"

export interface Relationship {
  id: string

  sourceEntityId: string
  sourceEntityType: RelationshipEntityType

  targetEntityId: string
  targetEntityType: RelationshipEntityType

  relationshipType: RelationshipType
  status: RelationshipStatus

  metadata: Record<string, unknown>

  createdAt: string
  updatedAt: string
}
