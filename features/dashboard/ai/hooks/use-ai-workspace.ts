"use client"

import { useCallback, useEffect, useState } from "react"

import type {
  AIModel,
  AIProvider,
  AIInferenceConfiguration,
  PlaygroundSession,
} from "../types"

import { aiMockService } from "../services"

export function useAIWorkspace() {
  const [providers, setProviders] =
    useState<AIProvider[]>([])

  const [models, setModels] =
    useState<AIModel[]>([])

  const [configuration, setConfiguration] =
    useState<AIInferenceConfiguration | null>(null)

  const [playgroundSessions, setPlaygroundSessions] =
    useState<PlaygroundSession[]>([])

  const [isLoading, setIsLoading] =
    useState(true)

  const [error, setError] =
    useState<string | null>(null)

  const loadWorkspace = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)

      const [
        providerData,
        modelData,
        configurationData,
        playgroundData,
      ] = await Promise.all([
        aiMockService.getProviders(),
        aiMockService.getModels(),
        aiMockService.getWorkspaceConfiguration(),
        aiMockService.getPlaygroundSessions(),
      ])

      setProviders(providerData)
      setModels(modelData)
      setConfiguration(configurationData)
      setPlaygroundSessions(playgroundData)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to load AI workspace",
      )
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    void loadWorkspace()
  }, [loadWorkspace])

  return {
    providers,
    setProviders,

    models,
    setModels,

    configuration,
    setConfiguration,

    playgroundSessions,
    setPlaygroundSessions,

    reloadWorkspace: loadWorkspace,

    isLoading,
    error,
  }
}
