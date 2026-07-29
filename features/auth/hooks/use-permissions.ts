import { useMemo } from "react"

import type { Permission, UserIdentity } from "../types"

export function usePermissions(user: UserIdentity | null) {
  const permissions = useMemo<Permission[]>(() => {
    return user?.membership.permissions ?? []
  }, [user])

  function hasPermission(resource: string, action: string): boolean {
    return permissions.some(
      (permission) =>
        (permission.resource === "*" || permission.resource === resource) &&
        (permission.action === "*" || permission.action === action)
    )
  }

  function hasRole(roleName: string): boolean {
    return (
      user?.membership.roles.some((role) => role.name === roleName) ?? false
    )
  }

  return {
    permissions,
    hasPermission,
    hasRole,
  }
}
