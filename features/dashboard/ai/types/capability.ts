export type AICapabilityType =
  | "text-generation"
  | "reasoning"
  | "vision"
  | "embeddings"
  | "audio"
  | "transcription"
  | "function-calling"
  | "structured-output"
  | "streaming"
  | "image-generation"
  | "safety"

export type AICapabilityStatus =
  | "available"
  | "unavailable"
  | "experimental"

export interface AICapability {
  id: string
  type: AICapabilityType
  status: AICapabilityStatus
  description: string
}
