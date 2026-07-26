import {
  automationCatalogService,
} from "../catalog"

import {
  workflowExecutionMockService,
} from "../execution"

import {
  workflowValidatorMockService,
} from "../validation"

import type {
  Workflow,
} from "../../types"

const workflows: Workflow[] = []

export const automationService = {
  catalog:
    automationCatalogService,

  execution:
    workflowExecutionMockService,

  validation:
    workflowValidatorMockService,

  async getWorkflows() {
    return workflows
  },

  async createWorkflow(
    workflow: Workflow,
  ) {
    workflows.push(workflow)

    return workflow
  },

  async updateWorkflow(
    workflow: Workflow,
  ) {
    const index =
      workflows.findIndex(
        (item) => item.id === workflow.id,
      )

    if (index === -1) {
      throw new Error(
        "Workflow not found.",
      )
    }

    workflows[index] = workflow

    return workflow
  },
}
