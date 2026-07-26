export type ContactRole =
  | "owner"
  | "editor"
  | "viewer"

export type ContactPermission =
  | "read"
  | "create"
  | "update"
  | "delete"
  | "assign"
  | "export"
  | "manage"

export interface EntityOwnership {
  workspaceId: string
  ownerId: string
  teamId?: string
}

export interface EntityPermission {
  principalId: string
  principalType: "user" | "team" | "role"

  role: ContactRole
  permissions: ContactPermission[]

  grantedAt: string
  grantedBy: string
}
