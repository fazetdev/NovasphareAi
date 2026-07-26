import type {
  WorkflowBuilderDefinition,
} from "../../types"

export type WorkflowValidationSeverity =
  | "error"
  | "warning"

export interface WorkflowValidationIssue {
  code: string

  message: string

  severity: WorkflowValidationSeverity

  path?: string
}

export interface WorkflowValidationResult {
  valid: boolean

  issues: WorkflowValidationIssue[]
}

export interface WorkflowValidator {
  validate(
    workflow: WorkflowBuilderDefinition,
  ): Promise<WorkflowValidationResult>
}
