"use client"

import { useEffect, useState } from "react"

import { aiMockService } from "../services"

import type {
  PlaygroundSession,
} from "../types"

export function useAIPlayground() {
  const [sessions, setSessions] =
    useState<PlaygroundSession[]>([])

  const [selectedSessionId, setSelectedSessionId] =
    useState<string | null>(null)

  const [isLoading, setIsLoading] =
    useState(true)

  const [isExecuting, setIsExecuting] =
    useState(false)

  const [error, setError] =
    useState<string | null>(null)

  useEffect(() => {
    async function loadSessions() {
      try {
        setIsLoading(true)

        const data =
          await aiMockService.getPlaygroundSessions()

        setSessions(data)

        if (data.length > 0) {
          setSelectedSessionId(data[0].id)
        }
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to load playground sessions"
        )
      } finally {
        setIsLoading(false)
      }
    }

    void loadSessions()
  }, [])

  async function createSession(
    session: PlaygroundSession,
  ) {
    setIsExecuting(true)

    try {
      const created =
        await aiMockService.createPlaygroundSession(
          session,
        )

      setSessions((current) => [
        created,
        ...current,
      ])

      setSelectedSessionId(created.id)

      return created
    } finally {
      setIsExecuting(false)
    }
  }

  const selectedSession =
    sessions.find(
      (session) => session.id === selectedSessionId,
    ) ?? null

  return {
    sessions,
    selectedSession,
    selectedSessionId,
    setSelectedSessionId,
    isLoading,
    isExecuting,
    error,
    createSession,
  }
}
