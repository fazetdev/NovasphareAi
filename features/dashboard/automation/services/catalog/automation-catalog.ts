import {
  automationRegistryService,
} from "../registry"

import type {
  AutomationCatalogItem,
} from "../../types"

export const automationCatalogService = {
  async getCatalog(): Promise<AutomationCatalogItem[]> {
    const [
      triggers,
      actions,
    ] = await Promise.all([
      automationRegistryService.getTriggers(),
      automationRegistryService.getActions(),
    ])

    return [
      ...triggers.map((trigger) => ({
        id: trigger.type,
        category: "trigger" as const,
        type: trigger.type,
        name: trigger.name,
        description: trigger.description,
        tags: [],
        configurable: true,
        metadata: trigger.metadata,
      })),

      ...actions.map((action) => ({
        id: action.type,
        category: "action" as const,
        type: action.type,
        name: action.name,
        description: action.description,
        tags: [],
        configurable: true,
        metadata: action.metadata,
      })),
    ]
  },
}
