"use client"

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react"

import type {
  AutomationCatalogItem,
} from "../../types"

type BuilderContextType = {
  selectedNode: AutomationCatalogItem | null
  nodes: AutomationCatalogItem[]
  selectNode: (node: AutomationCatalogItem) => void
  addNode: (node: AutomationCatalogItem) => void
  clearSelection: () => void
}

const BuilderContext =
  createContext<BuilderContextType | null>(null)

export function BuilderProvider({
  children,
}: {
  children: ReactNode
}) {
  const [selectedNode, setSelectedNode] =
    useState<AutomationCatalogItem | null>(null)

  const [nodes, setNodes] =
    useState<AutomationCatalogItem[]>([])

  function addNode(
    node: AutomationCatalogItem,
  ) {
    setNodes((current) => [
      ...current,
      node,
    ])

    setSelectedNode(node)
  }

  return (
    <BuilderContext.Provider
      value={{
        selectedNode,
        nodes,
        selectNode: setSelectedNode,
        addNode,
        clearSelection: () =>
          setSelectedNode(null),
      }}
    >
      {children}
    </BuilderContext.Provider>
  )
}

export function useBuilderContext() {
  const context = useContext(
    BuilderContext,
  )

  if (!context) {
    throw new Error(
      "useBuilderContext must be used inside BuilderProvider",
    )
  }

  return context
}
