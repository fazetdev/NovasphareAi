"use client"

import { useState } from "react"

import type {
  AutomationCatalogItem,
} from "../types"

export function useAutomationBuilder() {
  const [selectedNode, setSelectedNode] =
    useState<AutomationCatalogItem | null>(null)

  function selectNode(
    node: AutomationCatalogItem,
  ) {
    setSelectedNode(node)
  }

  function clearSelection() {
    setSelectedNode(null)
  }

  return {
    selectedNode,
    selectNode,
    clearSelection,
  }
}
