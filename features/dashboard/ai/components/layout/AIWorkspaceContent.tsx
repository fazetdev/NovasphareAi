"use client"

import { PageContainer } from "@/components/layout/page-container"
import { ErrorState } from "@/components/ui/ErrorState"

import { useAIWorkspace } from "../../hooks"

import { AIAnalyticsSection } from "../analytics"
import { AIComparisonSection } from "../comparison"
import { AIConfigurationSection } from "../configuration/AIConfigurationSection"
import { AIEnterpriseSection } from "../enterprise/AIEnterpriseSection"
import { AIWorkspaceHeader } from "../header/AIWorkspaceHeader"
import { AIModelsSection } from "../models/AIModelsSection"
import {
  AIOverviewQuickActions,
  AIOverviewSection,
  AIWorkspaceHealth,
} from "../overview"
import { AIPlaygroundSection } from "../playground/AIPlaygroundSection"
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
    <PageContainer className="flex flex-col gap-4 sm:gap-6">
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

          <div className="grid gap-4 sm:gap-6 xl:grid-cols-2">
            <AIOverviewQuickActions />

            <AIWorkspaceHealth
              providers={providers}
            />
          </div>

          <AIProvidersSection
            providers={providers}
          />

          <AIModelsSection
            models={models}
          />

          <AIConfigurationSection
            configuration={configuration}
          />

          <AIPlaygroundSection />

          <AIComparisonSection
            models={models}
          />

          <AIAnalyticsSection />

          <AIEnterpriseSection />
        </>
      )}
    </PageContainer>
  )
}
