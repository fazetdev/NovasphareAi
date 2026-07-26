"use client"

import {
  useState,
} from "react"

import type {
  Workflow,
} from "../types"

export function useWorkflowDraft() {
  const [draft, setDraft] =
    useState<Partial<Workflow>>({
      name: "Untitled Workflow",
      status: "draft",
      tags: [],
      metadata: {},
    })

  function updateDraft(
    values: Partial<Workflow>,
  ) {
    setDraft((current) => ({
      ...current,
      ...values,
      updatedAt:
        new Date().toISOString(),
    }))
  }

  function resetDraft() {
    setDraft({
      name: "Untitled Workflow",
      status: "draft",
      tags: [],
      metadata: {},
    })
  }

  return {
    draft,
    updateDraft,
    resetDraft,
  }
}
