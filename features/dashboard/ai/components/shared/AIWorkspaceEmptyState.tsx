import { EmptyState } from "@/components/ui/EmptyState"

export function AIWorkspaceEmptyState() {
  return (
    <EmptyState
      title="AI workspace is not configured"
      description="Add AI providers and models to begin configuring NovaCore intelligence services."
    />
  )
}
