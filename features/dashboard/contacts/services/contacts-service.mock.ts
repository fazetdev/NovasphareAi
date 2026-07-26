import type { ContactsService } from "./contacts-service"

import type {
  ActivityEvent,
  Contact,
  CustomFieldDefinition,
  EntityPermission,
  Organization,
  Relationship,
  Segment,
} from "../types"

const contacts: Contact[] = []

const organizations: Organization[] = []

const relationships: Relationship[] = []

const activities: ActivityEvent[] = []

const segments: Segment[] = []

const customFields: CustomFieldDefinition[] = []

const permissions: EntityPermission[] = []

export const contactsMockService: ContactsService = {
  async getContacts() {
    return contacts
  },

  async getOrganizations() {
    return organizations
  },

  async getRelationships() {
    return relationships
  },

  async getActivities() {
    return activities
  },

  async getSegments() {
    return segments
  },

  async getCustomFields() {
    return customFields
  },

  async getPermissions() {
    return permissions
  },

  async getWorkspace() {
    return {
      contacts,
      organizations,
      relationships,
      activities,
      segments,
      customFields,
      permissions,
    }
  },
}
