import type {
  WorkflowExecutionContext,
  WorkflowExecutionRecord,
} from "../../types"

export interface WorkflowExecutionService {
  startExecution(
    context: WorkflowExecutionContext,
  ): Promise<WorkflowExecutionRecord>

  getExecution(
    executionId: string,
  ): Promise<WorkflowExecutionRecord | undefined>

  cancelExecution(
    executionId: string,
  ): Promise<WorkflowExecutionRecord>
}
