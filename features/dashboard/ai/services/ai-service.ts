import type {
  AIModel,
  AIProvider,
  AIInferenceConfiguration,
  PlaygroundSession,
} from "../types"

export interface AIService {
  getProviders(): Promise<AIProvider[]>

  getModels(): Promise<AIModel[]>

  getWorkspaceConfiguration(): Promise<AIInferenceConfiguration>

  saveWorkspaceConfiguration(
    configuration: AIInferenceConfiguration
  ): Promise<AIInferenceConfiguration>

  getPlaygroundSessions(): Promise<PlaygroundSession[]>

  createPlaygroundSession(
    session: PlaygroundSession
  ): Promise<PlaygroundSession>
}
