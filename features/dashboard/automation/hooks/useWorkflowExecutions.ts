"use client"

import {
  useEffect,
  useState,
} from "react"

import {
  workflowExecutionMockService,
} from "../services"

import type {
  WorkflowExecutionRecord,
} from "../types"

export function useWorkflowExecutions() {
  const [executions, setExecutions] =
    useState<WorkflowExecutionRecord[]>([])

  useEffect(() => {
    setExecutions([])
  }, [])

  async function getExecution(
    id: string,
  ) {
    return workflowExecutionMockService.getExecution(
      id,
    )
  }

  return {
    executions,
    getExecution,
  }
}
