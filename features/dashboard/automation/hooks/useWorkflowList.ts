"use client"

import {
  useEffect,
  useState,
} from "react"

import {
  automationMockService,
} from "../services"

import type {
  Workflow,
} from "../types"

export function useWorkflowList() {
  const [workflows, setWorkflows] =
    useState<Workflow[]>([])

  useEffect(() => {
    automationMockService
      .getWorkflows()
      .then(setWorkflows)
  }, [])

  return {
    workflows,
  }
}
