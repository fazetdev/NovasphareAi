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

export interface AIModelPricing {
  inputPerMillionTokens?: number
  outputPerMillionTokens?: number
  currency: string
}

export interface AIModelLatency {
  averageMs?: number
  rating?: "low" | "medium" | "high"
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

  contextWindow: number
  capabilities: AICapability[]

  pricing: AIModelPricing
  latency: AIModelLatency

  isFavorite: boolean
  createdAt: string
  updatedAt: string
}
