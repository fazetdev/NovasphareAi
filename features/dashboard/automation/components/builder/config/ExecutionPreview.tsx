"use client"

import {
  useState,
} from "react"

import {
  workflowSimulatorMockService,
} from "../../../services"

export function ExecutionPreview() {
  const [status, setStatus] =
    useState<string>("")

  async function runPreview() {
    const result =
      await workflowSimulatorMockService.simulate(
        {
          workflowId: "preview",
          trigger: undefined,
          nodes: [],
          connections: [],
        } as never,
      )

    setStatus(result.status)
  }

  return (
    <div className="mt-4 space-y-2">
      <button
        onClick={runPreview}
        className="rounded-md border px-3 py-2 text-sm"
      >
        Run Preview
      </button>

      {status && (
        <p className="text-sm text-muted-foreground">
          Status: {status}
        </p>
      )}
    </div>
  )
}
