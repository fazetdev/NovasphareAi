export type AIConfigurationScope =
  | "platform"
  | "workspace"
  | "provider"
  | "model"
  | "configuration"
  | "agent"
  | "request"

export interface AIInferenceParameters {
  temperature?: number
  topP?: number
  topK?: number
  maxTokens?: number
  frequencyPenalty?: number
  presencePenalty?: number
  stopSequences?: string[]
  seed?: number
  streaming?: boolean
}

export interface AIConfigurationOverride {
  id: string
  source: AIConfigurationScope
  targetId: string
  parameters: Partial<AIInferenceParameters>
  metadata: Record<string, unknown>
  createdAt: string
  updatedAt: string
}

export interface AIInferenceConfiguration {
  id: string

  name: string
  description?: string

  scope: AIConfigurationScope

  workspaceId?: string
  providerId?: string
  modelId?: string

  parentConfigurationId?: string

  parameters: AIInferenceParameters

  enableFunctionCalling: boolean
  enableStructuredOutput: boolean
  enableVision: boolean
  enableReasoning: boolean

  overrides?: AIConfigurationOverride[]

  isDefault: boolean
  isSystem: boolean

  metadata: Record<string, unknown>

  createdAt: string
  updatedAt: string
}

export interface AIConfigurationProfile {
  id: string

  name: string
  description?: string

  configurationId: string
  providerId: string
  modelId: string

  tags: string[]

  isDefault: boolean
  isSystem: boolean
  isActive: boolean

  metadata: Record<string, unknown>

  createdAt: string
  updatedAt: string
}
