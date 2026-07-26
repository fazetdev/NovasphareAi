"use client"

import {
  ExecutionList,
} from "./list/ExecutionList"

import {
  ExecutionDetails,
} from "./details/ExecutionDetails"

import {
  useExecutionSelection,
} from "../../hooks/useExecutionSelection"

export function ExecutionWorkspace() {
  const {
    selectedExecution,
  } = useExecutionSelection()

  return (
    <div className="grid grid-cols-[1fr_360px] gap-4">
      <ExecutionList />

      <ExecutionDetails
        execution={selectedExecution}
      />
    </div>
  )
}
