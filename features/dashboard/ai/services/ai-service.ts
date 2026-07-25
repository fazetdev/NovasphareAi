import type {
  AIAnalytics,
  AIConfigurationProfile,
  AIInferenceConfiguration,
  AIModel,
  AIProvider,
  PlaygroundSession,
} from "../types"

export interface AIServiceResponse<T> {
  data: T
  success: boolean
  error?: string

  metadata?: {
    timestamp: string
    requestId?: string
  }
}

export interface AIService {
  getProviders(): Promise<AIProvider[]>

  getModels(): Promise<AIModel[]>

  getWorkspaceConfiguration(): Promise<AIInferenceConfiguration>

  saveWorkspaceConfiguration(
    configuration: AIInferenceConfiguration,
  ): Promise<AIInferenceConfiguration>

  getConfigurationProfiles(): Promise<AIConfigurationProfile[]>

  saveConfigurationProfile(
    profile: AIConfigurationProfile,
  ): Promise<AIConfigurationProfile>

  getPlaygroundSessions(): Promise<PlaygroundSession[]>

  createPlaygroundSession(
    session: PlaygroundSession,
  ): Promise<PlaygroundSession>

  getAnalytics(): Promise<AIAnalytics>
}

export const aiService = {
  async getWorkspace(): Promise<
    AIServiceResponse<unknown>
  > {
    return {
      data: null,
      success: true,
      metadata: {
        timestamp: new Date().toISOString(),
      },
    }
  },

  async executePrompt(
    payload: unknown,
  ): Promise<AIServiceResponse<unknown>> {
    void payload

    return {
      data: null,
      success: true,
      metadata: {
        timestamp: new Date().toISOString(),
      },
    }
  },

  async compareModels(
    payload: unknown,
  ): Promise<AIServiceResponse<unknown>> {
    void payload

    return {
      data: null,
      success: true,
      metadata: {
        timestamp: new Date().toISOString(),
      },
    }
  },
}
