export type OrganizationType =
  | "company"
  | "nonprofit"
  | "government"
  | "educational"
  | "partner"
  | "vendor"

export type OrganizationStatus =
  | "active"
  | "inactive"
  | "archived"

export interface OrganizationOwnership {
  ownerId: string
  teamId?: string
  workspaceId: string
}

export interface OrganizationMetadata {
  [key: string]: unknown
}

export interface Organization {
  id: string

  name: string
  legalName?: string
  displayName: string

  type: OrganizationType
  status: OrganizationStatus

  website?: string
  email?: string
  phone?: string

  tags: string[]

  ownership: OrganizationOwnership

  metadata: Record<string, unknown>

  createdAt: string
  updatedAt: string
}
