"use client"

import {
  useState,
} from "react"

import type {
  WorkflowExecutionRecord,
} from "../types"

export function useExecutionSelection() {
  const [selectedExecution, setSelectedExecution] =
    useState<WorkflowExecutionRecord | null>(null)

  function selectExecution(
    execution: WorkflowExecutionRecord,
  ) {
    setSelectedExecution(execution)
  }

  function clearSelection() {
    setSelectedExecution(null)
  }

  return {
    selectedExecution,
    selectExecution,
    clearSelection,
  }
}
