import type {
  ActionRegistry,
  ActionDefinition,
} from "./action-registry"

const actions: ActionDefinition[] = [
  {
    type: "send.message",
    name: "Send Message",
    description: "Send a message.",
    inputSchema: {},
    outputSchema: {},
    metadata: {},
  },
  {
    type: "run.ai-agent",
    name: "Run AI Agent",
    description: "Execute an AI agent.",
    inputSchema: {},
    outputSchema: {},
    metadata: {},
  },
]

export const actionRegistryMockService: ActionRegistry = {
  async getActions() {
    return actions
  },

  async getAction(type) {
    return actions.find(
      (action) => action.type === type,
    )
  },

  async validateAction() {
    return true
  },
}
