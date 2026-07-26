import type {
  WorkflowVersion,
} from "../../types"

export interface WorkflowVersionService {
  getVersions(
    workflowId: string,
  ): Promise<WorkflowVersion[]>

  getVersion(
    versionId: string,
  ): Promise<WorkflowVersion | undefined>

  createVersion(
    version: WorkflowVersion,
  ): Promise<WorkflowVersion>

  publishVersion(
    versionId: string,
  ): Promise<WorkflowVersion>
}
