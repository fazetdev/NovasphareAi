import type { AIInferenceParameters } from "./inference-config"

export type PlaygroundSessionStatus =
  | "draft"
  | "queued"
  | "running"
  | "completed"
  | "failed"
  | "cancelled"

export interface PlaygroundPrompt {
  systemPrompt?: string
  userPrompt: string
}

export interface PlaygroundMetrics {
  inputTokens?: number
  outputTokens?: number
  totalTokens?: number

  latencyMs?: number
  estimatedCost?: number
}

export interface PlaygroundResult {
  response: string
  finishReason?: string

  metrics: PlaygroundMetrics
}

export interface PlaygroundSession {
  id: string
  name: string
  description?: string

  workspaceId?: string

  providerId: string
  modelId: string

  prompt: PlaygroundPrompt
  parameters: AIInferenceParameters

  status: PlaygroundSessionStatus

  tags: string[]

  result?: PlaygroundResult

  createdAt: string
  updatedAt: string
}
