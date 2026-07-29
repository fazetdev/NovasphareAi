export type UserStatus =
  | "pending"
  | "active"
  | "suspended"
  | "locked"
  | "disabled"
  | "archived"

export interface Organization {
  id: string
  name: string
}

export interface Department {
  id: string
  name: string
  organizationId: string
}

export interface Team {
  id: string
  name: string
  departmentId: string
}

export interface Role {
  id: string
  name: string
  description?: string
}

export interface Permission {
  id: string
  resource: string
  action: string
}

export interface OrganizationMembership {
  organizationId: string
  departments: Department[]
  teams: Team[]
  roles: Role[]
  permissions: Permission[]
}

export interface UserIdentity {
  id: string
  email: string
  name: string
  avatarUrl?: string
  language?: string
  locale?: string
  timezone?: string
  status: UserStatus
  membership: OrganizationMembership
}
