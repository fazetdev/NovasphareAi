export type WorkflowConditionOperator =
  | "equals"
  | "not-equals"
  | "contains"
  | "starts-with"
  | "greater-than"
  | "less-than"
  | "exists"

export interface WorkflowCondition {
  id: string

  field: string

  operator: WorkflowConditionOperator

  value: unknown

  metadata: Record<string, unknown>

  createdAt: string
  updatedAt: string
}
