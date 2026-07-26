export type SegmentEntityType =
  | "contact"
  | "organization"

export type SegmentType =
  | "static"
  | "dynamic"

export interface SegmentRule {
  field: string
  operator: string
  value: unknown
}

export interface Segment {
  id: string

  name: string
  description?: string

  entityType: SegmentEntityType
  type: SegmentType

  rules: SegmentRule[]

  color?: string

  metadata: Record<string, unknown>

  createdAt: string
  updatedAt: string
}
