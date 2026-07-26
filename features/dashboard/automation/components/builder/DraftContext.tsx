"use client"

import {
  createContext,
  useContext,
  ReactNode,
} from "react"

import {
  useWorkflowDraft,
} from "../../hooks/useWorkflowDraft"

const DraftContext =
  createContext<
    ReturnType<typeof useWorkflowDraft> | null
  >(null)

export function DraftProvider({
  children,
}: {
  children: ReactNode
}) {
  const value =
    useWorkflowDraft()

  return (
    <DraftContext.Provider value={value}>
      {children}
    </DraftContext.Provider>
  )
}

export function useDraftContext() {
  const context =
    useContext(DraftContext)

  if (!context) {
    throw new Error(
      "useDraftContext must be used inside DraftProvider",
    )
  }

  return context
}
