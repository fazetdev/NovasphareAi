"use client"

import { useEffect, useState } from "react"

import type { AIEnterpriseConfiguration } from "../types"

import { aiMockService } from "../services"

export function useAIEnterprise() {
  const [enterprise, setEnterprise] =
    useState<AIEnterpriseConfiguration | null>(null)

  const [isLoading, setIsLoading] =
    useState(true)

  const [error, setError] =
    useState<string | null>(null)

  useEffect(() => {
    async function loadEnterprise() {
      try {
        setIsLoading(true)

        const data =
          await aiMockService.getEnterpriseConfiguration()

        setEnterprise(data)
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to load enterprise configuration",
        )
      } finally {
        setIsLoading(false)
      }
    }

    loadEnterprise()
  }, [])

  return {
    enterprise,
    isLoading,
    error,
  }
}
