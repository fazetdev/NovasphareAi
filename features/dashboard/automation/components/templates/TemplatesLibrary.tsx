"use client"

import {
  useAutomationEnterprise,
} from "../../hooks/useAutomationEnterprise"

import {
  AutomationEmpty,
  AutomationLoading,
} from "../states"

import {
  EnterpriseGovernance,
} from "./EnterpriseGovernance"

import {
  WorkflowApprovalControls,
} from "./WorkflowApprovalControls"

import {
  WorkflowCollaboration,
} from "./WorkflowCollaboration"

import {
  WorkflowImportExport,
} from "./WorkflowImportExport"

import {
  WorkflowVersioning,
} from "./WorkflowVersioning"

import {
  TemplateLibraryGrid,
} from "./library/TemplateLibraryGrid"

export function TemplatesLibrary() {
  const {
    data,
  } = useAutomationEnterprise()

  if (data === null) {
    return <AutomationLoading />
  }

  const enterprise =
    data as {
      templates?: unknown[]
    }

  if (
    !enterprise.templates ||
    enterprise.templates.length === 0
  ) {
    return (
      <AutomationEmpty
        title="No workflow templates"
        description="Templates will appear here after they are created or imported."
      />
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">
          Workflow Templates
        </h2>

        <p className="text-sm text-muted-foreground">
          Browse reusable automation workflow templates.
        </p>
      </div>

      <TemplateLibraryGrid />

      <WorkflowVersioning />

      <WorkflowImportExport />

      <WorkflowCollaboration />

      <WorkflowApprovalControls />

      <EnterpriseGovernance />
    </div>
  )
}
