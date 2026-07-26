export type AutomationCatalogItemCategory =
  | "trigger"
  | "action"

export interface AutomationCatalogItem {
  id: string

  category: AutomationCatalogItemCategory

  type: string

  name: string

  description: string

  icon?: string

  tags: string[]

  configurable: boolean

  metadata: Record<string, unknown>
}
