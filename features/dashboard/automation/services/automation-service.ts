import type { Workflow } from "../types"

export interface AutomationServiceResponse<T> {
  data: T
  success: boolean
  error?: string

  metadata?: {
    timestamp: string
    requestId?: string
  }
}

export interface AutomationService {
  getWorkflows(): Promise<Workflow[]>

  getWorkflow(id: string): Promise<Workflow | null>

  createWorkflow(
    workflow: Workflow,
  ): Promise<Workflow>

  updateWorkflow(
    workflow: Workflow,
  ): Promise<Workflow>
}

export const automationService: AutomationService = {
  async getWorkflows() {
    return []
  },

  async getWorkflow() {
    return null
  },

  async createWorkflow(workflow) {
    return workflow
  },

  async updateWorkflow(workflow) {
    return workflow
  },
}
