import type { AICapability } from "./capability"

export type AIProviderStatus =
  | "active"
  | "inactive"
  | "deprecated"

export type AIProviderAuthType =
  | "api-key"
  | "oauth"
  | "managed"
  | "self-hosted"

export interface AIProviderLimits {
  requestsPerMinute?: number
  tokensPerMinute?: number
  maxContextWindow?: number
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
  metadata: Record<string, unknown>
  createdAt: string
  updatedAt: string
}
