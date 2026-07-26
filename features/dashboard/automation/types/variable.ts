export type WorkflowVariableScope =
  | "workflow"
  | "execution"
  | "step"

export type WorkflowVariableType =
  | "string"
  | "number"
  | "boolean"
  | "object"
  | "array"
  | "date"

export interface WorkflowVariable {
  id: string

  name: string

  key: string

  type: WorkflowVariableType

  scope: WorkflowVariableScope

  value?: unknown

  defaultValue?: unknown

  description?: string

  metadata: Record<string, unknown>

  createdAt: string

  updatedAt: string
}

export interface WorkflowDataMapping {
  source: string

  target: string

  transformation?: string

  metadata: Record<string, unknown>
}
