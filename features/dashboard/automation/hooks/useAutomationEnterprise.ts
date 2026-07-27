"use client"

import {
  useEffect,
  useState,
} from "react"

import {
  automationEnterpriseMockService,
} from "../services"

export function useAutomationEnterprise() {
  const [data, setData] =
    useState<Record<string, unknown> | null>(null)

  useEffect(() => {
    async function load() {
      const result =
        await automationEnterpriseMockService
          .getEnterpriseFeatures()

      setData(result)
    }

    load()
  }, [])

  async function refresh() {
    const result =
      await automationEnterpriseMockService
        .refreshEnterpriseFeatures()

    setData(result)
  }

  return {
    data,
    refresh,
  }
}
