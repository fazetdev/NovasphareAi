import type { Workflow } from "../types"
import type { AutomationService } from "./automation-service"

const workflows: Workflow[] = []

export const automationMockService: AutomationService = {
  async getWorkflows() {
    return workflows
  },

  async getWorkflow() {
    return null
  },

  async createWorkflow(workflow) {
    workflows.push(workflow)

    return workflow
  },

  async updateWorkflow(workflow) {
    return workflow
  },
}
