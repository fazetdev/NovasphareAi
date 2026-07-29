"use client"

import { useEffect, useState } from "react"

import type { DeviceSession } from "../types"

export function useSession() {
  const [sessions, setSessions] = useState<DeviceSession[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  async function refreshSessions() {
    setLoading(true)
    setLoading(false)
  }

  async function revokeSession(_sessionId: string) {
    return Promise.resolve()
  }

  async function revokeAllSessions() {
    return Promise.resolve()
  }

  async function trustDevice(_deviceId: string) {
    return Promise.resolve()
  }

  async function removeTrustedDevice(_deviceId: string) {
    return Promise.resolve()
  }

  return {
    sessions,
    loading,
    refreshSessions,
    revokeSession,
    revokeAllSessions,
    trustDevice,
    removeTrustedDevice,
    setSessions,
  }
}
