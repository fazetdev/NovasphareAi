import type {
  AIInferenceConfiguration,
  AIModel,
  AIProvider,
} from "../types"

export interface AIService {
  getProviders(): Promise<AIProvider[]>
  getModels(): Promise<AIModel[]>

  getWorkspaceConfiguration(): Promise<AIInferenceConfiguration>

  saveWorkspaceConfiguration(
    configuration: AIInferenceConfiguration,
  ): Promise<AIInferenceConfiguration>
}

export const aiService = {
  async getWorkspace() {
    return {
      data: null,
      success: true,
    }
  },

  async executePrompt(
    payload: unknown,
  ) {
    void payload

    return {
      data: null,
      success: true,
    }
  },

  async compareModels(
    payload: unknown,
  ) {
    void payload

    return {
      data: null,
      success: true,
    }
  },
}
