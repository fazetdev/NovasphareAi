import type {
  AIModel,
  AIProvider,
  AIInferenceConfiguration,
  PlaygroundSession,
} from "../types"

import type { AIService } from "./ai-service"

const mockProviders: AIProvider[] = []

const mockModels: AIModel[] = []

const mockWorkspaceConfiguration: AIInferenceConfiguration = {
  id: "workspace-default",
  name: "Workspace Default Configuration",
  scope: "workspace",
  parameters: {
    temperature: 0.7,
    topP: 1,
    maxTokens: 2048,
    streaming: true,
  },
  enableFunctionCalling: true,
  enableStructuredOutput: true,
  enableVision: false,
  enableReasoning: false,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}

const mockPlaygroundSessions: PlaygroundSession[] = []

export const aiMockService: AIService = {
  async getProviders() {
    return mockProviders
  },

  async getModels() {
    return mockModels
  },

  async getWorkspaceConfiguration() {
    return mockWorkspaceConfiguration
  },

  async saveWorkspaceConfiguration(configuration) {
    return configuration
  },

  async getPlaygroundSessions() {
    return mockPlaygroundSessions
  },

  async createPlaygroundSession(session) {
    return session
  },
}
