"use client"

import {
  useEffect,
  useState,
} from "react"

import type {
  WorkflowExecutionRecord,
} from "../types"

import {
  automationAnalyticsMockService,
} from "../services"

export function useAutomationAnalytics() {
  const [executions, setExecutions] =
    useState<WorkflowExecutionRecord[]>([])

  const [workflowCount, setWorkflowCount] =
    useState(0)

  useEffect(() => {
    async function loadAnalytics() {
      const data =
        await automationAnalyticsMockService
          .getAnalytics()

      setExecutions(
        data.executions,
      )

      setWorkflowCount(
        data.workflowCount,
      )
    }

    loadAnalytics()
  }, [])

  return {
    executions,
    workflowCount,
  }
}
