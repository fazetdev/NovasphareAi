"use client"

import { BuilderCanvas } from "./canvas/BuilderCanvas"
import { BuilderPalette } from "./palette/BuilderPalette"
import { BuilderConfigPanel } from "./config/BuilderConfigPanel"

import {
  BuilderProvider,
} from "./BuilderContext"

import {
  DraftProvider,
  useDraftContext,
} from "./DraftContext"

import {
  useWorkflowPersistence,
} from "../../hooks/useWorkflowPersistence"

function BuilderActions() {
  const {
    draft,
  } = useDraftContext()

  const {
    saveWorkflow,
  } = useWorkflowPersistence()

  async function handleSave() {
    await saveWorkflow({
      id: crypto.randomUUID(),

      name:
        draft.name ??
        "Untitled Workflow",

      description:
        draft.description,

      status:
        "draft",

      ownership: {
        workspaceId: "default",
      },

      steps: [],

      variables: [],

      executionSettings: {
        allowRetry: true,
        metadata: {},
      },

      tags:
        draft.tags ?? [],

      metadata:
        draft.metadata ?? {},

      createdAt:
        new Date().toISOString(),

      updatedAt:
        new Date().toISOString(),
    })
  }

  return (
    <button
      onClick={handleSave}
      className="rounded-md border px-3 py-2 text-sm"
    >
      Save Workflow
    </button>
  )
}

function BuilderLayout() {
  return (
    <>
      <div className="flex justify-end border-b p-3">
        <BuilderActions />
      </div>

      <div className="flex flex-1">
        <BuilderPalette />

        <main className="flex-1 border-x">
          <BuilderCanvas />
        </main>

        <BuilderConfigPanel />
      </div>
    </>
  )
}

export function AutomationBuilder() {
  return (
    <BuilderProvider>
      <DraftProvider>
        <div className="flex h-full min-h-[700px] flex-col">
          <BuilderLayout />
        </div>
      </DraftProvider>
    </BuilderProvider>
  )
}
