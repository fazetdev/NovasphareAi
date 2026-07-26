export type WorkflowVariableSource =
  | "trigger"
  | "step-output"
  | "system"
  | "manual"

export interface WorkflowVariable {
  id: string

  name: string

  source: WorkflowVariableSource

  key: string

  value?: unknown

  dataType:
    | "string"
    | "number"
    | "boolean"
    | "object"
    | "array"

  metadata: Record<string, unknown>

  createdAt: string
  updatedAt: string
}
