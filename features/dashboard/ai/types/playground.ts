import type { AIInferenceParameters } from "./inference-config"

export type PlaygroundSessionStatus =
  | "draft"
  | "running"
  | "completed"
  | "failed"

export interface PlaygroundPrompt {
  systemPrompt?: string
  userPrompt: string
}

export interface PlaygroundResult {
  response: string
  inputTokens?: number
  outputTokens?: number
  latencyMs?: number
  estimatedCost?: number
}

export interface PlaygroundSession {
  id: string
  name: string

  modelId: string
  prompt: PlaygroundPrompt

  parameters: AIInferenceParameters

  status: PlaygroundSessionStatus

  result?: PlaygroundResult

  createdAt: string
  updatedAt: string
}
