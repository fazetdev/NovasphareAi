export type CustomFieldEntityType =
  | "contact"
  | "organization"

export type CustomFieldType =
  | "text"
  | "textarea"
  | "number"
  | "boolean"
  | "date"
  | "datetime"
  | "email"
  | "phone"
  | "url"
  | "select"
  | "multi-select"

export interface CustomFieldOption {
  label: string
  value: string
}

export interface CustomFieldDefinition {
  id: string

  entityType: CustomFieldEntityType

  key: string
  label: string
  description?: string

  type: CustomFieldType

  required: boolean
  searchable: boolean
  system: boolean

  options?: CustomFieldOption[]

  defaultValue?: unknown

  metadata: Record<string, unknown>

  createdAt: string
  updatedAt: string
}
