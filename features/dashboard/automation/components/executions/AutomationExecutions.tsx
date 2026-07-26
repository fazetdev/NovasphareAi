"use client"

import { ExecutionList } from "./list/ExecutionList"

export function AutomationExecutions() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">
        Workflow Executions
      </h2>

      <ExecutionList />
    </div>
  )
}
