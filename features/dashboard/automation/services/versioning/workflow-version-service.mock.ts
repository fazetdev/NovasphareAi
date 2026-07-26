import type {
  WorkflowVersionService,
} from "./workflow-version-service"

import type {
  WorkflowVersion,
} from "../../types"

const versions: WorkflowVersion[] = []

export const workflowVersionMockService: WorkflowVersionService = {
  async getVersions(workflowId) {
    return versions.filter(
      (version) =>
        version.workflowId === workflowId,
    )
  },

  async getVersion(versionId) {
    return versions.find(
      (version) =>
        version.id === versionId,
    )
  },

  async createVersion(version) {
    versions.push(version)

    return version
  },

  async publishVersion(versionId) {
    const version =
      versions.find(
        (item) =>
          item.id === versionId,
      )

    if (!version) {
      throw new Error(
        "Workflow version not found.",
      )
    }

    const updated: WorkflowVersion = {
      ...version,
      status: "published",
      publishedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    return updated
  },
}
