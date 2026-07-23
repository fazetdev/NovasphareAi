"use client"

import { useEffect, useState } from "react"

import type {
  AIModel,
  AIProvider,
  AIInferenceConfiguration,
} from "../types"

import { aiMockService } from "../services"

export function useAIWorkspace() {
  const [providers, setProviders] = useState<AIProvider[]>([])
  const [models, setModels] = useState<AIModel[]>([])
  const [configuration, setConfiguration] =
    useState<AIInferenceConfiguration | null>(null)

  const [isLoading, setIsLoading] =
    useState(true)

  const [error, setError] =
    useState<string | null>(null)

  useEffect(() => {
    async function loadWorkspace() {
      try {
        setIsLoading(true)

        const [
          providerData,
          modelData,
          configurationData,
        ] = await Promise.all([
          aiMockService.getProviders(),
          aiMockService.getModels(),
          aiMockService.getWorkspaceConfiguration(),
        ])

        setProviders(providerData)
        setModels(modelData)
        setConfiguration(configurationData)
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to load AI workspace"
        )
      } finally {
        setIsLoading(false)
      }
    }

    loadWorkspace()
  }, [])

  return {
    providers,
    models,
    configuration,
    setConfiguration,
    isLoading,
    error,
  }
}
