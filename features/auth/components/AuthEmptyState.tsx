import { EmptyState } from "@/components/ui/EmptyState"

interface AuthEmptyStateProps {
  title?: string
  description?: string
}

export function AuthEmptyState({
  title = "No Data Available",
  description = "There is currently no authentication data to display.",
}: AuthEmptyStateProps) {
  return (
    <EmptyState
      title={title}
      description={description}
    />
  )
}
