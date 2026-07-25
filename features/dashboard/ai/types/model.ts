import type { AICapability } from "./capability"

export type AIModelStatus =
  | "active"
  | "deprecated"
  | "experimental"

export type AIModelCategory =
  | "language"
  | "multimodal"
  | "embedding"
  | "audio"
  | "image"
  | "video"

export interface AIModelPricing {
  inputPerMillionTokens?: number
  outputPerMillionTokens?: number
  imageGenerationCost?: number
  audioGenerationCost?: number
  currency: string
}

export interface AIModelLatency {
  averageMs?: number
  p95Ms?: number
  rating?: "low" | "medium" | "high"
}

export interface AIModelSpecification {
  contextWindow: number
  maxOutputTokens?: number
  supportsStreaming: boolean
  supportsFineTuning: boolean
}

export interface AIModel {
  id: string

  providerId: string

  name: string
  slug: string
  version: string

  category: AIModelCategory
  status: AIModelStatus

  description: string

  specification: AIModelSpecification

  capabilities: AICapability[]

  pricing: AIModelPricing
  latency: AIModelLatency

  isFavorite: boolean

  metadata: Record<string, unknown>

  createdAt: string
  updatedAt: string
}
