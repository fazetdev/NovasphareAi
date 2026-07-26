import type {
  WorkflowSimulator,
} from "./workflow-simulator"

export const workflowSimulatorMockService: WorkflowSimulator = {
  async simulate(workflow) {
    const now = new Date().toISOString()

    return {
      id: crypto.randomUUID(),

      workflowId: workflow.workflowId,

      status: "completed",

      steps: workflow.nodes.map((node) => ({
        nodeId: node.id,
        status: "completed",
        output: {},
        executedAt: now,
      })),

      startedAt: now,

      completedAt: now,
    }
  },
}
