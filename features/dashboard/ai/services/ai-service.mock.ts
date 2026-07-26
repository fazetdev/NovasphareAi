import type {
  AIAnalytics,
  AIConfigurationProfile,
  AIEnterpriseConfiguration,
  AIInferenceConfiguration,
  AIModel,
  AIProvider,
  PlaygroundSession,
} from "../types"

import type { AIService } from "./ai-service"

const now = new Date().toISOString()

const mockProviders: AIProvider[] = []

const mockModels: AIModel[] = []

const mockWorkspaceConfiguration: AIInferenceConfiguration = {
  id: "workspace-default",
  name: "Workspace Default Configuration",
  description: "Default AI behaviour for workspace agents",

  scope: "workspace",

  workspaceId: "workspace-main",

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

  overrides: [],

  isDefault: true,
  isSystem: true,

  metadata: {},

  createdAt: now,
  updatedAt: now,
}

const mockAnalytics: AIAnalytics = {
  usage: {
    totalRequests: 1250,
    successfulRequests: 1225,
    failedRequests: 25,
    totalTokens: 3250000,
  },

  cost: {
    totalCost: 84.25,
    averageCostPerRequest: 0.067,
    currency: "USD",
  },

  performance: {
    averageLatencyMs: 310,
    p95LatencyMs: 540,
    uptimePercentage: 99.9,
  },

  generatedAt: now,
}

const mockEnterpriseConfiguration: AIEnterpriseConfiguration = {
  workspaceId: "workspace-main",

  security: {
    encryptionEnabled: true,
    auditLoggingEnabled: true,
    dataRetentionDays: 90,
    metadata: {},
  },

  auditLogs: [
    {
      id: "audit-001",
      action: "model.configuration.updated",
      actor: "admin",
      resource: "workspace-default",
      timestamp: now,
      metadata: {},
    },
  ],

  createdAt: now,
  updatedAt: now,
}

const mockConfigurationProfiles: AIConfigurationProfile[] = []

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

  async getConfigurationProfiles() {
    return mockConfigurationProfiles
  },

  async saveConfigurationProfile(profile) {
    return profile
  },

  async getPlaygroundSessions() {
    return mockPlaygroundSessions
  },

  async createPlaygroundSession(session) {
    return session
  },

  async getAnalytics() {
    return mockAnalytics
  },

  async getEnterpriseConfiguration() {
    return mockEnterpriseConfiguration
  },
}
