"use client"

import { useState } from "react"

import {
  workflowValidatorMockService,
} from "../services"

export function useWorkflowValidation() {
  const [issues, setIssues] = useState<
    {
      message: string
      severity: "error" | "warning"
    }[]
  >([])

  async function validate(
    workflow: unknown,
  ) {
    const result =
      await workflowValidatorMockService.validate(
        workflow as never,
      )

    setIssues(result.issues)

    return result
  }

  return {
    issues,
    validate,
  }
}
