"use client"

import { useState } from "react"

import type { AIInferenceConfiguration } from "../types"

import { aiMockService } from "../services"

export function useAIConfiguration(
  initialConfiguration: AIInferenceConfiguration | null,
) {
  const [configuration, setConfiguration] =
    useState(initialConfiguration)

  const [isSaving, setIsSaving] =
    useState(false)

  const [error, setError] =
    useState<string | null>(null)

  async function saveConfiguration() {
    if (!configuration) return

    try {
      setIsSaving(true)
      setError(null)

      const updated =
        await aiMockService.saveWorkspaceConfiguration(
          configuration,
        )

      setConfiguration(updated)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to save configuration",
      )
    } finally {
      setIsSaving(false)
    }
  }

  return {
    configuration,
    setConfiguration,
    saveConfiguration,
    isSaving,
    error,
  }
}
