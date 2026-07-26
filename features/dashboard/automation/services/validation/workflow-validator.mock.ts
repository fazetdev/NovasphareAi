import type {
  WorkflowValidator,
} from "./workflow-validator"

export const workflowValidatorMockService: WorkflowValidator = {
  async validate(workflow) {
    const issues = []

    if (!workflow.trigger) {
      issues.push({
        code: "missing-trigger",
        message: "Workflow requires a trigger.",
        severity: "error" as const,
      })
    }

    if (!workflow.nodes.length) {
      issues.push({
        code: "missing-nodes",
        message: "Workflow requires at least one node.",
        severity: "warning" as const,
      })
    }

    return {
      valid: !issues.some(
        (issue) => issue.severity === "error",
      ),
      issues,
    }
  },
}
