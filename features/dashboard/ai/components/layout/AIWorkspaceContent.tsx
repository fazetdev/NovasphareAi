"use client"

import { PageContainer } from "@/components/layout/page-container"
import { ErrorState } from "@/components/ui/ErrorState"

import { useAIWorkspace } from "../../hooks"

import { AIConfigurationSection } from "../configuration/AIConfigurationSection"
import { AIWorkspaceHeader } from "../header/AIWorkspaceHeader"
import { AIModelsSection } from "../models/AIModelsSection"
import { AIOverviewSection } from "../overview/AIOverviewSection"
import { AIProvidersSection } from "../providers/AIProvidersSection"
import { AIWorkspaceEmptyState } from "../shared/AIWorkspaceEmptyState"
import { AIWorkspaceSkeleton } from "../skeletons/AIWorkspaceSkeleton"

export function AIWorkspaceContent() {
  const {
    providers,
    models,
    configuration,
    isLoading,
    error,
  } = useAIWorkspace()

  if (isLoading) {
    return (
      <PageContainer>
        <AIWorkspaceSkeleton />
      </PageContainer>
    )
  }

  if (error) {
    return (
      <PageContainer>
        <ErrorState
          title="Unable to load AI workspace"
          description={error}
        />
      </PageContainer>
    )
  }

  const isEmpty =
    providers.length === 0 &&
    models.length === 0 &&
    !configuration

  return (
    <PageContainer className="flex flex-col gap-6">
      <AIWorkspaceHeader />

      {isEmpty ? (
        <AIWorkspaceEmptyState />
      ) : (
        <>
          <AIOverviewSection
            providers={providers}
            models={models}
            configuration={configuration}
          />

          <AIProvidersSection
            providers={providers}
          />

          <AIModelsSection
            models={models}
          />

          <AIConfigurationSection
            configuration={configuration}
          />
        </>
      )}
    </PageContainer>
  )
}
