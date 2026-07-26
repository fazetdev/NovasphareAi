export type WorkflowVersionStatus =
  | "draft"
  | "published"
  | "deprecated"

export interface WorkflowVersion {
  id: string

  workflowId: string

  versionNumber: number

  status: WorkflowVersionStatus

  definitionId?: string

  changeSummary?: string

  createdBy?: string

  publishedAt?: string

  metadata: Record<string, unknown>

  createdAt: string

  updatedAt: string
}
