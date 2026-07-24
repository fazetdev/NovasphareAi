export type AICapabilityType =
  | "text-generation"
  | "reasoning"
  | "vision"
  | "multimodal"
  | "embeddings"
  | "audio"
  | "speech"
  | "transcription"
  | "translation"
  | "function-calling"
  | "structured-output"
  | "streaming"
  | "image-generation"
  | "video-generation"
  | "safety"
  | "moderation"
  | "reranking"
  | "fine-tuning"

export type AICapabilityStatus =
  | "available"
  | "preview"
  | "experimental"
  | "deprecated"
  | "unavailable"

export interface AICapability {
  id: string
  type: AICapabilityType
  name: string
  description: string

  status: AICapabilityStatus
  supported: boolean
  configurable: boolean

  metadata: Record<string, unknown>

  createdAt: string
  updatedAt: string
}
