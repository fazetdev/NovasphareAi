export type AIConfigurationScope =
  | "platform"
  | "workspace"
  | "provider"
  | "model"
  | "agent"
  | "request"

export interface AIInferenceParameters {
  temperature?: number
  topP?: number
  maxTokens?: number
  streaming?: boolean
}

export interface AIInferenceConfiguration {
  id: string
  name: string
  scope: AIConfigurationScope

  parameters: AIInferenceParameters

  enableFunctionCalling?: boolean
  enableStructuredOutput?: boolean
  enableVision?: boolean
  enableReasoning?: boolean

  createdAt: string
  updatedAt: string
}
