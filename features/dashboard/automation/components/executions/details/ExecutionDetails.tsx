"use client"

import type {
  WorkflowExecutionRecord,
} from "../../../types"

import {
  ExecutionLogs,
} from "./ExecutionLogs"

import {
  ExecutionActions,
} from "./ExecutionActions"

export function ExecutionDetails({
  execution,
}: {
  execution: WorkflowExecutionRecord | null
}) {
  if (!execution) {
    return (
      <div className="text-sm text-muted-foreground">
        Select an execution to view details.
      </div>
    )
  }

  return (
    <div className="space-y-4 rounded-md border p-4">
      <h3 className="font-medium">
        Execution Details
      </h3>

      <div className="text-sm">
        Workflow: {execution.workflowId}
      </div>

      <div className="text-sm">
        Status: {execution.status}
      </div>

      <ExecutionActions
        execution={execution}
        onRetry={() => {}}
        onCancel={() => {}}
      />

      <ExecutionLogs
        logs={
          Array.isArray(execution.metadata.logs)
            ? execution.metadata.logs as string[]
            : []
        }
      />
    </div>
  )
}
