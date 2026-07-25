import type { AICapability } from "./capability"

export type AIProviderStatus =
  | "active"
  | "inactive"
  | "degraded"
  | "maintenance"
  | "deprecated"

export type AIProviderConnectionStatus =
  | "connected"
  | "disconnected"
  | "connecting"
  | "error"

export type AIProviderAuthType =
  | "api-key"
  | "oauth"
  | "managed"
  | "self-hosted"

export interface AIProviderLimits {
  requestsPerMinute?: number
  tokensPerMinute?: number
  maxContextWindow?: number
  maxModels?: number
}

export interface AIProviderHealth {
  connectionStatus: AIProviderConnectionStatus
  latencyMs?: number
  lastCheckedAt?: string
  message?: string
}

export interface AIProvider {
  id: string
  name: string
  slug: string
  description: string

  status: AIProviderStatus
  authType: AIProviderAuthType

  capabilities: AICapability[]
  limits: AIProviderLimits
  health: AIProviderHealth

  metadata: Record<string, unknown>

  createdAt: string
  updatedAt: string
}
