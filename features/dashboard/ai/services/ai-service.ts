export interface AIServiceResponse<T> {
  data: T
  success: boolean
  error?: string
}

export const aiService = {
  async getWorkspace(): Promise<AIServiceResponse<unknown>> {
    return {
      data: null,
      success: true,
    }
  },

  async executePrompt(
    _payload: unknown,
  ): Promise<AIServiceResponse<unknown>> {
    return {
      data: null,
      success: true,
    }
  },

  async compareModels(
    _payload: unknown,
  ): Promise<AIServiceResponse<unknown>> {
    return {
      data: null,
      success: true,
    }
  },
}
