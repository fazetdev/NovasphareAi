import type {
  TriggerRegistry,
} from "./trigger-registry"

import type {
  TriggerDefinition,
} from "./trigger-registry"

const triggers: TriggerDefinition[] = [
  {
    type: "contact.created",
    name: "Contact Created",
    description: "Runs when a new contact is created.",
    schema: {},
    metadata: {},
  },
  {
    type: "message.received",
    name: "Message Received",
    description: "Runs when a message is received.",
    schema: {},
    metadata: {},
  },
]

export const triggerRegistryMockService: TriggerRegistry = {
  async getTriggers() {
    return triggers
  },

  async getTrigger(type) {
    return triggers.find(
      (trigger) => trigger.type === type,
    )
  },

  async validateTrigger() {
    return true
  },
}
