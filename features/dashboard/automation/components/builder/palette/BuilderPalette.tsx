"use client"

import { useAutomationCatalog } from "../../../hooks/useAutomationCatalog"
import { useBuilderContext } from "../BuilderContext"

export function BuilderPalette() {
  const { items } =
    useAutomationCatalog()

  const {
    addNode,
  } = useBuilderContext()

  return (
    <aside className="w-64 p-4 space-y-3 border-r">
      <h3 className="font-medium">
        Nodes
      </h3>

      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => addNode(item)}
          className="w-full rounded-md border p-3 text-left text-sm"
        >
          <div className="font-medium">
            {item.name}
          </div>

          <div className="text-muted-foreground">
            {item.category}
          </div>
        </button>
      ))}
    </aside>
  )
}
