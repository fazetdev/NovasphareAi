"use client"

import { useBuilderContext } from "../BuilderContext"

export function BuilderCanvas() {
  const {
    nodes,
    selectNode,
  } = useBuilderContext()

  return (
    <div className="h-full p-6 space-y-3">
      <div className="font-medium">
        Workflow Canvas
      </div>

      {nodes.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          Select nodes from the palette.
        </p>
      ) : (
        nodes.map((node, index) => (
          <button
            key={`${node.id}-${index}`}
            onClick={() => selectNode(node)}
            className="block w-full rounded-md border p-3 text-left"
          >
            {node.name}
          </button>
        ))
      )}
    </div>
  )
}
