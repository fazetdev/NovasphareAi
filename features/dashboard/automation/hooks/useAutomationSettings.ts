"use client"

import {
  useEffect,
  useState,
} from "react"

import {
  automationSettingsMockService,
} from "../services"

export function useAutomationSettings() {
  const [settings, setSettings] =
    useState<Record<string, unknown> | null>(null)

  useEffect(() => {
    async function loadSettings() {
      const data =
        await automationSettingsMockService.getSettings()

      setSettings(data)
    }

    loadSettings()
  }, [])

  async function updateSettings(
    values: Record<string, unknown>,
  ) {
    const updated =
      await automationSettingsMockService.updateSettings(
        values,
      )

    setSettings(updated)
  }

  return {
    settings,
    updateSettings,
  }
}
