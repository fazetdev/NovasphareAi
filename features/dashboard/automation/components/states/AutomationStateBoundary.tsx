"use client"

import type { PropsWithChildren } from "react"

import { AutomationEmpty } from "./AutomationEmpty"
import { AutomationError } from "./AutomationError"
import { AutomationLoading } from "./AutomationLoading"

interface AutomationStateBoundaryProps
  extends PropsWithChildren {
  loading?: boolean
  error?: string | null
  empty?: boolean
  emptyTitle?: string
  emptyDescription?: string
}

export function AutomationStateBoundary({
  loading = false,
  error,
  empty = false,
  emptyTitle = "Nothing found",
  emptyDescription = "No data available.",
  children,
}: AutomationStateBoundaryProps) {
  if (loading) {
    return <AutomationLoading />
  }

  if (error) {
    return <AutomationError message={error} />
  }

  if (empty) {
    return (
      <AutomationEmpty
        title={emptyTitle}
        description={emptyDescription}
      />
    )
  }

  return <>{children}</>
}
