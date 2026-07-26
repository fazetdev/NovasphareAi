"use client"

import { useCallback, useEffect, useState } from "react"

import type {
  ActivityEvent,
  Contact,
  CustomFieldDefinition,
  EntityPermission,
  Organization,
  Relationship,
  Segment,
} from "../types"

import { contactsMockService } from "../services"

export function useContactsWorkspace() {
  const [contacts, setContacts] =
    useState<Contact[]>([])

  const [organizations, setOrganizations] =
    useState<Organization[]>([])

  const [relationships, setRelationships] =
    useState<Relationship[]>([])

  const [activities, setActivities] =
    useState<ActivityEvent[]>([])

  const [segments, setSegments] =
    useState<Segment[]>([])

  const [customFields, setCustomFields] =
    useState<CustomFieldDefinition[]>([])

  const [permissions, setPermissions] =
    useState<EntityPermission[]>([])

  const [isLoading, setIsLoading] =
    useState(true)

  const [error, setError] =
    useState<string | null>(null)

  const loadWorkspace = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)

      const workspace =
        await contactsMockService.getWorkspace()

      setContacts(workspace.contacts)
      setOrganizations(workspace.organizations)
      setRelationships(workspace.relationships)
      setActivities(workspace.activities)
      setSegments(workspace.segments)
      setCustomFields(workspace.customFields)
      setPermissions(workspace.permissions)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to load contacts workspace",
      )
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    void loadWorkspace()
  }, [loadWorkspace])

  return {
    contacts,
    setContacts,

    organizations,
    setOrganizations,

    relationships,
    setRelationships,

    activities,
    setActivities,

    segments,
    setSegments,

    customFields,
    setCustomFields,

    permissions,
    setPermissions,

    reloadWorkspace: loadWorkspace,

    isLoading,
    error,
  }
}
