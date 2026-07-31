"use client"

import { ReactNode } from "react"

import { EmptyState } from "@/components/ui/EmptyState"
import { useTranslations } from "@/lib/i18n/hooks"

import { AutomationError } from "./AutomationError"
import { AutomationLoading } from "./AutomationLoading"

type AutomationStateBoundaryProps = {
  loading?: boolean
  error?: boolean
  errorMessage?: string
  isEmpty?: boolean
  children: ReactNode
  emptyTitle?: string
  emptyDescription?: string
}

export function AutomationStateBoundary({
  loading = false,
  error = false,
  errorMessage,
  isEmpty = false,
  children,
  emptyTitle,
  emptyDescription,
}: AutomationStateBoundaryProps) {
  const t = useTranslations()

  if (loading) {
    return <AutomationLoading />
  }

  if (error) {
    return (
      <AutomationError
        message={errorMessage ?? t.common.emptyDescription}
      />
    )
  }

  if (isEmpty) {
    return (
      <EmptyState
        title={emptyTitle ?? t.common.emptyTitle}
        description={
          emptyDescription ??
          t.common.emptyDescription
        }
      />
    )
  }

  return <>{children}</>
}
