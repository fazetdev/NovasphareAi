"use client"

import {
  useBuilderContext,
} from "../BuilderContext"

import {
  ValidationPanel,
} from "./ValidationPanel"

import {
  ExecutionPreview,
} from "./ExecutionPreview"

import {
  WorkflowMetadataEditor,
} from "../metadata/WorkflowMetadataEditor"

import {
  WorkflowSelector,
} from "../workflows/WorkflowSelector"

export function BuilderConfigPanel() {
  const {
    selectedNode,
  } = useBuilderContext()

  return (
    <aside className="w-72 p-4 space-y-4">
      <WorkflowSelector />

      <WorkflowMetadataEditor />

      {selectedNode ? (
        <div>
          <div className="font-medium">
            {selectedNode.name}
          </div>

          <p className="text-sm text-muted-foreground">
            {selectedNode.description}
          </p>
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">
          Select a node to configure.
        </p>
      )}

      <ValidationPanel />

      <ExecutionPreview />
    </aside>
  )
}
