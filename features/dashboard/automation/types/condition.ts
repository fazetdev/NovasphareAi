export type ConditionOperator =
  | "equals"
  | "not_equals"
  | "contains"
  | "not_contains"
  | "greater_than"
  | "less_than"
  | "exists"
  | "not_exists"
  | "in"
  | "not_in"

export type ConditionGroupOperator =
  | "and"
  | "or"

export interface WorkflowConditionRule {
  id: string

  field: string

  operator: ConditionOperator

  value: unknown

  metadata: Record<string, unknown>
}

export interface WorkflowConditionGroup {
  id: string

  operator: ConditionGroupOperator

  rules: WorkflowConditionRule[]

  metadata: Record<string, unknown>
}

export interface WorkflowCondition {
  id: string

  name: string

  groups: WorkflowConditionGroup[]

  metadata: Record<string, unknown>

  createdAt: string
  updatedAt: string
}
