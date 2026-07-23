"use client"

import { PageContainer } from "@/components/layout/page-container"
import { ErrorState } from "@/components/ui/ErrorState"
import { Skeleton } from "@/components/ui/Skeleton"

import { useAIWorkspace } from "../hooks"

export function AIWorkspaceView() {
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
        <Skeleton className="h-40 w-full" />
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

  return (
    <PageContainer>
      <div className="mb-6">
        <h1 className="text-lg font-semibold">
          AI Workspace
        </h1>

        <p className="text-sm text-muted-foreground">
          Manage AI providers, models, configurations, and evaluation tools.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          Providers: {providers.length}
        </div>

        <div>
          Models: {models.length}
        </div>

        <div>
          Default Configuration:{" "}
          {configuration?.name ?? "Not configured"}
        </div>
      </div>
    </PageContainer>
  )
}
