"use client"

import {
  automationMockService,
} from "../services"

import type {
  Workflow,
} from "../types"

export function useWorkflowPersistence() {
  async function saveWorkflow(
    workflow: Workflow,
  ) {
    return automationMockService.createWorkflow(
      workflow,
    )
  }

  async function loadWorkflows() {
    return automationMockService.getWorkflows()
  }

  async function updateWorkflow(
    workflow: Workflow,
  ) {
    return automationMockService.updateWorkflow(
      workflow,
    )
  }

  return {
    saveWorkflow,
    loadWorkflows,
    updateWorkflow,
  }
}
