"use client"

import {
  useWorkflowExecutions,
} from "../../../hooks/useWorkflowExecutions"

import {
  useExecutionSelection,
} from "../../../hooks/useExecutionSelection"

import {
  ExecutionStatusBadge,
} from "../status/ExecutionStatusBadge"

export function ExecutionList() {
  const {
    executions,
  } = useWorkflowExecutions()

  const {
    selectExecution,
  } = useExecutionSelection()

  if (!executions.length) {
    return (
      <div className="rounded-md border p-4 text-sm text-muted-foreground">
        No executions found.
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {executions.map((execution) => (
        <button
          key={execution.id}
          onClick={() =>
            selectExecution(execution)
          }
          className="w-full rounded-md border p-4 text-left space-y-2"
        >
          <div className="font-medium">
            {execution.workflowId}
          </div>

          <ExecutionStatusBadge
            status={execution.status}
          />

          <div className="text-xs text-muted-foreground">
            {execution.createdAt}
          </div>
        </button>
      ))}
    </div>
  )
}
