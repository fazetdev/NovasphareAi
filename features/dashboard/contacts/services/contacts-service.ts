import type {
  ActivityEvent,
  Contact,
  CustomFieldDefinition,
  EntityPermission,
  Organization,
  Relationship,
  Segment,
} from "../types"

export interface ContactsServiceResponse<T> {
  data: T
  success: boolean
  error?: string

  metadata?: {
    timestamp: string
    requestId?: string
  }
}

export interface ContactsWorkspace {
  contacts: Contact[]
  organizations: Organization[]
  relationships: Relationship[]
  activities: ActivityEvent[]
  segments: Segment[]
  customFields: CustomFieldDefinition[]
  permissions: EntityPermission[]
}

export interface ContactsService {
  getContacts(): Promise<Contact[]>

  getOrganizations(): Promise<Organization[]>

  getRelationships(): Promise<Relationship[]>

  getActivities(): Promise<ActivityEvent[]>

  getSegments(): Promise<Segment[]>

  getCustomFields(): Promise<CustomFieldDefinition[]>

  getPermissions(): Promise<EntityPermission[]>

  getWorkspace(): Promise<ContactsWorkspace>
}

export const contactsService = {
  async getWorkspace(): Promise<
    ContactsServiceResponse<unknown>
  > {
    return {
      data: null,
      success: true,
      metadata: {
        timestamp: new Date().toISOString(),
      },
    }
  },
}
