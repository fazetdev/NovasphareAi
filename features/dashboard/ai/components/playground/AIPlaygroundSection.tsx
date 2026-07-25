"use client"

import { useAIPlayground } from "../../hooks"

import { AIPlaygroundControls } from "./controls/AIPlaygroundControls"
import { AIPlaygroundEditor } from "./editor/AIPlaygroundEditor"
import { AIPlaygroundHistory } from "./history/AIPlaygroundHistory"
import { AIPlaygroundResponse } from "./response/AIPlaygroundResponse"

export function AIPlaygroundSection() {
  const {
    sessions,
    selectedSession,
    isLoading,
    isExecuting,
  } = useAIPlayground()

  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold">
          AI Playground
        </h2>

        <p className="text-sm text-muted-foreground">
          Test prompts, compare responses, and experiment with model settings.
        </p>
      </div>

      <AIPlaygroundControls
        isExecuting={isExecuting}
      />

      <div className="grid gap-6 xl:grid-cols-2">
        <AIPlaygroundEditor
          session={selectedSession}
        />

        <AIPlaygroundResponse
          session={selectedSession}
        />
      </div>

      <AIPlaygroundHistory
        sessions={sessions}
        isLoading={isLoading}
      />
    </section>
  )
}
