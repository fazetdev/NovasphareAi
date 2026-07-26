"use client"

import { useEffect, useState } from "react"

import {
  automationCatalogService,
} from "../services"

import type {
  AutomationCatalogItem,
} from "../types"

export function useAutomationCatalog() {
  const [items, setItems] = useState<
    AutomationCatalogItem[]
  >([])

  useEffect(() => {
    automationCatalogService
      .getCatalog()
      .then(setItems)
  }, [])

  return {
    items,
  }
}
