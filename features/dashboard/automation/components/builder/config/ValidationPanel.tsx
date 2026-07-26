"use client"

import {
  useWorkflowValidation,
} from "../../../hooks/useWorkflowValidation"

export function ValidationPanel() {
  const {
    issues,
  } = useWorkflowValidation()

  if (!issues.length) {
    return null
  }

  return (
    <div className="mt-4 space-y-2">
      {issues.map((issue, index) => (
        <div
          key={index}
          className="rounded-md border p-2 text-sm"
        >
          {issue.message}
        </div>
      ))}
    </div>
  )
}
