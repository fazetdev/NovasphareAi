import {
  triggerRegistryMockService,
} from "../triggers"

import {
  actionRegistryMockService,
} from "../actions"

export const automationRegistryService = {
  async getTriggers() {
    return triggerRegistryMockService.getTriggers()
  },

  async getTrigger(type: string) {
    return triggerRegistryMockService.getTrigger(
      type as never,
    )
  },

  async validateTrigger(trigger: unknown) {
    return triggerRegistryMockService.validateTrigger(
      trigger as never,
    )
  },

  async getActions() {
    return actionRegistryMockService.getActions()
  },

  async getAction(type: string) {
    return actionRegistryMockService.getAction(
      type as never,
    )
  },

  async validateAction(action: unknown) {
    return actionRegistryMockService.validateAction(
      action as never,
    )
  },
}
