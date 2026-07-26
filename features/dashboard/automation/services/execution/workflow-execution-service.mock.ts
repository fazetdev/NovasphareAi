import type {
  WorkflowExecutionService,
} from "./workflow-execution-service"

import type {
  WorkflowExecutionRecord,
} from "../../types"

const executions: WorkflowExecutionRecord[] = []

export const workflowExecutionMockService: WorkflowExecutionService = {
  async startExecution(context) {
    const execution: WorkflowExecutionRecord = {
      id: crypto.randomUUID(),

      workflowId: context.workflowId,

      workflowVersionId:
        context.workflowVersionId,

      workspaceId:
        context.workspaceId,

      status: "running",

      contextId: context.id,

      retry: {
        attempted: false,
        attemptCount: 0,
      },

      startedAt:
        new Date().toISOString(),

      metadata: {},

      createdAt:
        new Date().toISOString(),
    }

    executions.push(execution)

    return execution
  },

  async getExecution(executionId) {
    return executions.find(
      (execution) =>
        execution.id === executionId,
    )
  },

  async cancelExecution(executionId) {
    const execution =
      executions.find(
        (item) =>
          item.id === executionId,
      )

    if (!execution) {
      throw new Error(
        "Execution not found.",
      )
    }

    execution.status = "cancelled"

    return execution
  },
}
