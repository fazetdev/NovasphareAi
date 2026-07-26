"use client"

import { useEffect, useState } from "react"

import type { Workflow } from "../types"
import { automationMockService } from "../services"

export function useAutomation() {
  const [workflows, setWorkflows] = useState<Workflow[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadWorkflows() {
      try {
        setIsLoading(true)

        const data =
          await automationMockService.getWorkflows()

        setWorkflows(data)
      } catch {
        setError("Failed to load workflows.")
      } finally {
        setIsLoading(false)
      }
    }

    loadWorkflows()
  }, [])

  async function createWorkflow() {
    const workflow: Workflow = {
      id: crypto.randomUUID(),
      name: "New Workflow",
      description: "New automation workflow",
      status: "draft",

      ownership: {
        workspaceId: "workspace-main",
      },

      trigger: undefined,

      steps: [],

      variables: [],

      executionSettings: {
        allowRetry: true,
        maxRetries: 3,
        metadata: {},
      },

      tags: [],

      metadata: {},

      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    const created =
      await automationMockService.createWorkflow(workflow)

    setWorkflows((current) => [
      ...current,
      created,
    ])

    return created
  }

  async function updateWorkflow(
    workflow: Workflow,
  ) {
    const updated =
      await automationMockService.updateWorkflow(workflow)

    setWorkflows((current) =>
      current.map((item) =>
        item.id === updated.id
          ? updated
          : item,
      ),
    )

    return updated
  }

  async function duplicateWorkflow(
    workflow: Workflow,
  ) {
    const duplicate: Workflow = {
      ...workflow,
      id: crypto.randomUUID(),
      name: `${workflow.name} Copy`,
      status: "draft",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    const created =
      await automationMockService.createWorkflow(duplicate)

    setWorkflows((current) => [
      ...current,
      created,
    ])

    return created
  }

  async function toggleWorkflowStatus(
    workflow: Workflow,
  ) {
    const updated: Workflow = {
      ...workflow,
      status: "active",
      updatedAt: new Date().toISOString(),
    }

    return updateWorkflow(updated)
  }

  return {
    workflows,
    isLoading,
    error,
    createWorkflow,
    updateWorkflow,
    duplicateWorkflow,
    toggleWorkflowStatus,
  }
}
