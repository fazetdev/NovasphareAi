"use client"

import { useState } from "react"

import type {
  AutomationCatalogItem,
} from "../types"

export interface CanvasNode {
  id: string
  item: AutomationCatalogItem
  position: {
    x: number
    y: number
  }
}

export function useWorkflowCanvas() {
  const [nodes, setNodes] = useState<CanvasNode[]>([])

  function addNode(
    item: AutomationCatalogItem,
  ) {
    setNodes((current) => [
      ...current,
      {
        id: crypto.randomUUID(),
        item,
        position: {
          x: 100,
          y: current.length * 120,
        },
      },
    ])
  }

  function removeNode(id: string) {
    setNodes((current) =>
      current.filter(
        (node) => node.id !== id,
      ),
    )
  }

  return {
    nodes,
    addNode,
    removeNode,
  }
}
