"use client"

import { useEffect, useState } from "react"

import type { AIAnalytics } from "../types"

import { aiMockService } from "../services"

export function useAIAnalytics() {
  const [analytics, setAnalytics] =
    useState<AIAnalytics | null>(null)

  const [isLoading, setIsLoading] =
    useState(true)

  const [error, setError] =
    useState<string | null>(null)

  useEffect(() => {
    async function loadAnalytics() {
      try {
        setIsLoading(true)

        const data =
          await aiMockService.getAnalytics()

        setAnalytics(data)
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to load analytics"
        )
      } finally {
        setIsLoading(false)
      }
    }

    loadAnalytics()
  }, [])

  return {
    analytics,
    isLoading,
    error,
  }
}
